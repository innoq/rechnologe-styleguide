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
        text: "./components/text/README.md",
        amount: "./components/amount/README.md",
        button: "./components/button/README.md",
        flash: "./components/flash/README.md",
        icon: "./components/icon/README.md",
        page_category: "./components/page-category/README.md",
        progress_bar: "./components/progress-bar/README.md"
      }
    },
    molecules: {
      file: "./components/MOLECULES.md",
      children: {
        button_group: "./components/button-group/README.md"
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
            responsive: "./components/table/table-responsive/README.md"
          }
        },
        main_layout: "./components/main-layout/README.md"
      }
    },
    pages: {
      file: "./components/PAGES.md",
      children: {
        startpage_backoffice: "./components/pages/startpage-backoffice.md",
        invoices_overview: "./components/pages/invoices-overview.md",
        invoices_detail: "./components/pages/invoices-detail.md"
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
