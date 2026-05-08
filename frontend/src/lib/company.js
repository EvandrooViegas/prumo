// =============================================================================
//  PRUMO Soalheiro, Lda. — Company information
// =============================================================================
//  Edit the values below to update the entire site (header, footer, contact
//  page, structured data, etc.). Empty strings will be hidden automatically.
// =============================================================================

export const COMPANY = {
  // Legal name & tagline
  legalName: "PRUMO Soalheiro, Lda.",
  shortName: "PRUMO",

  // Contact details
  email: "geral@prumosoalheiro.pt",
  phone: "+351 000 000 000", // E.164 friendly format, e.g. +351 912 345 678
  whatsapp: "",              // optional, e.g. "+351912345678" (no spaces)

  // Address
  address: {
    line1: "Rua Exemplo, 000",
    line2: "0000-000 Cidade",
    country: "Portugal",
    // Used for the Google Maps embed on the contact page.
    // Anything that resolves on Google Maps works (full address, plus codes,
    // place name, lat/lng, etc.).
    mapsQuery: "Lisboa, Portugal",
  },

  // Social profiles — leave the URL empty to hide the link site-wide.
  social: {
    instagram: {
      handle: "@prumosoalheiro",
      url: "https://instagram.com/prumosoalheiro",
    },
    tiktok: {
      handle: "@prumosoalheiro",
      url: "https://www.tiktok.com/@prumosoalheiro",
    },
    facebook: {
      handle: "@prumosoalheiro",
      url: "https://facebook.com/prumosoalheiro",
    },
    linkedin: {
      handle: "",
      url: "",
    },
  },

  // Working hours (free text — appears on contact page / footer)
  hours: "Seg–Sex · 09:00 – 18:00",

  // Footer copyright line
  copyrightHolder: "Kachica",
  yearStart: 2026,
};

// Quick helpers used by components --------------------------------------------

export const getMailto = () => `mailto:${COMPANY.email}`;
export const getTel = () => `tel:${COMPANY.phone.replace(/\s+/g, "")}`;
export const getMapsEmbed = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY.address.mapsQuery
  )}&output=embed`;
export const getMapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    COMPANY.address.mapsQuery
  )}`;
