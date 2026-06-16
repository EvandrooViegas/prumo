// PRUMO Soalheiro — local assets from /public/assets/
// Dimensions and orientation noted for correct layout usage.
// Portrait (tall) = ratio < 1, Landscape = ratio > 1
const A = (name) => `/assets/${name}`;

export const IMAGES = {
  // ─── HERO BANNERS (each page gets a different one) ──────────────────────────
  // Home: large 2048×1536 landscape — widest, most impactful
  heroHome: A("8d66074c-b0e0-4cce-b5a9-aa771f7146b5.JPG"),
  // About: wide Sumol/construction shot 1501×944
  heroAbout: A("b20d9e16-1e5b-48aa-94da-e03de280653e.JPG"),
  // Services: wide panoramic 1355×616
  heroServices: A("cf6fd65d-a7fc-41ba-8406-e6aff1625816.JPG"),
  // Projects: 1600×1200 on-site landscape
  heroProjects: A("ea087090-b39a-4475-87a7-1083805cc211.JPG"),
  // Quote/Contact: wide 1599×899
  heroQuote: A("e564e882-cb6c-41ef-8f5e-a49f22627b75.JPG"),

  // ─── MINISTRY OF JUSTICE (portrait + landscape shots) ───────────────────────
  // Tall portraits of the building facade (ratio 0.56 — 899×1599)
  justiceP1: A("62c65191-93bb-40f9-ab69-d1e2e7fd2d80.JPG"),
  justiceP2: A("62c65191-93bb-40f9-ab69-d1e2e7fd2d80 (1).JPG"),
  justiceP3: A("dbc99f2d-8a68-43d5-939d-a5cd4d222548.JPG"),
  justiceP4: A("0ba21580-d003-4817-b39c-8c4b0e23d136.JPG"),
  justiceP5: A("76480e60-bad2-4378-b960-2e52c059a94e.JPG"),
  justiceP6: A("0ae6456f-969c-48db-b559-9d3c220d812c.JPG"),
  justiceP7: A("6985b073-2f69-4eb4-965c-312fd64cefbb.JPG"),
  // Landscape wide shots of the building (1080×1920 & 1599×899)
  justiceL1: A("8e0ffd58-ad0e-4ba3-b7d4-be68c8ca5379.JPG"),
  justiceL2: A("8e0ffd58-ad0e-4ba3-b7d4-be68c8ca5379 (1).JPG"),
  justiceL3: A("e78fa72f-ab46-4445-a78a-497398e54565.JPG"),

  // ─── SUMOL + COMPAL (1501×944 wide landscape shots) ─────────────────────────
  sumol1: A("7f4bd34f-b7ba-477d-89d9-eb8a9b3cb32f.JPG"),
  sumol2: A("f3810e17-fad0-4669-8516-e1dd7171917f.JPG"),
  sumol3: A("b20d9e16-1e5b-48aa-94da-e03de280653e.JPG"),
  sumol4: A("ef2beb0e-c8a5-4a13-88b8-6dfdb5b46eb7.JPG"),

  // ─── GENERAL CONSTRUCTION SITE — wide landscape (1600×1200) ────────────────
  siteWide1: A("1dd7395d-05f4-4f23-ade3-32b73a50a6a9.JPG"),
  siteWide2: A("ea087090-b39a-4475-87a7-1083805cc211.JPG"),
  siteWide3: A("46d6b4bd-241d-4903-b4b2-3b77f23b80fe.JPG"),
  siteWide4: A("1649ae61-c101-4af1-a306-d1663b766f67.JPG"),
  siteWide5: A("3759113e-f70b-465e-9317-b05a39f8c22c.JPG"),
  siteWide6: A("4eb83d2a-61a7-4ca3-b34d-2e4a5e33d3e3.JPG"),
  siteWide7: A("fe6b8c3d-9979-4179-ad16-53058f2a6ee1.JPG"),
  siteWide8: A("5d2728d1-8183-4438-a763-fed12e18ef77.JPG"),

  // ─── GENERAL CONSTRUCTION SITE — portrait/square (0.56–0.75 ratio) ─────────
  siteTall1: A("53a5cfb8-d477-44d3-8cb7-d8f89ec5b076.JPG"),   // 1200×1600
  siteTall2: A("c17ce023-81db-4010-941b-bbefef150f8b.JPG"),   // 1200×1600

  // ─── TEAM / PEOPLE ──────────────────────────────────────────────────────────
  team: A("IMG_7372.PNG"),  // 1170×2532 tall portrait

  // ─── PAGE-LEVEL SEMANTIC ALIASES ────────────────────────────────────────────

  // Home institutional section — tall portraits for staggered grid
  homeGrid1: A("62c65191-93bb-40f9-ab69-d1e2e7fd2d80.JPG"),   // Justice facade portrait
  homeGrid2: A("53a5cfb8-d477-44d3-8cb7-d8f89ec5b076.JPG"),   // site portrait

  // Service tiles — each area gets a contextually relevant image
  // 1. Design / BIM — wide technical site shot
  service1: A("1dd7395d-05f4-4f23-ade3-32b73a50a6a9.JPG"),
  // 2. Construction — scaffolding/facade wide
  service2: A("46d6b4bd-241d-4903-b4b2-3b77f23b80fe.JPG"),
  // 3. Management — wide coordinated site
  service3: A("4eb83d2a-61a7-4ca3-b34d-2e4a5e33d3e3.JPG"),
  // 4. Research & Innovation — modern wide shot
  service4: A("3759113e-f70b-465e-9317-b05a39f8c22c.JPG"),
  // 5. Training — team/people context
  service5: A("fe6b8c3d-9979-4179-ad16-53058f2a6ee1.JPG"),

  // Project thumbnails for home portfolio section
  project1: A("8e0ffd58-ad0e-4ba3-b7d4-be68c8ca5379.JPG"),    // Justice landscape
  project2: A("7f4bd34f-b7ba-477d-89d9-eb8a9b3cb32f.JPG"),    // Sumol wide
  project3: A("1649ae61-c101-4af1-a306-d1663b766f67.JPG"),    // Infrastructure/ETAR
  project4: A("5d2728d1-8183-4438-a763-fed12e18ef77.JPG"),    // BIM/coordination

  // About page imagery
  about1: A("1dd7395d-05f4-4f23-ade3-32b73a50a6a9.JPG"),
  about2: A("ea087090-b39a-4475-87a7-1083805cc211.JPG"),
  about3: A("53a5cfb8-d477-44d3-8cb7-d8f89ec5b076.JPG"),

  // Differential / "why us" section — scaffold/facade work
  differential: A("46d6b4bd-241d-4903-b4b2-3b77f23b80fe.JPG"),
};
