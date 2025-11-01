// lib/business.ts
export const BUSINESS = {
  name: "Chairez Fencing",
  phoneDisplay: "(925) 752-2914",   // what users see
  phoneE164: "+19257522914",        // for tel: links, JSON-LD, SEO
  email: "chairezfencing16@gmail.com", // optional, handy later
  serviceAreas: ["Antioch", "Pittsburg", "Brentwood", "Oakley", "Concord"],
};

export const telHref = `tel:${BUSINESS.phoneE164}`;
export const emailHref = `mailto:${BUSINESS.email}`
export const phoneHref = `tel:${BUSINESS.phoneDisplay}`


