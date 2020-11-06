title: Navbar
description: Providing a consistent Navbar and Layout

This component actually consists of two separate components which work together:

the `NavbarLayout` provides a container into which the `Navbar` and any other content can be placed.

The reason for this constellation is that `NavbarLayout` uses CSS grid to decide on the position of the `Navbar` and it's width.

`NavbarLayout` expects the following HTML children:

* A navbar component that is annotated with the class `navbar`
* The main content that will be placed in the main content area

It will be adjusted responsively based on the size of the viewport.

### Mobile Viewport

```html width=320
<div class="navbar-layout">
  <div class="navbar">
    <p style="color: white;">This is the region for the navbar.</p>
  </div>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
 </div>
```

### Responsive Behavior

```html
<div class="navbar-layout">
  <div class="navbar">
    <p style="color: white;">This is the region for the navbar.</p>
  </div>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
</div>
```


The `Navbar` component itself can then be placed inside of the `NavbarLayout`.

A `Navbar` component can contain any number of items. These are simply basic HTML elements like an `a` tag.

```html
<div class="navbar-layout">
  <nav class="navbar">
    <a class="navbar-item brand" href="#">
      <div class="symbol">
        <span class="icon icon-INNOQ" role="presentation"></span>
      </div>
      <div class="label">
        Zur Rechnologe Hauptseite
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-list-bulleted" role="presentation"></span>
      </div>
      <div class="label">
        Meine Aufgaben
      </div>
    </a>

    <a class="navbar-item current" href="#">
      <div class="symbol">
        <span class="icon icon-upload" role="presentation"></span>
      </div>
      <div class="label">
        Rechnungserstellung
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-download" role="presentation"></span>
      </div>
      <div class="label">
      Zahlungseingang
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-alarm" role="presentation"></span>
      </div>
      <div class="label">
      Zahlungserinnerungen
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-dots" role="presentation"></span>
      </div>
      <div class="label">
        Mehr
      </div>
    </a>
  </nav>

  <nav class="secondary-navbar">
    <a class="navbar-item current">
      <div class="symbol">
        <span class="icon icon-snooze" role="presentation"></span>
      </div>
      <div class="label">
        Abwarten
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-bolt" role="presentation"></span>
      </div>
      <div class="label">
        Nachhaken
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-pencil" role="presentation"></span>
      </div>
      <div class="label">
        Nachhacken
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-crown" role="presentation"></span>
      </div>
      <div class="label">
        Freigeben lassen
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-plane" role="presentation"></span>
      </div>
      <div class="label">
        Versenden
      </div>
    </a>

  </nav>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
</div>
```

### Mobile Viewport

```html width=320
<div class="navbar-layout">
  <nav class="navbar">
    <a class="navbar-item brand" href="#">
      <div class="symbol">
        <span class="icon icon-INNOQ" role="presentation"></span>
      </div>
      <div class="label">
        Zur Rechnologe Hauptseite
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-list-bulleted" role="presentation"></span>
      </div>
      <div class="label">
        Meine Aufgaben
      </div>
    </a>

    <a class="navbar-item current" href="#">
      <div class="symbol">
        <span class="icon icon-upload" role="presentation"></span>
      </div>
      <div class="label">
        Rechnungserstellung
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-download" role="presentation"></span>
      </div>
      <div class="label">
      Zahlungseingang
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-alarm" role="presentation"></span>
      </div>
      <div class="label">
      Zahlungserinnerungen
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-dots" role="presentation"></span>
      </div>
      <div class="label">
        Mehr
      </div>
    </a>
  </nav>

  <nav class="secondary-navbar">
    <a class="navbar-item current">
      <div class="symbol">
        <span class="icon icon-snooze" role="presentation"></span>
      </div>
      <div class="label">
        Abwarten
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-bolt" role="presentation"></span>
      </div>
      <div class="label">
        Nachhaken
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-pencil" role="presentation"></span>
      </div>
      <div class="label">
        Nachhacken
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-crown" role="presentation"></span>
      </div>
      <div class="label">
        Freigeben lassen
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-plane" role="presentation"></span>
      </div>
      <div class="label">
        Versenden
      </div>
    </a>

  </nav>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
</div>
```


Just instantiating the `Navbar` component outside of the navbar layout will position it at the top of the page (or at the position you place it in the document flow).

```html
  <nav class="navbar">
    <a class="navbar-item brand" href="#">
      <div class="symbol">
        <span class="icon icon-INNOQ" role="presentation"></span>
      </div>
      <div class="label">
        Zur Rechnologe Hauptseite
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-list-bulleted" role="presentation"></span>
      </div>
      <div class="label">
        Meine Aufgaben
      </div>
    </a>

    <a class="navbar-item current" href="#">
      <div class="symbol">
        <span class="icon icon-upload" role="presentation"></span>
      </div>
      <div class="label">
        Rechnungserstellung
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-download" role="presentation"></span>
      </div>
      <div class="label">
      Zahlungseingang
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-alarm" role="presentation"></span>
      </div>
      <div class="label">
      Zahlungserinnerungen
      </div>
    </a>

    <a class="navbar-item " href="#">
      <div class="symbol">
        <span class="icon icon-dots" role="presentation"></span>
      </div>
      <div class="label">
        Mehr
      </div>
    </a>
  </nav>

  <nav class="secondary-navbar">
    <a class="navbar-item current">
      <div class="symbol">
        <span class="icon icon-snooze" role="presentation"></span>
      </div>
      <div class="label">
        Abwarten
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-bolt" role="presentation"></span>
      </div>
      <div class="label">
        Nachhaken
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-pencil" role="presentation"></span>
      </div>
      <div class="label">
        Nachhacken
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-crown" role="presentation"></span>
      </div>
      <div class="label">
        Freigeben lassen
      </div>
    </a>

    <a class="navbar-item ">
      <div class="symbol">
        <span class="icon icon-plane" role="presentation"></span>
      </div>
      <div class="label">
        Versenden
      </div>
    </a>

  </nav>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
```
