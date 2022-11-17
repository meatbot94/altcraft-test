import data from '../data/data.json';

export const passengers = data;
export const maleAvatarApi = 'https://xsgames.co/randomusers/avatar.php?g=male';
export const femaleAvatarApi = 'https://xsgames.co/randomusers/avatar.php?g=female';

// ---

export const app = document.querySelector('#app');

export const header = app.querySelector('#header');

export const form = header.querySelector('#form');

export const input = form.querySelector('#search');
export const inputConfig = {
  inputError: 'header__search_error',
};

export const menu = form.querySelector('#menu');

export const menuButton = menu.querySelector('.menu__button');

export const menuCurrent = menu.querySelector('.menu__current');

export const menuCaret = menu.querySelector('.menu__caret');
export const menuCaretConfig = {
  menuCaretRotated: 'menu__caret_rotated',
};

export const menuOptions = menu.querySelector('.menu__options');
export const menuOptionsConfig = {
  menuOptionsVisible: 'menu__options_visible',
};

export const menuOptionNodeList = menu.querySelectorAll('.menu__option');

export const menuOverlay = menu.querySelector('.menu__overlay');
export const menuOverlayConfig = {
  menuOverlayEnabled: 'menu__overlay_enabled',
};

export const submit = form.querySelector('#submit');
export const submitConfig = {
  submitDisabled: 'header__submit_disabled',
};

export const main = app.querySelector('#main');

export const footer = app.querySelector('#footer');
