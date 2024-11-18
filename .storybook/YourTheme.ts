import {create} from '@storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: 'Open Sauce One',
    fontCode: 'monospace',

    brandTitle: 'RankingAmani',
    brandUrl: 'https://rankingamani.com/',
    brandImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1720850951/Am/amarin/Vector_tkfwox.svg',
    brandTarget: '_self',

    //
    colorPrimary: '#639418',
    colorSecondary: '#639418',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#639418',
    appBorderRadius: 8,

    // Text colors
    textColor: '#38393d',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#639418',
    barSelectedColor: '#639418',
    barHoverColor: '#639418',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#38393d',
    inputTextColor: '#38393d',
    inputBorderRadius: 5,
});

const link = document.createElement('link');
link.href = 'https://fonts.cdnfonts.com/css/open-sauce-one';
link.rel = 'stylesheet';
document.head.appendChild(link);