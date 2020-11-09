title: Invoices Detail Page
description: Details of one invoice

Putting all of the pieces together for the Invoices view.

```html
<div class="navbar-layout">
  <nav class="navbar">
    <a class="navbar-item brand" href="#">
      <div class="symbol"><span class="icon icon-INNOQ" role="presentation"></span></div>
      <div class="label">Zur Rechnologe Hauptseite</div>
    </a>
    <a class="navbar-item current" href="#">
      <div class="symbol"><span class="icon icon-list-bulleted" role="presentation"></span></div>
      <div class="label">Meine Aufgaben</div>
    </a>
    <a class="navbar-item" href="#">
      <div class="symbol"><span class="icon icon-upload" role="presentation"></span></div>
      <div class="label">Rechnungserstellung</div>
    </a>
    <a class="navbar-item" href="#">
      <div class="symbol"><span class="icon icon-download" role="presentation"></span></div>
      <div class="label">Zahlungseingang</div>
    </a>
    <a class="navbar-item" href="#">
      <div class="symbol"><span class="icon icon-alarm" role="presentation"></span></div>
      <div class="label">Zahlungserinnerungen</div>
    </a>
    <a class="navbar-item" href="#">
      <div class="symbol"><span class="icon icon-dots" role="presentation"></span></div>
      <div class="label">Mehr</div>
    </a>
  </nav>
  <nav class="secondary-navbar">
    <a class="navbar-item current">
      <div class="symbol"><span class="icon icon-snooze" role="presentation"></span></div>
      <div class="label">Abwarten</div>
    </a>
    <a class="navbar-item">
      <div class="symbol"><span class="icon icon-bolt" role="presentation"></span></div>
      <div class="label">Nachhaken</div>
    </a>
    <a class="navbar-item">
      <div class="symbol"><span class="icon icon-pencil" role="presentation"></span></div>
      <div class="label">Nachhaken</div>
    </a>
    <a class="navbar-item">
      <div class="symbol"><span class="icon icon-crown" role="presentation"></span></div>
      <div class="label">Freigeben lassen</div>
    </a>
    <a class="navbar-item">
      <div class="symbol"><span class="icon icon-plane" role="presentation"></span></div>
      <div class="label">Versenden</div>
    </a>
  </nav>
  <main class="main-layout">
    <div class="page-category">Rechnungserstellung</div>
    <h1>Keine freizugebenden Leistungen</h1>

  </main>
</div>
```
