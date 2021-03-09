title: Payment Detail Page
description: Editing a payment

Editing a payment


```html height=1000
<div class="navbar-layout">
    <nav class="navbar">
        <a class="navbar-item brand" href="#">
            <div class="symbol"><span class="icon icon-INNOQ" role="presentation"></span></div>
            <div class="label">Zur Rechnologe Hauptseite</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol"><span class="icon icon-list-bulleted" role="presentation"></span></div>
            <div class="label">Meine Aufgaben</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol"><span class="icon icon-upload" role="presentation"></span></div>
            <div class="label">Rechnungserstellung</div>
        </a>
        <a class="navbar-item current" href="#">
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

    <main class="main-layout">
        <div class="container-main">
            <nav class="pagination">
                <a rel="back" class="link-with-icon" href="#">
                    <span class="icon icon-arrow-left" role="presentation"></span>
                    Zurück
                </a>
            </nav>

            <h1>D12.34.5678 / R08154711</h1>
            <dl class="dl-horizontal">
                <dt class="dl-horizontal-label">Leistungszeitraum</dt>
                <dd class="dl-horizontal-value">1.1.2020 - 1.3.2020</dd>
                <dt class="dl-horizontal-label">Betrag</dt>
                <dd class="dl-horizontal-value">8000 EUR</dd>
            </dl>

            <form role="form" action="test" accept-charset="UTF-8" method="post">
                <input type="hidden" name="referrer" id="referrer" value="test" />

                <p>Bitte trage hier das Buchungsdatum und den Betrag der eingetroffenen Zahlung ein.</p>

                <div class="form-group row">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Bezahlt am</label>
                    <div class="col-sm-10">
                        <input type="date" class="form-control" id="inputDate">
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="payment_amount">Betrag</label>
                    <div class="input-group">
                        <input value="6015.21" class="form-control text-right" step="0.01" type="number" name="payment[amount]"
                            id="payment_amount" />
                        <div class="input-group-append">
                            <span class="input-group-text">EUR</span>
                        </div>
                    </div>
                </div>
                <div class="button-group">
                    <input type="submit" name="commit" value="Zahlung verbuchen" class="button primary"
                        data-disable-with="Zahlung verbuchen" />
                    <a class="text-link" href="#">Anders verbuchen</a>
                </div>
            </form>
        </div>
    </main>
</div>
```
