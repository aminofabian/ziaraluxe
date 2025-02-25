import { writable } from 'svelte/store';
import heroTranslations from '../i18n/hero.json';

export const currentLanguage = writable('en');

export const translations = {
  en: {
    hero: heroTranslations.en
  },
  fr: {
    hero: heroTranslations.fr
  },
  zh: {
    hero: heroTranslations.zh
  },
  ar: {
    hero: heroTranslations.ar
  }
};
