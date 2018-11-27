# ff-cookies

![Screenshot](https://github.com/frontendfreelancerdk/ff-cookies/blob/master/screenshot.png)

## Installing 

npm install ff-cookies --save

## Using

#### Basic
```html
<ff-cookies></ff-cookies>
```

#### Also you can set up options:
```html
<ff-cookies
 link="/cookies-politic"
 linkText="cookies policy"
 agreeText="Agree"
 description="We use cookies to ensure you the best experience. By clicking around the site you accept our "
 
 expireDays="365"
 path="/"
 
 (onAccept)="someHandler($event)"
 ></ff-cookies>
```

### Types and default values 
```typescript
  description: string = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  linkText: string = 'cookies policy';
  link: string = '';
  agreeText: string = 'Agree';
  path: string = '/';
  expireDays: number | string  = 365;
```

## Styling 

You can change default styles. Just cover

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
