import {animate, state, style, transition, trigger} from '@angular/animations';

export const expandAnimation = trigger('openClose', [
  // ...
  state('open', style({
    maxHeight: '*',
  })),
  state('closed', style({
    maxHeight: '0',
  })),
  transition('open => closed', [
    animate('0.5s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ]),
]);
