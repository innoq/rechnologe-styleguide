title: Invoices Detail Page
description: Details of one invoice

Putting all of the pieces together for the Invoices Detail view.

```html height=1800
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

    <main class="main-with-sidebar-layout">
        <div class="container-main">
            <nav class="pagination">
                <a class="link-with-icon" href="#"><span class="icon icon-arrow-left" role="presentation"></span>Zurück</a>
                <div class="pagination-wrapper">
                    <a href="#">Vorherige</a>
                    <a href="#">Nächste</a>
                </div>
            </nav>

            <header class="header-with-actions">
                <h1>Rechnungsentwurf</h1>
                <div class="header-with-actions-wrapper">
                    <a class="add-link" href="#"><span class="icon icon-add" role="presentation"></span>Anhang hochladen</a>
                    <div class="button-group">
                        <nav>
                            <div class="dropdown-wrapper">
                                <a href="#" class="dropdown-button" aria-haspopup="true">Mehr<span class="icon icon-caret-down" role="presentation"></span></a>
                                <ul aria-label="submenu">
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><button type="button">Aktion Button</button></li>
                                </ul>
                            </div>
                        </nav>
                        <button class="button primary" type="submit">Principal Freigabe erstellen</button>
                    </div>
                </div>
            </header>

            <section class="status-bar">
                <label class="progress-bar green">
                    <progress value="4" max="5"></progress>
                    Status 4 / 5
                </label>
                <div class="progress-bar-with-avatars">
                    <label class="progress-bar green">
                        <progress value="3" max="8"></progress>
                        Consultants 3 / 8
                    </label>
                    <ul class="progress-bar-avatars">
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300"/></a>
                        </li>
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/301"/></a>
                        </li>
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/302"/></a>
                        </li>
                    </ul>
                    <a href="#" class="progress-bar-more-avatars">and five more</a>
                </div>

                <div class="progress-bar-with-avatars">
                    <label class="progress-bar yellow">
                        <progress value="1" max="5"></progress>
                        principal 0/1
                    </label>
                    <ul class="progress-bar-avatars">
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300"/></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="invoice-container">
                <div class="invoice-header">
                    <h2>Infos</h2>
                    <dl class="dl-vertical">
                        <dt>Kunde</dt>
                        <dd>
                            Coole Firma GmbH<br />
                            Heribert Innoq<br />
                            Krischerstr. 100<br />
                            40789 Monheim<br />
                            Deutschland
                        </dd>
                        <dt>Empfänger</dt>
                        <dd><a href="#">Heribert Innoq</a></dd>
                        <dt>Kundennummer</dt>
                        <dd>0815
                            <span class="editable-indicator">
                                <span class="icon icon-pencil" role="presentation"></span>
                                <span class="sr-only">Bearbeiten</span>
                            </span>
                        </dd>
                        <dt>Leistungszeitraum</dt>
                        <dd>
                            Dezember 2019
                        </dd>
                        <dt>Kostenstelle</dt>
                        <dd>[AA001111] Kostenstelle xyz</dd>
                        <dt>Referenztext für Rechnung</dt>
                        <dd>Bester Text ever</dd>
                        <dt>Angebots-Referenz</dt>
                        <dd>INV/D12.34.567/2020-01-02</dd>
                        <dt>Steuer-ID</dt>
                        <dd>...</dd>
                        <dt>Ust.-Satz</dt>
                        <dd>19%</dd>
                        <dt>Zahlungsbedingungen</dt>
                        <dd>30 Tage netto</dd>
                        <dt>Kommentar zum Kunden</dt>
                        <dd>Bester Kunde</dd>
                        <dt>Weitere Informationen</dt>
                        <dd>Noch besserer Text</dd>
                    </dl>
                </div>
                <div class="invoice-body">
                    <h2>Text</h2>
                    <p class="serif">Sehr geehrte Frau Ebstein,</p>
                    <p class="serif">anbei erhalten Sie wie besprochen die Rechnung über unsere Leistungen im Dezember 2019.
                        <span class="editable-indicator">
                            <span class="icon icon-pencil" role="presentation"></span>
                            <span class="sr-only">Bearbeiten</span>
                        </span>
                    </p>
                    <h2>Leistungen</h2>

                    <table role="table" class="table table-responsive">
                        <thead role="rowgroup">
                            <tr role="row">
                                <th class="table-toggler-cell" scope="col" role="columnheader"><span class="sr-only">Einträge auf/zuklappen</span></th>
                                <th scope="col" role="columnheader" aria-label="Beschreibung">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Beschreibung" data-short="Beschreibung" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Status">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Status" data-short="Status" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Menge">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Menge" data-short="Menge" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Einzelpreis">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Einzelpreis" data-short="Einzelpr." style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Gesamtpreis">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Gesamtpreis    " data-short="Gesamtpr." style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Aktion">
                                </th>
                            </tr>
                        </thead>

                        <tbody role="rowgroup">
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table-totals">
                        <tbody>
                            <tr>
                                <th>Nettopreis</th>
                                <td><span class="amount">35.875,00 €</span></td>
                            </tr>
                            <tr>
                                <th>nicht steuerbar</th>
                                <td><span class="amount">0,00 €</span></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Gesamtpreis</th>
                                <td><span class="amount">35.875,00 €</span></td>
                            </tr>
                        </tfoot>
                    </table>

                    <h2>Text</h2>
                    <p class="serif">Toller Text</p>
                    <p class="serif">Hier könnte noch mehr tolles stehen.
                        <span class="editable-indicator">
                            <span class="icon icon-pencil" role="presentation"></span>
                            <span class="sr-only">Bearbeiten</span>
                        </span>
                    </p>
                </div>
            </section>
        </div>

        <div class="container-sidebar">
            <nav class="tabs-nav">
                <ul>
                    <li class="active">
                        <a href="#">Leistungen</a>
                    </li>
                    <li>
                        <a href="#">Probleme</a>
                    </li>
                    <li>
                        <a href="#">Nachrichten</a>
                    </li>
                </ul>
            </nav>

            <section>
                <h2>Abrechenbare Leistungen dieses Monats</h2>
                <p class="muted">Hier sind keine Leistungen vorhanden</p>
            </section>
            <section>
                <h2>Noch nicht abgerechnete Leistungen vergangener Monate</h2>

                <a class="add-link" href="#"><span class="icon icon-add" role="presentation"></span>Alle freigegebenen auf Rechnung</a>

                <table role="table" class="table">
                    <thead role="rowgroup" hidden>
                        <tr role="row"></tr>
                            <th scope="col" role="columnheader" aria-label="Beschreibung">
                                <div class="tabelle-header">
                                    <span class="header" id="auftragsnr_group" aria-hidden="true">
                                        <span class="squishable" aria-label="Beschreibung" data-short="Beschreibung" style="--squish-at: 11ch;"></span>
                                    </span>
                                </div>
                            </th>
                            <th scope="col" role="columnheader" aria-label="Status">
                                <div class="tabelle-header">
                                    <span class="header" id="auftragsnr_group" aria-hidden="true">
                                        <span class="squishable" aria-label="Status" data-short="Status" style="--squish-at: 11ch;"></span>
                                    </span>
                                </div>
                            </th>
                            <th scope="col" role="columnheader" aria-label="Gesamtpreis">
                                <div class="tabelle-header">
                                    <span class="header" id="auftragsnr_group" aria-hidden="true">
                                        <span class="squishable" aria-label="Gesamtpreis" data-short="Gesamtpr." style="--squish-at: 11ch;"></span>
                                    </span>
                                </div>
                            </th>
                            <th scope="col" role="columnheader" aria-label="Aktion">
                                <div class="tabelle-header">
                                    <span class="header" id="auftragsnr_group" aria-hidden="true">
                                        <span class="squishable" aria-label="Aktion" data-short="Aktion" style="--squish-at: 11ch;"></span>
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>

                            <td role="cell" data-column="Status" class="centered">
                                <span class="status-indicator is-complete"></span>
                            </td>

                            <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>

                            <td role="cell" class="action">
                                <nav>
                                    <div class="dropdown-wrapper">
                                        <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                        <ul aria-label="submenu">
                                            <li><a href="#">Aktion 1 Aktion Aktion</a></li>
                                            <li><a href="#">Aktion 2</a></li>
                                            <li><a href="#">Aktion 3</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </td>
                        </tr>
                        <tr>
                            <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>

                            <td role="cell" data-column="Status" class="centered">
                                <span class="status-indicator is-complete"></span>
                            </td>

                            <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>

                            <td role="cell" class="action">
                                <nav>
                                    <div class="dropdown-wrapper">
                                        <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                        <ul aria-label="submenu">
                                            <li><a href="#">Aktion 1 Aktion Aktion</a></li>
                                            <li><a href="#">Aktion 2</a></li>
                                            <li><a href="#">Aktion 3</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </main>
</div>
```

