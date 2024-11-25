import {DIACRITICS_REMOVAL_MAP} from './diacritics';

const diacritics = DIACRITICS_REMOVAL_MAP.reduce((acc, {base, letters}) => {
  const range = [...letters].reduce((acc, letter) => {
    return {...acc, [letter]: base};
  }, {});
  return {...acc, ...range};
}, {});

export const serialize = (...strings) => {
  const flattened = strings.map(current => {
    switch (typeof current) {
      case 'string':
      case 'number':
        return current;
      case 'object':
        return Object.values(current).join('-');
    }
  });
  return flattened
    .join('-')
    .replace(/\s/g, '-')
    .replace(/[^\u0000-\u007E]/g, letter => diacritics[letter] || letter)
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase();
};
