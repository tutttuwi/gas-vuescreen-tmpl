import { createVuetify } from 'vuetify';

// MEMO: アイコンを全量読み込むとファイル容量が大きくなりすぎるため、使用するアイコンのみバンドルする
// @see <https://zenn.dev/ichii731/articles/66b4cf79d2cae6>
// import '@mdi/font/css/materialdesignicons.css';
// import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
// ----------------------------------------------------------

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { PurpleTheme } from '@/theme/LightTheme';

export default createVuetify({
  components,
  directives,

  // ----- icon bandle settings -----
  // icons: {
  //   defaultSet: 'mdi',
  //   aliases,
  //   sets: {
  //     mdi
  //   }
  // },
  // --------------------------------

  theme: {
    defaultTheme: 'PurpleTheme',
    themes: {
      PurpleTheme
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
