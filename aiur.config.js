module.exports = {
  title: "Rechnologe Styleguide",
  language: "en",
  description: "Styleguide for Rechnologe",

  pages: {
    "": "./lib/documentation/INTRO.md",

    basics: {
      file: "./lib/documentation/BASICS.md",
      children: {
        breakpoints: "./lib/documentation/breakpoints.md",
        colors: "./lib/documentation/colors.md",
        spacers: "./lib/documentation/spacers.md",
      },
    },

    views: {
      file: "./lib/documentation/VIEWS.md",
      children: {
        startpage_backoffice: "./lib/views/startpage-backoffice.md",
        invoices_overview: "./lib/views/invoices-overview.md",
        invoices_detail: "./lib/views/invoices-detail.md",
      },
    },

    blueprints: {
      file: "./lib/documentation/BLUEPRINTS.md",
      children: {
        navbar_layout: "./lib/blueprints/navbar-layout/README.md",
        main_layout: "./lib/blueprints/main-layout/README.md",
        invoice_detail_layout: "./lib/blueprints/invoice-detail-layout/README.md",
      },
    },

    organisms: {
      file: "./lib/documentation/ORGANISMS.md",
      children: {
        navbar: "./lib/components/navbar/README.md",
        table: {
          file: "./lib/components/table/table/README.md",
          children: {
            tabelle: "./lib/components/table/tabelle/README.md",
            responsive: "./lib/components/table/table-responsive/README.md",
            totals: "./lib/components/table/table-totals/README.md",
          },
        },
      },
    },

    molecules: {
      file: "./lib/documentation/MOLECULES.md",
      children: {
        button_group: "./lib/components/button-group/README.md",
        header_with_actions: "./lib/components/header-with-actions/README.md",
        menu: "./lib/components/menu/README.md",
        report: "./lib/components/report/README.md",
        pagination: "./lib/components/pagination/README.md",
        status_bar: "./lib/components/status-bar/README.md",
        tabs_nav: "./lib/components/tabs-nav/README.md",
      },
    },

    atoms: {
      file: "./lib/documentation/ATOMS.md",
      children: {
        amount: "./lib/components/amount/README.md",
        avatar: "./lib/components/avatar/README.md",
        headings: "./lib/components/headings/README.md",
        link: "./lib/components/link/README.md",
        definition_list: "./lib/components/lists/definition-list/README.md",
        button: "./lib/components/button/README.md",
        flash: "./lib/components/flash/README.md",
        icon: "./lib/components/icon/README.md",
        page_category: "./lib/components/page-category/README.md",
        progress_bar: "./lib/components/progress-bar/README.md",
        status_indicator: "./lib/components/status-indicator/README.md",
        text: "./lib/components/text/README.md",
      },
    },
  },

  snippetAssets: {
    js: [
      {
        source: "./lib/assets/javascripts/application.js",
        target: "./application.js",
      },
    ],
    sass: [
      {
        source: "./lib/assets/stylesheets/application.scss",
        target: "./application.css",
      },
      {
        source: "./lib/assets/stylesheets/styleguide.scss",
        target: "./styleguide.css",
      },
    ],
    static: [
      {
        source: "./lib/assets/images",
        target: "./images",
      },
    ],
  },

  watchDirs: ["./lib"],
};
