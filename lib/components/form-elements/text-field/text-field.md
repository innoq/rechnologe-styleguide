title: Text Field
description: Text Field

A collection of textfields

## Text field with visible label

```html
<div class="form-group">
    <label for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-control" id="label-name" name="label-name" type="text" />
</div>
```

## Text field with invisible label

```html
<div class="form-group">
    <label class="sr-only" for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-control" id="label-name" name="label-name" type="text" />
</div>
```

## Text field with error message

```html height=500
<div class="form-group">
    <label class="form-label" for="text-field"> Ich bin ein Label</label>
    <div id="form-text" class="form-text">Gib hier deinen Text ein.</div>
    <span id="form-error" class="invalid-feedback">
        <span class="sr-only">Error:</span>
        Da ist etwas nicht korrekt.
    </span>
    <input class="form-control is-invalid" id="text-field" name="text-field" rows="5" aria-describedby="form-text invalid-feedback"></input>
</div>
```
