import 'normalize.css';

// ---

import '../vendor/fonts.css';
import '../variables/variables.css';
import '../css/index.css';

// ---

import Header from './components/app/header/header';
import FormValidator from '../utilities/formValidator';
import Menu from './components/app/header/menu/menu';
import SearchEngine from '../utilities/searchEngine';
import Renderer from '../utilities/renderer';

// ---

import {
  passengers,
  maleAvatarApi,
  femaleAvatarApi,
  app,
  header,
  form,
  input,
  inputConfig,
  menu,
  menuButton,
  menuCurrent,
  menuCaret,
  menuCaretConfig,
  menuOptions,
  menuOptionsConfig,
  menuOptionNodeList,
  menuOverlay,
  menuOverlayConfig,
  submit,
  submitConfig,
  main,
  footer,
} from '../variables/variables';

// ---

const headerInstance = new Header(passengers, header, form, input, menuCurrent);
const formValidatorInstance = new FormValidator(form, input, inputConfig, submit, submitConfig);
const menuInstance = new Menu(
  menu,
  menuButton,
  menuCurrent,
  menuCaret,
  menuCaretConfig,
  menuOptions,
  menuOptionsConfig,
  menuOptionNodeList,
  menuOverlay,
  menuOverlayConfig,
);
const searchEngineInstance = new SearchEngine();
const rendererInstance = new Renderer();

// ---

headerInstance.enable(searchEngineInstance, rendererInstance);
formValidatorInstance.enable();
menuInstance.enable();
