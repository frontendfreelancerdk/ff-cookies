# ff-cookie

![Image alt](http://prntscr.com/l6uilv)

## Installing 

npm install ff-cookie --save

## Using

#### Basic
```html
<ff-cookie></ff-cookie>
```

#### Also you can set up options:
```html
<ff-cookie
 link="/cookie-politic"
 linkText="cookie policy"
 agreeText="Agree"
 description="We use cookies to ensure you the best experience. By clicking around the site you accept our "
 
 expireDays="365"
 path="/"
 
 (onAccept)="someHandler($event)"
 ></ff-cookie>
```

### Types and default values 
```typescript
  link: string = '';
  linkText: string = 'cookie policy';
  agreeText: string = 'Agree';
  description: string = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  path: string = '/';
  expireDays: number | string  = 365;
```

## Styling 

You can change default styles. Just cover

```css
.ff-cookie-wrapper{
// styles for wrapper
}
.ff-cookie-description{
// styles for description
}

.ff-cookie-more{
// styles for link 
}

.ff-cookie-agree{
// styles for accept button
}

```
