// module.exports = {};
// module.exports.default = {};

(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : factory((global['pro-light-svg-icons'] = {}));
})(this, function(exports) {
  let prefix = 'fax';

  const faUser = {
    prefix: 'fax',
    iconName: 'user',
    icon: [
      576,
      480,
      [],
      'f007',
      'M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z',
    ],
  };

  const faFlagCheckered = {
    prefix: 'fax',
    iconName: 'flag-checkered',
    icon: [
      576,
      480,
      [],
      'f11e',
      'M464 96.3c-22.5 8.9-49.7 17.4-76.8 22.2v72.6c26.8-4.4 51.7-13.8 76.8-23.7zm0 212.5v-71.1c-16.8 10.6-46.8 21.5-76.8 25.5v72c30.7-3.2 58.6-14.9 76.8-26.4zM80 186.3c16.2-10.2 46.9-20.7 76.8-25V88.8C126.1 92 98.2 103.7 80 115.2zm0 133.5c23.1-7.7 50.3-13.1 76.8-16v-71.7c-26 2.7-52 8.4-76.8 16.6zm230.4-63.1c-25.1-6.9-49.6-16.6-76.8-22.2v69.7c27.7 4.7 52 14 76.8 21.4v-68.9c27.5 7.6 49.7 10.1 76.8 6.5v-72.1c-24.4 4-48.6 3.6-76.8-2.5zM477.9 37.8c-36.8 17.1-86.3 36.9-133.5 36.9-56.7 0-102-34.7-171.9-34.7-28.5 0-53.7 5.3-77 14.4C99.6 24.7 75.8-1.1 46.1 0 21.5 1 1.4 20.8.1 45.3c-1.2 22.1 12.5 41.1 31.9 48V500c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V378.4c31.4-14.5 72.1-29.1 135.7-29.1 56.6 0 101.9 34.7 171.8 34.7 51.3 0 91.9-17.2 130-43 6.6-4.5 10.5-11.9 10.5-19.9V59.5c0-17.5-18.2-29.1-34.1-21.7zM48 68c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm432 249.3C456.9 334 415.5 352 371.5 352c-63.6 0-108.2-34.7-171.8-34.7-46 0-102.3 10.2-135.7 26V106.7C87.1 90 128.5 72 172.5 72c63.6 0 108.2 34.7 171.8 34.7 45.9 0 102.2-18.8 135.7-34.7zM310.4 119.7c-27.7-4.7-52.3-14.2-76.8-21.4v67.9c25.3 6.7 49.6 16.4 76.8 22.4zm-153.6 41.5v70.9c34.2-3.6 56.2-1.7 76.8 2.5v-68.4c-29.7-7.8-51.3-8.7-76.8-5z',
    ],
  };

  const faShoppingBag = {
    prefix: 'fax',
    iconName: 'shopping-bag',
    icon: [
      512,
      448,
      [],
      'f290',
      'M352 128C352 57.421 294.579 0 224 0 153.42 0 96 57.421 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 32c52.935 0 96 43.065 96 96H128c0-52.935 43.065-96 96-96zm192 400c0 26.467-21.533 48-48 48H80c-26.467 0-48-21.533-48-48V160h64v48c0 8.837 7.164 16 16 16s16-7.163 16-16v-48h192v48c0 8.837 7.163 16 16 16s16-7.163 16-16v-48h64v272z',
    ],
  };

  const faSignOutAlt = {
    prefix: 'fax',
    iconName: 'sign-out-alt',
    icon: [
      512,
      512,
      [],
      'f2f5',
      'M160 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L333.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H176c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L356.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H176c-26.5 0-48 21.6-48 48zM0 112v288c0 26.5 21.5 48 48 48h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48C21.5 64 0 85.5 0 112z',
    ],
  };

  const _iconsCache = {
    faUser,
    faFlagCheckered,
    faShoppingBag,
    faSignOutAlt,
  };

  exports.fax = _iconsCache;
  exports.prefix = prefix;
  exports.faUser = faUser;
  exports.faFlagCheckered = faFlagCheckered;
  exports.faShoppingBag = faShoppingBag;
  exports.faSignOutAlt = faSignOutAlt;

  Object.defineProperty(exports, '__esModule', { value: true });
});
