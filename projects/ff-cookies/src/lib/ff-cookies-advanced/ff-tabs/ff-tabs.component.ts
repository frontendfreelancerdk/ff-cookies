import {AfterContentInit, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {FFTabComponent} from './ff-tab/ff-tab.component';

@Component({
  selector: 'ff-tabs',
  templateUrl: './ff-tabs.component.html',
  styleUrls: ['./ff-tabs.component.scss']
})
export class FFTabsComponent implements AfterContentInit {
  @Input() vertical = false;
  @ContentChildren(FFTabComponent) tabs: QueryList<FFTabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab && tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(selectedTab: FFTabComponent) {
    if (selectedTab) {
      if (selectedTab.active && this.vertical && window.innerWidth <= 767) {
        selectedTab.active = false;
      } else if (!selectedTab.active) {
        this.tabs.toArray().forEach(tab => tab.active = false);
        selectedTab.active = true;
      }
    }
  }

  inputClickHandler($event: MouseEvent, tab: FFTabComponent) {
    $event.stopPropagation();
    tab.checked = !tab.checked;
    tab.selected.emit(tab.checked);
  }
}
