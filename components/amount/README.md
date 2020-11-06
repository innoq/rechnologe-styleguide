title: Amount
description: Styling for showing an amount

This is an atom which provides styling for an amount.
This component doesn't have a default color, but rather inherits the color from the parent component.

```html
<span class="amount">2570.5</span>
```

It can also format a number as a currency. You need to provide both a currency (for example `JPY`) as well as a locale (for example `ja-JP`)):

```html
<span class="amount">￥2,576</span>
```
