title: Payment Overview Page
description: Payment overview views

Putting all of the pieces together for the Payment overview view.

```html height=1000
<div class="navbar-layout">
    <nav class="navbar">
        <a class="navbar-item brand" href="#">
            <div class="symbol">
                <span class="icon icon-INNOQ" role="presentation"></span>
            </div>
            <div class="label">Zur Rechnologe Hauptseite</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol">
                <span class="icon icon-list-bulleted" role="presentation"></span>
            </div>
            <div class="label">Meine Aufgaben</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol">
                <span class="icon icon-upload" role="presentation"></span>
            </div>
            <div class="label">Rechnungserstellung</div>
        </a>
        <a class="navbar-item current" href="#">
            <div class="symbol">
                <span class="icon icon-download" role="presentation"></span>
            </div>
            <div class="label">Zahlungseingang</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol">
                <span class="icon icon-alarm" role="presentation"></span>
            </div>
            <div class="label">Zahlungserinnerungen</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol">
                <span class="icon icon-dots" role="presentation"></span>
            </div>
            <div class="label">Mehr</div>
        </a>
    </nav>

    <nav class="secondary-navbar">
        <a class="navbar-item current">
            <div class="symbol">
                <span class="icon icon-paid" role="presentation"></span>
            </div>
            <div class="label">Zahlungseingänge 6</div>
        </a>
    </nav>

    <main class="main-layout">

    </main>
</div>
```
