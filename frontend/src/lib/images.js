// =============================================================================
//  PRUMO SOALHEIRO — Image configuration
//  ─────────────────────────────────────────────────────────────────────────────
//  All site images are organised in /public/images/<section>/.
//  To replace any image, drop the new file in the right folder and update
//  the path string below. The folder structure mirrors the site sections:
//
//  public/images/
//  ├── heroes/                   ← Full-page banner behind each page title
//  │   ├── home.jpg              ← Home page hero (2048×1536, widest shot)
//  │   ├── about.jpg             ← About page hero
//  │   ├── services.jpg          ← Services page hero (wide panoramic)
//  │   ├── projects.jpg          ← Projects page hero
//  │   ├── quote.jpg             ← Quote/orçamento page hero
//  │   ├── contact.jpg           ← Contact page hero
//  │   └── bim.jpg               ← BIM page hero
//  │
//  ├── projects/
//  │   ├── ministry-of-justice/  ← All photos from this project
//  │   │   ├── hero.jpg          ← Main full-bleed image (portrait, 1080×1920)
//  │   │   ├── facade-wide.jpg   ← Wide facade landscape
//  │   │   ├── roof.jpg          ← Roof detail
//  │   │   ├── facade-01.jpg     ← Gallery photos (portrait, 899×1599)
//  │   │   ├── facade-02.jpg
//  │   │   ├── facade-03.jpg
//  │   │   ├── facade-04.jpg
//  │   │   ├── facade-05.jpg
//  │   │   ├── facade-06.jpg
//  │   │   └── facade-07.jpg
//  │   │
//  │   ├── sumol-compal/         ← All photos from this project
//  │   │   ├── hero.jpg          ← Main image (1501×944)
//  │   │   ├── facade-01.jpg
//  │   │   ├── facade-02.jpg
//  │   │   └── facade-03.jpg
//  │   │
//  │   └── etar-guia/            ← Replace with real ETAR photos when available
//  │       ├── hero.jpg
//  │       ├── site-01.jpg
//  │       ├── site-02.jpg
//  │       ├── site-03.jpg
//  │       ├── site-04.jpg
//  │       └── site-05.jpg
//  │
//  ├── services/                 ← One image per service area
//  │   ├── design.jpg            ← Projeto / Design service tile
//  │   ├── construction.jpg      ← Construção / Construction service tile
//  │   ├── management.jpg        ← Gestão / Management service tile
//  │   ├── research.jpg          ← Investigação & Inovação service tile
//  │   └── training.jpg          ← Formação / Training service tile
//  │
//  ├── about/                    ← About page section images
//  │   ├── main.jpg              ← Large primary image (left column)
//  │   ├── secondary.jpg         ← Bottom-left supplementary
//  │   ├── portrait.jpg          ← Bottom-right supplementary (portrait)
//  │   └── numbers-bg.jpg        ← Background behind stats section
//  │
//  ├── bim/                      ← BIM page — one image per section (swap freely)
//  │   ├── intro.jpg             ← Intro: tall portrait, bleeds right edge (1080×1920)
//  │   ├── models.jpg            ← Models & Coordination section (landscape)
//  │   ├── clash.jpg             ← Clash Detection & OpenBIM section (1501×944)
//  │   ├── 4d5d.jpg              ← 4D/5D cinematic full-bleed band (1600×1200)
//  │   └── team.jpg              ← Team & Closing section portrait (899×1599)
//  │
//  └── team/
//      └── portrait.png          ← Team portrait (tall, 1170×2532)
// =============================================================================

const I = (path) => `/images/${path}`;

