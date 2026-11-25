/*
 * ProLynk marketing site config. Edit these constants, then redeploy.
 * APP_URL: the ProLynk app. NOTE: the app is not published yet; keep this a constant
 *          and point it at the live app when it ships.
 * X_PIXEL_ID: X (Twitter) pixel id, e.g. "o1abc". Empty = no pixel loads at all.
 * X_EVENT_CTA: optional X event id fired on CTA taps, e.g. "tw-o1abc-o2def".
 * CTA_DEFAULT_PARAMS: added to CTA links when the visitor arrived without utm_* params.
 *          Incoming utm_* and ref params always win (copied onto every CTA link).
 */
window.PL_CONFIG = {
  APP_URL: "https://try.prolynk.io",
  CTA_PATH: "/get",
  CTA_DEFAULT_PARAMS: { utm_source: "x", utm_medium: "paid", utm_campaign: "prolynk_site" },
  X_PIXEL_ID: "",
  X_EVENT_CTA: "",
  CONTACT_EMAIL: "dave@prolynk.io"
};
