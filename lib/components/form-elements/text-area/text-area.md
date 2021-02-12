title: Text Area
description: Text Area

Text areas

## Text area with visible label

```html height=200
<div class="form-group">
    <label for="text-area"> Ich bin ein Label </label>
    <textarea id="text-area" name="text-area" rows="5"></textarea>
</div>
```

## Text area with invisible label

```html height=200
<div class="form-group">
    <label class="sr-only" for="text-area"> Ich bin ein Label </label>
    <textarea id="text-area" name="text-area" rows="5"></textarea>
</div>
```

## Text area with error message

```html height=200
<div class="form-group">
    <label class="form-label" for="text-area"> Ich bin ein Label</label>
    <small class="form-text">Must be at least 6 characters long</small>
    <span id="form-error" class="invalid-feedback">
        <span class="sr-only">Error:</span>
        Da ist etwas nicht korrekt.
    </span>
    <textarea class="is-invalid" id="text-area" name="text-area" rows="5" aria-describedby="form-text is-invalid"></textarea>
</div>
```