export const IMAGES = {

  // ── HERO BANNERS ────────────────────────────────────────────────────────────
  heroes: {
    home:     I("heroes/home.jpg"),
    about:    I("heroes/about.jpg"),
    services: I("heroes/services.jpg"),
    projects: I("heroes/projects.jpg"),
    quote:    I("heroes/quote.jpg"),
    contact:  I("heroes/contact.jpg"),
    bim:      I("heroes/bim.jpg"),
  },

  // ── MINISTRY OF JUSTICE ─────────────────────────────────────────────────────
  // Building facades and roof — rehabilitation project in historic Lisbon
  justice: {
    hero:       I("projects/ministry-of-justice/hero.jpg"),
    facadeWide: I("projects/ministry-of-justice/facade-wide.jpg"),
    roof:       I("projects/ministry-of-justice/roof.jpg"),
    gallery: [
      I("projects/ministry-of-justice/facade-01.jpg"),
      I("projects/ministry-of-justice/facade-02.jpg"),
      I("projects/ministry-of-justice/facade-03.jpg"),
      I("projects/ministry-of-justice/facade-04.jpg"),
      I("projects/ministry-of-justice/facade-05.jpg"),
      I("projects/ministry-of-justice/facade-06.jpg"),
      I("projects/ministry-of-justice/facade-07.jpg"),
    ],
  },

  // ── SUMOL + COMPAL ──────────────────────────────────────────────────────────
  // Corporate building facade intervention in Carnaxide
  sumol: {
    hero:    I("projects/sumol-compal/hero.jpg"),
    gallery: [
      I("projects/sumol-compal/facade-01.jpg"),
      I("projects/sumol-compal/facade-02.jpg"),
      I("projects/sumol-compal/facade-03.jpg"),
    ],
  },

  // ── ETAR DA GUIA ────────────────────────────────────────────────────────────
  // Hydraulic infrastructure — replace with real ETAR photos when available
  etar: {
    hero:    I("projects/etar-guia/hero.jpg"),
    gallery: [
      I("projects/etar-guia/site-01.jpg"),
      I("projects/etar-guia/site-02.jpg"),
      I("projects/etar-guia/site-03.jpg"),
      I("projects/etar-guia/site-04.jpg"),
      I("projects/etar-guia/site-05.jpg"),
      I("projects/etar-guia/site-06.jpg"),
      I("projects/etar-guia/site-07.jpg"),
    ],
  },

  // ── SERVICE TILES ───────────────────────────────────────────────────────────
  // Multiple images per service area with carousel gallery support
  // To add more images to a service:
  // 1. Drop new images in public/images/services/<service-name>/ folder
  // 2. Add paths to the gallery array below (e.g., design-02.jpg, design-03.jpg)
  // 3. Carousel shows all gallery images with auto-play and indicators
  services: {
    design: {
      main: I("services/design.jpg"),
      gallery: [
        I("services/design.jpg"),
      ],
    },
    construction: {
      main: I("services/construction.jpg"),
      gallery: [
        I("services/construction.jpg"),
      ],
    },
    management: {
      main: I("services/management.jpg"),
      gallery: [
        I("services/management.jpg"),
      ],
    },
    research: {
      main: I("services/research.jpg"),
      gallery: [
        I("services/research.jpg"),
      ],
    },
    training: {
      main: I("services/training.jpg"),
      gallery: [
        I("services/training.jpg"),
      ],
    },
  },

  // ── ABOUT PAGE ──────────────────────────────────────────────────────────────
  about: {
    main:       I("about/main.jpg"),
    secondary:  I("about/secondary.jpg"),
    portrait:   I("about/portrait.jpg"),
    numbersBg:  I("about/numbers-bg.jpg"),
  },

  // ── BIM PAGE ────────────────────────────────────────────────────────────────
  // One image per section — drop a new file in public/images/bim/ and update the path
  bim: {
    intro:  I("bim/intro.jpg"),   // Intro section: tall portrait, bleeds right (1080×1920)
    models: I("bim/models.jpg"),  // Models & Coordination section (landscape)
    clash:  I("bim/clash.jpg"),   // Clash Detection & OpenBIM section (1501×944)
    band:   I("bim/4d5d.jpg"),    // 4D/5D cinematic full-bleed band (1600×1200)
    team:   I("bim/team.jpg"),    // Team & Closing section portrait (899×1599)
    black: I("bim/black.jpg")
  },

  // ── TEAM ────────────────────────────────────────────────────────────────────
  team: {
    portrait: I("team/portrait.png"),
  },
};
