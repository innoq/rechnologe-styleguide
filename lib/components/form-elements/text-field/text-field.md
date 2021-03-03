title: Text Field
description: Text Field

A collection of textfields

## Labels
### Visible label

```html
<div class="form-group">
    <label for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-control" id="label-name" name="label-name" type="text" />
</div>
```

### Invisible label (Screen Reader only)

```html
<div class="form-group">
    <label class="sr-only" for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-control" id="label-name" name="label-name" type="text" />
</div>
```
---

## Error message

```html
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
---

## Types
### Date

```html
<div class="form-group">
    <label for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-control" id="label-name" name="label-name" type="date" />
</div>
```

### Number

```html
<div class="form-group">
    <label for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-control" id="label-name" name="label-name" type="number" />
</div>
```
---

## Sizes
### Default
```html
<div class="form-group">
    <label for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-control" id="label-name" name="label-name" type="text" />
</div>
```
### Small
```html
<div class="form-group">
    <label for="text-field"> Ich bin ein lustiges Label </label>
    <input class="form-control form-control-sm" id="label-name" name="label-name" type="date" />
</div>
```
---
## Horizontal form

```html
<div class="form-group row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Bezahlt am</label>
    <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail">
    </div>
</div>
```

```html

<div class="form-group row">
    <label class="col-sm-2 col-form-label" for="payment_amount">Betrag</label>
    <div class="input-group">
        <input value="6015.21" class="form-control text-right" step="0.01" type="number"
            name="payment[amount]" id="payment_amount" />
        <div class="input-group-append">
            <span class="input-group-text">EUR</span>
        </div>
    </div>
</div>
```
