export const i18n = {
  defaultLocale: "hi",
  locales: ["hi", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
