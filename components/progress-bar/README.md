title: Progress Bar
description: Show the progress that a user has made.

This is a component shows the progress that the user has made.
It takes the current `value` as well as the `max` number of steps that the user has made.
The label is inserted beneath the progress bar.

## Green Progress Bars

```html
<label class="progress-bar green">
    <progress value="1" max="5"></progress>
    1 / 5
</label>
```

## Red Progress Bars

```html
<label class="progress-bar red">
    <progress value="1" max="5"></progress>
    1 / 5
</label>
```

## Yellow Progress Bars

```html
<label class="progress-bar yellow">
    <progress value="1" max="5"></progress>
    1 / 5
</label>
```

## Progress Bar combined with avatars

This component is used when each step of the progress is made by a single person.

```html
<div class="progress-bar-with-avatars">
    <label class="progress-bar green">
        <progress value="1" max="3"></progress>
        1 / 5
    </label>
    <ul class="progress-bar-avatars">
        <li>
            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300"/></a>
        </li>
        <li>
            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/301"/></a>
        </li>
        <li>
            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/302"/></a>
        </li>
    </ul>
</div>
```

When you have more people than you have space for, you can use the more placeholder.

```html
<div class="progress-bar-with-avatars">
    <label class="progress-bar green">
        <progress value="1" max="3"></progress>
        1 / 5
    </label>
    <ul class="progress-bar-avatars">
        <li>
            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300"/></a>
        </li>
        <li>
            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/301"/></a>
        </li>
        <li>
            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/302"/></a>
        </li>
    </ul>
    <a href="#" class="progress-bar-more-avatars">and five more</a>
</div>
```