Sidebar View "Probleme"

```html height=1800
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

    <main class="main-with-sidebar-layout">
        <div class="container-main">
            <nav class="pagination">
                <a class="link-with-icon" href="#"><span class="icon icon-arrow-left" role="presentation"></span>Zurück</a>
                <div class="pagination-wrapper">
                    <a href="#">Vorherige</a>
                    <a href="#">Nächste</a>
                </div>
            </nav>

            <header class="header-with-actions">
                <h1>Rechnungsentwurf</h1>
                <div class="header-with-actions-wrapper">
                    <a class="add-link" href="#"><span class="icon icon-add" role="presentation"></span>Anhang hochladen</a>
                    <div class="button-group">
                        <nav>
                            <div class="dropdown-wrapper">
                                <a href="#" class="dropdown-button" aria-haspopup="true">Mehr<span class="icon icon-caret-down" role="presentation"></span></a>
                                <ul aria-label="submenu">
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><button type="button">Aktion Button</button></li>
                                </ul>
                            </div>
                        </nav>
                        <button class="button primary" type="submit">Principal Freigabe erstellen</button>
                    </div>
                </div>
            </header>

            <section class="status-bar">
                <label class="progress-bar green">
                    <progress value="4" max="5"></progress>
                    Status 4 / 5
                </label>
                <div class="progress-bar-with-avatars">
                    <label class="progress-bar green">
                        <progress value="3" max="8"></progress>
                        Consultants 3 / 8
                    </label>
                    <ul class="progress-bar-avatars">
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300" /></a>
                        </li>
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/301" /></a>
                        </li>
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/302" /></a>
                        </li>
                    </ul>
                    <a href="#" class="progress-bar-more-avatars">and five more</a>
                </div>

                <div class="progress-bar-with-avatars">
                    <label class="progress-bar yellow">
                        <progress value="1" max="5"></progress>
                        principal 0/1
                    </label>
                    <ul class="progress-bar-avatars">
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300" /></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="invoice-container">
                <div class="invoice-header">
                    <h2>Infos</h2>
                    <dl class="dl-vertical">
                        <dt>Kunde</dt>
                        <dd>
                            Coole Firma GmbH<br />
                            Heribert Innoq<br />
                            Krischerstr. 100<br />
                            40789 Monheim<br />
                            Deutschland
                        </dd>
                        <dt>Empfänger</dt>
                        <dd>Heribert Innoq</dd>
                        <dt>Kundennummer</dt>
                        <dd>
                            <form>
                                <div class="form-group">
                                    <label class="sr-only" for="text-field"> Ich bin ein Label</label>
                                    <span id="form-error" class="invalid-feedback">
                                        <span class="sr-only">Error:</span>
                                        Da ist etwas nicht korrekt.
                                    </span>
                                        <input class="form-control form-control-sm is-invalid" id="label-name" name="label-name" type="date" />
                                    <div class="button-group">
                                        <button class="button primary small" type="submit">Speichern</button>
                                        <a href="#" class="text-link small">Abbrechen</a>
                                    </div>
                                </div>
                            </form>
                        </dd>
                        <dt>Leistungszeitraum</dt>
                        <dd>
                            <form>
                                <div class="form-group">
                                    <label class="sr-only" for="text-field"> Ich bin ein lustiges Label </label>
                                    <input class="form-control form-control-sm" id="label-name" name="label-name" type="date" />
                                    <div class="button-group">
                                        <button class="button primary small" type="submit">Speichern</button>
                                        <a href="#" class="text-link small">Abbrechen</a>
                                    </div>
                                </div>
                            </form>
                        </dd>
                        <dt>Kostenstelle</dt>
                        <dd>[AA001111] Kostenstelle xyz</dd>
                        <dt>Referenztext für Rechnung</dt>
                        <dd>Bester Text ever</dd>
                        <dt>Angebots-Referenz</dt>
                        <dd>INV/D12.34.567/2020-01-02</dd>
                        <dt>Steuer-ID</dt>
                        <dd>...</dd>
                        <dt>Ust.-Satz</dt>
                        <dd>19%</dd>
                        <dt>Zahlungsbedingungen</dt>
                        <dd>30 Tage netto</dd>
                        <dt>Kommentar zum Kunden</dt>
                        <dd>Bester Kunde</dd>
                        <dt>Weitere Informationen</dt>
                        <dd>Noch besserer Text</dd>
                    </dl>
                </div>
                <div class="invoice-body">
                    <h2>Text</h2>
                    <form>
                        <div class="form-group">
                            <label class="sr-only" for="text-area"> Ich bin ein Label </label>
                            <textarea id="text-area" name="text-area" rows="5"></textarea>
                            <div class="button-group">
                                <button class="button primary small" type="submit">Speichern</button>
                                <a href="#" class="text-link small">Abbrechen</a>
                            </div>
                        </div>
                    </form>

                    <h2>Leistungen</h2>
                    <table role="table" class="table table-responsive">
                        <thead role="rowgroup">
                            <tr role="row">
                                <th class="table-toggler-cell" scope="col" role="columnheader"><span class="sr-only">Einträge auf/zuklappen</span></th>
                                <th scope="col" role="columnheader" aria-label="Beschreibung">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Beschreibung" data-short="Beschreibung" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Status">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Status" data-short="Status" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Menge">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Menge" data-short="Menge" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Einzelpreis">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Einzelpreis" data-short="Einzelpr." style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Gesamtpreis">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Gesamtpreis    " data-short="Gesamtpr." style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Aktion">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Aktion" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody role="rowgroup">
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table-totals">
                        <tbody>
                            <tr>
                                <th>Nettopreis</th>
                                <td><span class="amount">35.875,00 €</span></td>
                            </tr>
                            <tr>
                                <th>nicht steuerbar</th>
                                <td><span class="amount">0,00 €</span></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Gesamtpreis</th>
                                <td><span class="amount">35.875,00 €</span></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>

        <div class="container-sidebar">
            <nav class="tabs-nav">
                <ul>
                    <li>
                        <a href="#">Leistungen</a>
                    </li>
                    <li class="active">
                        <a href="#">Probleme</a>
                    </li>
                    <li>
                        <a href="#">Nachrichten</a>
                    </li>
                </ul>
            </nav>

            <section>
                <h2>Meine Probleme</h2>
                <details class="report">
                    <summary>Der Leistungszeitraum überlappt mit einer anderen Rechnung zu diesem Auftrag.</summary>
                    <p>Zugewiesen an <a href="#">Jörg Müller</a></p>
                    <div class="button-group">
                        <nav>
                            <div class="dropdown-wrapper">
                                <a href="#" class="dropdown-button" aria-haspopup="true">Später beheben<span class="icon icon-caret-down" role="presentation"></span></a>
                                <ul aria-label="submenu">
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><button type="button">Aktion Button</button></li>
                                </ul>
                            </div>
                        </nav>
                        <button class="button primary" type="submit">Jetzt beheben</button>
                    </div>
                </details>

                <details class="report">
                    <summary>Der Leistungszeitraum überlappt mit einer anderen Rechnung zu diesem Auftrag.</summary>
                    <p>Zugewiesen an <a href="#">Jörg Müller</a></p>
                    <div class="button-group">
                        <nav>
                            <div class="dropdown-wrapper">
                                <a href="#" class="dropdown-button" aria-haspopup="true">Später beheben<span class="icon icon-caret-down" role="presentation"></span></a>
                                <ul aria-label="submenu">
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><button type="button">Aktion Button</button></li>
                                </ul>
                            </div>
                        </nav>
                        <button class="button primary" type="submit">Jetzt beheben</button>
                    </div>
                </details>
            </section>

            <section>
                <h2>Probleme anderer Leute</h2>
                <details class="report">
                    <summary>Der Leistungszeitraum überlappt mit einer anderen Rechnung zu diesem Auftrag.</summary>
                    <p>Zugewiesen an <a href="#">Jörg Müller</a></p>
                    <div class="button-group">
                        <nav>
                            <div class="dropdown-wrapper">
                                <a href="#" class="dropdown-button" aria-haspopup="true">Später beheben<span class="icon icon-caret-down" role="presentation"></span></a>
                                <ul aria-label="submenu">
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><button type="button">Aktion Button</button></li>
                                </ul>
                            </div>
                        </nav>
                        <button class="button primary" type="submit">Jetzt beheben</button>
                    </div>
                </details>

                <details class="report">
                    <summary>Der Leistungszeitraum überlappt mit einer anderen Rechnung zu diesem Auftrag.</summary>
                    <p>Zugewiesen an <a href="#">Jörg Müller</a></p>
                    <div class="button-group">
                        <nav>
                            <div class="dropdown-wrapper">
                                <a href="#" class="dropdown-button" aria-haspopup="true">Später beheben<span class="icon icon-caret-down" role="presentation"></span></a>
                                <ul aria-label="submenu">
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><button type="button">Aktion Button</button></li>
                                </ul>
                            </div>
                        </nav>
                        <button class="button primary" type="submit">Jetzt beheben</button>
                    </div>
                </details>
            </section>
        </div>
    </main>
</div>
```

