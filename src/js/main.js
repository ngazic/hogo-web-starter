/**
 * Entry Point for webpack module bundler.
 *
 */

import 'remove-focus-outline';

// --- Helpers ---
import arrayfind from './helpers/arrayfind';
import arrayfrom from './helpers/arrayfrom';

// --- Components ---
// import Search from '../../layouts/partials/components/search/search';
// import vimeo from '../../layouts/partials/components/vimeo/vimeo';
// import mediaLazy from '../../layouts/partials/components/media/media-lazy';
// import Drawer from '../../layouts/partials/components/drawer/drawer';
// import Navigation from '../../layouts/partials/components/navigation/navigation';
// import swiper from '../../layouts/partials/components/swiper/swiper';
// import CookieConsent from '../../layouts/partials/components/cookie-consent/cookie-consent';
// import cookieOptionsSl from '../../layouts/partials/components/cookie-consent/cookie-options-sl.json';
// import cookieOptionsEn from '../../layouts/partials/components/cookie-consent/cookie-options-en.json';
// import gallery from '../../layouts/partials/components/gallery/gallery';
// import accordionJS from '../../layouts/partials/components/accordion/accordion';
// import selectInit from '../../layouts/partials/components/form/select/select';
// import modalInit from '../../layouts/partials/components/modal/modalInit';
// import Youtube from '../../layouts/partials/components/youtube/youtube';

require('svgxuse'); // IE 11 polyfill

// --- Helpers ---
arrayfind();
arrayfrom();

// --- Components ---
// const search = new Search(); // eslint-disable-line no-unused-vars

// swiper();
// vimeo();
// mediaLazy();
// gallery();
// accordionJS();
// selectInit();
// modalInit();

// // youtube
// const youtube = new Youtube(); // eslint-disable-line no-unused-vars

// // Drawer
// const drawer = new Drawer(); // eslint-disable-line no-unused-vars

// // Navigation
// const navigation = new Navigation(); // eslint-disable-line no-unused-vars

// // Close main menu on drawer close
// const menuButton = document.querySelector('[aria-controls="drawer"]');
// menuButton.addEventListener('click', () => {
//   navigation.reset();
// });

// // Cookie consent init
// const { lang } = document.documentElement;
// const cookieOptions = lang === 'sl' ? cookieOptionsSl : cookieOptionsEn;
// const consent = new CookieConsent(cookieOptions); // eslint-disable-line no-unused-vars
