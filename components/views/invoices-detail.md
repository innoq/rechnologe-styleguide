title: Invoices Detail Page
description: Details of one invoice

Putting all of the pieces together for the Invoices Detail view.

```html height=1400
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

    <main class="invoice-detail-layout">
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
                    <nav>
                        <div class="dropdown-wrapper">
                            <a href="#" class="dropdown-button" aria-haspopup="true">Mehr<span class="icon icon-caret-down" role="presentation"></span></a>
                            <ul aria-label="submenu">
                                <li><a href="#">Aktion Aktion1</a></li>
                                <li><a href="#">Aktion 2</a></li>
                                <li><a href="#">Aktion 3</a></li>
                            </ul>
                        </div>
                    </nav>
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
                    <dl class="invoice-meta">
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
                        <dd>[AA001111] GermanPersonell AWS Cognito</dd>
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
                    <p>Sehr geehrte Frau Ebstein, anbei erhalten Sie wie besprochen die Rechnung über unsere Leistungen im Dezember 2019.</p>

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
                                            <span class="squishable" aria-label="Aktion" data-short="Aktion" style="--squish-at: 11ch;"></span>
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>

                                <td class="centered">
                                    <span class="status-indicator is-complete"></span>
                                </td>

                                <td class="muted"><span class="amount">120,5 h</span></td>

                                <td class="muted"><span class="amount">150,00 €</span></td>

                                <td><span class="amount">18.750,00 €</span></td>

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

                            <tr>
                                <td>Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>

                                <td class="centered">
                                    <span class="status-indicator is-complete"></span>
                                </td>

                                <td class="muted"><span class="amount">120,5 h</span></td>

                                <td class="muted"><span class="amount">150,00 €</span></td>

                                <td><span class="amount">18.750,00 €</span></td>

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

                            <tr>
                                <td>Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>

                                <td class="centered">
                                    <span class="status-indicator is-complete"></span>
                                </td>

                                <td class="muted"><span class="amount">120,5 h</span></td>

                                <td class="muted"><span class="amount">150,00 €</span></td>

                                <td><span class="amount">18.750,00 €</span></td>

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

                            <tr>
                                <td>Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>

                                <td class="centered">
                                    <span class="status-indicator is-complete"></span>
                                </td>

                                <td class="muted"><span class="amount">120,5 h</span></td>

                                <td class="muted"><span class="amount">150,00 €</span></td>

                                <td><span class="amount">18.750,00 €</span></td>

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
                    <li class="active">Leistungen</li>
                    <li>Probleme</li>
                    <li>Nachrichten</li>
                </ul>
            </nav>

            <h2>Abrechenbare Leistungen dieses Monats</h2>
            <p class="muted">Hier sind keine Leistungen vorhanden</p>

            <h2>Noch nicht abgerechnete Leistungen vergangener Monate</h2>
            <a href="#" class="add-link">Alle freigegebenen auf die Rechnung</a>

            <table role="table" class="table table-responsive">
                <thead role="rowgroup" hidden>
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
                        <td>Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>

                        <td class="centered">
                            <span class="status-indicator is-complete"></span>
                        </td>

                        <td><span class="amount">18.750,00 €</span></td>

                        <td class="action">
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
                        <td>Security concepts for reliable Client Server communication in NWOT and AuthProxy including Lorem Ipsum</td>

                        <td class="centered">
                            <span class="status-indicator is-complete"></span>
                        </td>

                        <td><span class="amount">18.750,00 €</span></td>

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
        </div>
    </main>
</div>
```
