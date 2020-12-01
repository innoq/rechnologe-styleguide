title: Status Bar
description: A status bar that can hold up to three progress bars with and without avatars

```html
<section class="status-bar">
    <label class="progress-bar green">
        <progress value="4" max="5"></progress>
        Status 4 / 5
    </label>
    <div class="progress-bar-with-avatars">
        <label class="progress-bar green">
            <progress value="3" max="8"></progress>
            Consultants 3 / 8
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

    <div class="progress-bar-with-avatars">
        <label class="progress-bar yellow">
            <progress value="1" max="5"></progress>
            principal 0/1
        </label>
        <ul class="progress-bar-avatars">
            <li>
                <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300"/></a>
            </li>
        </ul>
    </div>
</section>
```
