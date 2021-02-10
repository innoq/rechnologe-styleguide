title: Text Field
description: Text Field

A collection of textfields

## Text field with visible label

```html
<div class="form-group">
    <label class="form-label" for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-input" id="label-name" name="label-name" type="text" />
</div>
```

## Text field with invisible label

```html
<div class="form-group">
    <label class="sr-only" for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-input" id="label-name" name="label-name" type="text" />
</div>
```

## Text field with error message

```html height=500
<div class="form-group">
    <label class="form-label" for="text-field"> Ich bin ein Label</label>
    <div id="form-hint" class="form-hint">Gib hier deinen Text ein.</div>
    <span id="form-error" class="form-error-message">
        <span class="sr-only">Error:</span>
        Da ist etwas nicht korrekt.
    </span>
    <input class="form-input form-input--error" id="text-field" name="text-field" rows="5" aria-describedby="form-hint form-error"></input>
</div>
```
