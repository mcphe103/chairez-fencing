// lib/business.ts

export const BUSINESS = {
  name: "Chairez Fencing",

  // Primary phone (use the NEW number here)
  phoneDisplay: "(925) 752-2348",
  phoneE164: "+19257522348",

  // Additional phones (scales cleanly)
  phones: [
    {
      label: "Call / Text",
      display: "(925) 752-2914",
      e164: "+19257522914",
    },
    {
      label: "Alternate",
      display: "(925) 752-2348",
      e164: "+19257522348",
    },
  ],

  email: "chairezfencing16@gmail.com",

  serviceAreas: [
    "Antioch",
    "Pittsburg",
    "Brentwood",
    "Oakley",
    "Concord",
  ],
};

// --- helpers (safe to keep for existing imports) ---
export const telHref = `tel:${BUSINESS.phoneE164}`;
export const emailHref = `mailto:${BUSINESS.email}`;
export const phoneHref = `tel:${BUSINESS.phoneE164}`;

// Optional helper for multi-phone rendering
export function telFromE164(e164: string) {
  return `tel:${e164}`;
}
