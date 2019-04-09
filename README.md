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

You can change default styles. That can be used to target the overlay 

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
