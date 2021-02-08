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
        reports_overview: "./lib/views/reports-overview.md",
      },
    },

    blueprints: {
      file: "./lib/documentation/BLUEPRINTS.md",
      children: {
        navbar_layout: "./lib/blueprints/navbar-layout/navbar-layout.md",
        main_layout: "./lib/blueprints/main-layout/main-layout.md",
        invoice_detail_layout: "./lib/blueprints/invoice-detail-layout/invoice-detail-layout.md",
      },
    },

    organisms: {
      file: "./lib/documentation/ORGANISMS.md",
      children: {
        navbar: "./lib/components/navbar/navbar.md",
        table: {
          file: "./lib/components/table/table/table.md",
          children: {
            tabelle: "./lib/components/table/tabelle/tabelle.md",
            responsive: "./lib/components/table/table-responsive/table-responsive.md",
            totals: "./lib/components/table/table-totals/table-totals.md",
          },
        },
      },
    },

    molecules: {
      file: "./lib/documentation/MOLECULES.md",
      children: {
        button_group: "./lib/components/form-elements/button-group/button-group.md",
        header_with_actions: "./lib/components/header-with-actions/header-with-actions.md",
        menu: "./lib/components/menu/menu.md",
        report: "./lib/components/report/report.md",
        pagination: "./lib/components/pagination/pagination.md",
        status_bar: "./lib/components/status-bar/status-bar.md",
        tabs_nav: "./lib/components/tabs-nav/tabs-nav.md",
      },
    },

    atoms: {
      file: "./lib/documentation/ATOMS.md",
      children: {
        amount: "./lib/components/amount/amount.md",
        avatar: "./lib/components/avatar/avatar.md",
        definition_list: "./lib/components/lists/definition-list/definition-list.md",
        headings: "./lib/components/headings/headings.md",
        flash: "./lib/components/flash/flash.md",
        form_elements: {
          file: "./lib/components/form-elements/form-elements.md",
          children: {
            button: "./lib/components/form-elements/button/button.md",
            text_field: "./lib/components/form-elements/text-field/text-field.md",
          },
        },
        icon: "./lib/components/icon/icon.md",
        link: "./lib/components/link/link.md",
        page_category: "./lib/components/page-category/page-category.md",
        progress_bar: "./lib/components/progress-bar/progress-bar.md",
        status_indicator: "./lib/components/status-indicator/status-indicator.md",
        text: "./lib/components/text/text.md",
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
