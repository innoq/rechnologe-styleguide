module.exports = {
  title: "Rechnologe Styleguide",
  language: "en",
  description: "Styleguide for Rechnologe",

  pages: {
    "": "./components/README.md",
    colors: "./components/colors.md",
    spacers: "./components/spacers.md",
    atoms: {
      file: "./components/ATOMS.md",
      children: {
        amount: "./components/amount/README.md",
        avatar: "./components/avatar/README.md",
        headings: "./components/headings/README.md",
        link: "./components/link/README.md",
        definition_list: "./components/lists/definition-list/README.md",
        button: "./components/button/README.md",
        flash: "./components/flash/README.md",
        icon: "./components/icon/README.md",
        page_category: "./components/page-category/README.md",
        progress_bar: "./components/progress-bar/README.md",
        status_indicator: "./components/status-indicator/README.md",
        text: "./components/text/README.md"
      }
    },
    molecules: {
      file: "./components/MOLECULES.md",
      children: {
        button_group: "./components/button-group/README.md",
        header_with_actions: "./components/header-with-actions/README.md",
        menu: "./components/menu/README.md",
        report: "./components/report/README.md",
        pagination: "./components/pagination/README.md",
        status_bar: "./components/status-bar/README.md",
        tabs_nav: "./components/tabs-nav/README.md"
      }
    },
    organisms: {
      file: "./components/ORGANISMS.md",
      children: {
        navbar: "./components/navbar/README.md",
        table: {
          file: "./components/table/table/README.md",
          children: {
            tabelle: "./components/table/tabelle/README.md",
            responsive: "./components/table/table-responsive/README.md",
            totals: "./components/table/table-totals/README.md"
          }
        }
      }
    },
    blueprints: {
      file: "./components/BLUEPRINTS.md",
      children: {
        navbar_layout: "./components/blueprints/navbar-layout/README.md",
        main_layout: "./components/blueprints/main-layout/README.md",
        invoice_detail_layout: "./components/blueprints/invoice-detail-layout/README.md"
      }
    },
    views: {
      file: "./components/VIEWS.md",
      children: {
        startpage_backoffice: "./components/views/startpage-backoffice.md",
        invoices_overview: "./components/views/invoices-overview.md",
        invoices_detail: "./components/views/invoices-detail.md"
      }
    }
  },

  snippetAssets: {
    js: [
      {
        source: "./assets/javascripts/application.js",
        target: "./application.js"
      }
    ],
    sass: [
      {
        source: "./assets/stylesheets/application.scss",
        target: "./application.css"
      },
      {
        source: "./assets/stylesheets/styleguide.scss",
        target: "./styleguide.css"
      }
    ],
    static: [
      {
        source: "./assets/images",
        target: "./images"
      }
    ]
  },

  watchDirs: ["./assets", "./components"]
};
