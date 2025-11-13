export const languages = {
  so: 'Somali',
  en: 'English',
  ar: 'Arabic',
};

export const getLanguageLabel = (code) => {
  return languages[code] || 'Unknown';
};

export const getNextLanguage = (current) => {
  const keys = Object.keys(languages);
  const index = keys.indexOf(current);
  return keys[(index + 1) % keys.length];
};