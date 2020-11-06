title: Progress Bar
description: Show the progress that a user has made.

This is a component shows the progress that the user has made.
It takes the current `value` as well as the `max` number of steps that the user has made.
Other Content is shown underneath the ProgressBar.

```html
<label class="progress-bar undefined">
  <progress value="2" max="3"></progress>
  Progress
</label>
```

Optionally, if you do not pass any values into the ProgressBar, a label with the values that you specified will be generated.

```html
<label class="progress-bar undefined">
  <progress value="2" max="3"></progress>
  2 / 3
</label>
```

## Green Progress Bars

There are also progress bars in a green variant.

```html
<label class="progress-bar green">
  <progress value="1" max="5"></progress>
  Progress
</label>
```

```html
<label class="progress-bar green">
  <progress value="1" max="5"></progress>
  1 / 5
</label>
```
