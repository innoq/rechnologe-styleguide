title: Reports Overview Page
description: Overview page that shows reports

Putting all of the pieces together for the report overview view.

```html height=1000
<div class="navbar-layout">
    <nav class="navbar">
        <a class="navbar-item brand" href="#">
            <div class="symbol">
                <span class="icon icon-INNOQ" role="presentation"></span>
            </div>
            <div class="label">Zur Rechnologe Hauptseite</div>
        </a>
        <a class="navbar-item current" href="#">
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
        <a class="navbar-item" href="#">
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
                <span class="icon icon-eye" role="presentation"></span>
            </div>
            <div class="label">Übersicht</div>
        </a>
        <a class="navbar-item">
            <div class="symbol">
                <span class="icon icon-error" role="presentation"></span>
            </div>
            <div class="label">Meldungen</div>
        </a>
    </nav>

    <main class="main-layout">
        <div class="page-category">Meine Aufgaben</div>
        <h1>Meldungen</h1>

        <nav class="tabs-nav">
            <ul>
                <li>
                    <a href="https://google.de">Allgemeines</a>
                </li>
                <li class="active">
                    <a href="">Meldungen</a>
                </li>
            </ul>
        </nav>
    </main>
</div>
```