Sidebar View 'Nachrichten"

```html height=1800
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

    <main class="main-with-sidebar-layout">
        <div class="container-main">
            <nav class="pagination">
                <a class="link-with-icon" href="#"><span class="icon icon-arrow-left" role="presentation"></span>Zurück</a>
                <div class="pagination-wrapper">
                    <a href="#">Vorherige</a>
                    <a href="#">Nächste</a>
                </div>
            </nav>

            <header class="header-with-actions">
                <h1>Rechnungsentwurf</h1>
                <div class="header-with-actions-wrapper">
                    <a class="add-link" href="#"><span class="icon icon-add" role="presentation"></span>Anhang hochladen</a>
                    <div class="button-group">
                        <nav>
                            <div class="dropdown-wrapper">
                                <a href="#" class="dropdown-button" aria-haspopup="true">Mehr<span class="icon icon-caret-down" role="presentation"></span></a>
                                <ul aria-label="submenu">
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><a href="#">Aktion Link</a></li>
                                    <li><button type="button">Aktion Button</button></li>
                                </ul>
                            </div>
                        </nav>
                        <button class="button primary" type="submit">Principal Freigabe erstellen</button>
                    </div>
                </div>
            </header>

            <section class="status-bar">
                <label class="progress-bar green">
                    <progress value="4" max="5"></progress>
                    Status 4 / 5
                </label>
                <div class="progress-bar-with-avatars">
                    <label class="progress-bar green">
                        <progress value="3" max="8"></progress>
                        Consultants 3 / 8
                    </label>
                    <ul class="progress-bar-avatars">
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300" /></a>
                        </li>
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/301" /></a>
                        </li>
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/302" /></a>
                        </li>
                    </ul>
                    <a href="#" class="progress-bar-more-avatars">and five more</a>
                </div>

                <div class="progress-bar-with-avatars">
                    <label class="progress-bar yellow">
                        <progress value="1" max="5"></progress>
                        principal 0/1
                    </label>
                    <ul class="progress-bar-avatars">
                        <li>
                            <a href="#" class="avatar-small"><img src="https://i.pravatar.cc/300" /></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="invoice-container">
                <div class="invoice-header">
                    <h2>Infos</h2>
                    <dl class="dl-vertical">
                        <dt>Kunde</dt>
                        <dd>
                            Coole Firma GmbH<br />
                            Heribert Innoq<br />
                            Krischerstr. 100<br />
                            40789 Monheim<br />
                            Deutschland
                        </dd>
                        <dt>Empfänger</dt>
                        <dd>Heribert Innoq</dd>
                        <dt>Kundennummer</dt>
                        <dd>0815</dd>
                        <dt>Leistungszeitraum</dt>
                        <dd>Dezember 2020</dd>
                        <dt>Kostenstelle</dt>
                        <dd>[AA001111] Kostenstelle xyz</dd>
                        <dt>Referenztest für Rechnung</dt>
                        <dd>Bester Text ever</dd>
                        <dt>Angebots-Referenz</dt>
                        <dd>INV/D12.34.567/2020-01-02</dd>
                        <dt>Steuer-ID</dt>
                        <dd>...</dd>
                        <dt>Ust.-Satz</dt>
                        <dd>19%</dd>
                        <dt>Zahlungsbedingungen</dt>
                        <dd>30 Tage netto</dd>
                        <dt>Kommentar zum Kunden</dt>
                        <dd>Bester Kunde</dd>
                        <dt>Weitere Informationen</dt>
                        <dd>Noch besserer Text</dd>
                    </dl>
                </div>
                <div class="invoice-body">
                    <h2>Text</h2>
                    <p class="serif">Sehr geehrte Frau Ebstein,</p>
                    <p class="serif">anbei erhalten Sie wie besprochen die Rechnung über unsere Leistungen im Dezember 2019.</p>

                    <h2>Leistungen</h2>

                    <table role="table" class="table table-responsive">
                        <thead role="rowgroup">
                            <tr role="row">
                                <th class="table-toggler-cell" scope="col" role="columnheader"><span class="sr-only">Einträge auf/zuklappen</span></th>
                                <th scope="col" role="columnheader" aria-label="Beschreibung">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Beschreibung" data-short="Beschreibung" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Status">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Status" data-short="Status" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Menge">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Menge" data-short="Menge" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Einzelpreis">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Einzelpreis" data-short="Einzelpr." style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Gesamtpreis">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Gesamtpreis    " data-short="Gesamtpr." style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                                <th scope="col" role="columnheader" aria-label="Aktion">
                                    <div class="tabelle-header">
                                        <span class="header" id="auftragsnr_group" aria-hidden="true">
                                            <span class="squishable" aria-label="Aktion" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody role="rowgroup">
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                            <tr role="row">
                                <td class="table-toggler-cell" role="cell">
                                    <button is="tabelle-toggler" hidden aria-expanded="false">
                                        <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                            <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                        </span>
                                        <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                            <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                        </span>
                                    </button>
                                </td>
                                <td role="cell" data-column="Beschreibung">Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>
                                <td role="cell" data-column="Status" class="centered"><span class="status-indicator is-complete"></span></td>
                                <td role="cell" data-column="Menge" class="muted"><span class="amount">120,5 h</span></td>
                                <td role="cell" data-column="Einzel" class="muted"><span class="amount">150,00 €</span></td>
                                <td role="cell" data-column="Gesamt"><span class="amount">18.750,00 €</span></td>
                                <td class="action">
                                    <nav>
                                        <div class="dropdown-wrapper">
                                            <a href="#" class="dropdown-icon" aria-haspopup="true"><span class="icon icon-dots-vertical" role="presentation"></span></a>
                                            <ul aria-label="submenu">
                                                <li><a href="#">Aktion 1</a></li>
                                                <li><a href="#">Aktion 2</a></li>
                                                <li><a href="#">Aktion 3</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table-totals">
                        <tbody>
                            <tr>
                                <th>Nettopreis</th>
                                <td><span class="amount">35.875,00 €</span></td>
                            </tr>
                            <tr>
                                <th>nicht steuerbar</th>
                                <td><span class="amount">0,00 €</span></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Gesamtpreis</th>
                                <td><span class="amount">35.875,00 €</span></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>

        <div class="container-sidebar">
            <nav class="tabs-nav">
                <ul>
                    <li>
                        <a href="#">Leistungen</a>
                    </li>
                    <li>
                        <a href="#">Probleme</a>
                    </li>
                    <li class="active">
                        <a href="#">Nachrichten</a>
                    </li>
                </ul>
            </nav>
            <section>
                <h2>Nachrichten</h2>
                <ul class="message-list">
                    <li class="message-list-item">
                        <div class="person">
                            <span class="avatar-small">
                                <img src="https://i.pravatar.cc/300" />
                            </span>
                            <address class="person-name">Heribert Innoq</address>
                        </div>
                        <time datetime="2020-12-20 13:00">Mittwoch 20.12.20 13 Uhr</time>
                        <span class="message-list-item-text">Dies ist eine sehr wichtige Nachricht.</span>
                    </li>
                    <li class="message-list-item">
                        <div class="person">
                            <span class="avatar-small">
                                <img src="https://i.pravatar.cc/300" />
                            </span>
                            <address class="person-name">Heribert Innoq</address>
                        </div>
                        <time datetime="2020-12-20 13:00">Mittwoch 20.12.20 13 Uhr</time>
                        <span class="message-list-item-text">Diese Nachricht ist noch wichtiger und toller.</span>
                    </li>
                </ul>
                <form>
                    <div class="form-group">
                        <label class="sr-only" for="text-area"> Nachricht eingeben</label>
                        <textarea id="text-area" name="text-area" rows="2"></textarea>
                        <div class="button-group">
                            <button class="button primary small" type="submit">Speichern</button>
                            <a href="#" class="text-link small">Abbrechen</a>
                        </div>
                    </div>
                </form>
            </section>
            <section>
                <h2>Änderungshistorie</h2>
                <ul class="changelog-list">
                    <li class="changelog-list-item">
                        <div class="person">
                            <span class="avatar-small">
                                <img src="https://i.pravatar.cc/300" />
                            </span>
                            <address class="person-name">Rechnologe</address>
                        </div>
                        <time datetime="2020-12-20 13:00">Mittwoch 20.12.20 13 Uhr</time>
                        <span>Rechnung wurde geändert</span>
                    </li>
                    <li class="changelog-list-item">
                        <div class="person">
                            <span class="avatar-small">
                                <img src="https://i.pravatar.cc/300" />
                            </span>
                            <address class="person-name">Rechnologe</address>
                        </div>
                        <time datetime="2020-12-20 13:00">Mittwoch 20.12.20 13 Uhr</time>
                        <span>Rechnung wurde erstellt</span>
                    </li>
                </ul>
            </section>
        </div>
    </main>
</div>
```
