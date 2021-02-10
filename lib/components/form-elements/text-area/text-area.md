title: Text Area
description: Text Area

Text areas

## Text area with visible label

```html height=500
<div class="form-group">
    <label class="form-label" for="text-area"> Ich bin ein Label </label>
    <textarea class="form-textarea" id="text-area" name="text-area" rows="5"></textarea>
</div>
```

## Text area with invisible label

```html height=500
<div class="form-group">
    <label class="sr-only" for="text-area"> Ich bin ein Label </label>
    <textarea class="form-textarea" id="text-area" name="text-area" rows="5"></textarea>
</div>
```

## Text area with error message

```html height=500
<div class="form-group">
    <label class="form-label" for="text-area"> Ich bin ein Label</label>
    <div id="form-hint" class="form-hint">Gib hier deinen Text ein.</div>
    <span id="form-error" class="form-error-message">
        <span class="sr-only">Error:</span>
        Da ist etwas nicht korrekt.
    </span>
    <textarea class="form-textarea form-textarea--error" id="text-area" name="text-area" rows="5" aria-describedby="form-hint form-error"></textarea>
</div>
```
