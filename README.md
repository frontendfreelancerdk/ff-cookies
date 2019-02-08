[![Build Status](https://travis-ci.org/frontendfreelancerdk/ff-cookies.svg?branch=master)](https://travis-ci.org/frontendfreelancerdk/ff-cookies)


# ff-cookies

![Screenshot](https://github.com/frontendfreelancerdk/ff-cookies/blob/master/projects/ff-cookies/screenshot.png?raw=true)

## Installing 

npm install ff-cookies --save

## Using

#### Basic

There must be present 2 methods for check and set cookies. You should make some logic for this. It let us to use  SSR and @ngx-utils/cookies
```html
<ff-cookies
 [checkCookies]="myMethodForCheckCookies.bind(this)"
 [setCookies]="myMethodForSetCookies.bind(this)"
 ></ff-cookies>
```

#### Also you can set up options:
```html
<ff-cookies
  
 [checkCookies]="checkCookies.bind(this)"
 [setCookies]="setCookies.bind(this)"
 
 (accept)="someHandler($event)"
 
 link="/cookies-politic"
 linkText="cookies policy"
 agreeText="Agree"
 description="We use cookies to ensure you the best experience. By clicking around the site you accept our "

 ></ff-cookies>
```

### Types and default values 
```typescript
  checkCookies: () => boolean;
  setCookies: () => void; 
  accept: (event: Event) => void;
  description: string = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  linkText: string = 'cookies policy';
  link: string = '';
  agreeText: string = 'Agree';
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
