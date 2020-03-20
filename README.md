[![Build Status](https://travis-ci.org/frontendfreelancerdk/ff-cookies.svg?branch=master)](https://travis-ci.org/frontendfreelancerdk/ff-cookies)


# ff-cookies

![Screenshot](https://github.com/frontendfreelancerdk/ff-cookies/blob/master/projects/ff-cookies/screenshot.png?raw=true)

## Installing 

npm install ff-cookies --save

## Using

#### Basic

Simple usage
```html
<ff-cookies></ff-cookies>
```

#### Also you can set up options:
```html
<ff-cookies
<!-- You can change the default method that determines whether to display the component or not. -->
 [checkCookies]="myCheckCookies.bind(this)" 
<!-- Cookies options -->
 path="/"
 expireDays="30"
 cookieName="myCookieName"
 cookieValue="cookies accepted"
<!-- set href for link -->
 link="/cookies-politic"
<!-- set text for link -->
 linkText="cookies policy"
<!-- set text for "agree" button -->
 agreeText="Agree"
<!-- set main text -->
 description="We use cookies to ensure you the best experience. By clicking around the site you accept our "
<!-- output triggered after user click on "accept" button -->
 (accept)="myHandler($event)"
></ff-cookies>
```

### Types and default values 
```typescript
  checkCookies: () => boolean;
  accept: (event: Event) => void;
  description: string = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  linkText: string = 'cookies policy';
  link: string = '';
  agreeText: string = 'Agree';
  path: string = '/';
  expireDays: string | number = 365;
  cookieName: string = 'myCookieName';
  cookieValue: string = 'cookies accepted';
```

## Styling 

You can change default styles. That can be used to target the override

```css
.ff-cookies-wrapper{
// styles for wrapper
}
.ff-cookies-description{
// styles for description
}

.ff-cookies-more{
// styles for link 
}

.ff-cookies-agree{
// styles for accept button
}

```

# Version 9.X.X
Since version 9.0.0 we added two more components: `ff-cookies-modal` and `ff-cookies-advanced`.

Notice! `ff-cookies-modal` component is not ready yet. You can use it as experimental.

## `ff-cookies-advanced`
![Screenshot](https://github.com/frontendfreelancerdk/ff-cookies/blob/master/projects/ff-cookies/screenshot_advanced.png?raw=true)

Component looks like simple ff-cookies, but it can be expanded and show details about cookies you use,
your cookies politic (without adding additional page) and user will be able to choose what cookies your web site may use.

### Usage

```html
<ff-cookies-advanced [description]="description"
                     [linkText]="linkText" [link]="link"
                     [agreeText]="agreeText"
                     (accepted)="log($event)"
                     [cookiesSet]="cookiesSet"
                     [mainTabsTitle]="['Declaration', 'About cookies']">
    <div aside>Some text for declaration aside bar should be marked by 'aside' attr</div>
    <div body>Main text of cookies declaration (cookies politic)  should be marked by 'body' attr</div>
</ff-cookies-advanced>
```
#### Pay attention to two new properties `cookiesSet` and `mainTabsTitle`, also to content inside component!
```typescript
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICookiesSet} from 'ff-cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ff-cookies';
  description = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  linkText = 'cookies policy';
  link = 'cookies';
  agreeText = 'Ok';

// Important!!!
  cookiesSet: ICookiesSet;

  constructor(private http: HttpClient) {
    this.http.get('/assets/cookies.json').subscribe((json: ICookiesSet) => {
      this.cookiesSet = json;
    });
  }

  log(cookies) {
    console.log(cookies);
  }
}
```

### Interfaces

```typescript

export interface ICookie {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  dataProcessor: string;
  dataProcessorPrivacyPolicy: string;
  type: string;
}

//the same as ICookie but for opportunity use some translations for titles
export interface ICookieTitles {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  dataProcessor: string;
  dataProcessorPrivacyPolicy: string;
  type: string;
}

export interface ICookiesGroup {
  id: number;
  name: string;
  cookies: ICookie[];
  description: string;
  titles: ICookieTitles;
  required?: boolean;
}

export interface ICookiesSet {
  groups: ICookiesGroup[];
}
```
