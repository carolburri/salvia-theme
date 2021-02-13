import jQuery from 'jquery';
import { addBackToTop } from 'vanilla-back-to-top';

import './styles/main.scss';
import './styles/editor.scss';

const initPage = () => {
	addBackToTop({ backgroundColor: '#008FD5' });
};

/** Load Events */
jQuery(function () {
	initPage();
});
