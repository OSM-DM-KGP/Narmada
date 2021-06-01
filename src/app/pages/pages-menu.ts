import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Find Tweets',
    icon: 'nb-search',
    link: '/new',
  },
  {
    title: 'All Tweets',
    icon: 'nb-home',
    link: '/alltweets',
    home: true,
  },
  {
    title: 'About Us',
    icon: 'nb-grid-a',
    link: '/about',
  },
  // {
  //   title: 'Completed',
  //   icon: 'nb-checkmark',
  //   link: '/completed',
  // },
  // {
  //   title: 'Savitr',
  //   icon: 'nb-bar-chart',
  //   link: '/savitr',
  // },
  {
    title: 'Manual',
    icon: 'nb-checkmark',
    link: '/manual',
  },
  {
    title: 'Feedback',
    icon: 'nb-lightbulb',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScke93Uvi_6pky_4a_gnFf7kWey24sNR2oqn2N_srs8NpLE9g/viewform',
    target: '_blank',
  },

];

/*  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
 */


// export const MENU_ITEMS: NbMenuItem[] = [
//   {
//     title: 'E-commerce',
//     icon: 'nb-e-commerce',
//     link: '/dashboard',
//     home: true,
//   },
//   {
//     title: 'IoT Dashboard',
//     icon: 'nb-home',
//     link: '/iot-dashboard',
//   },
//   {
//     title: 'FEATURES',
//     group: true,
//   },
//   {
//     title: 'UI Features',
//     icon: 'nb-keypad',
//     link: '/ui-features',
//     children: [
//       {
//         title: 'Buttons',
//         link: '/ui-features/buttons',
//       },
//       {
//         title: 'Grid',
//         link: '/ui-features/grid',
//       },
//       {
//         title: 'Icons',
//         link: '/ui-features/icons',
//       },
//       {
//         title: 'Modals',
//         link: '/ui-features/modals',
//       },
//       {
//         title: 'Popovers',
//         link: '/ui-features/popovers',
//       },
//       {
//         title: 'Typography',
//         link: '/ui-features/typography',
//       },
//       {
//         title: 'Animated Searches',
//         link: '/ui-features/search-fields',
//       },
//       {
//         title: 'Tabs',
//         link: '/ui-features/tabs',
//       },
//     ],
//   },
//   {
//     title: 'Forms',
//     icon: 'nb-compose',
//     children: [
//       {
//         title: 'Form Inputs',
//         link: '/forms/inputs',
//       },
//       {
//         title: 'Form Layouts',
//         link: '/forms/layouts',
//       },
//     ],
//   },
//   {
//     title: 'Components',
//     icon: 'nb-gear',
//     children: [
//       {
//         title: 'Tree',
//         link: '/components/tree',
//       }, {
//         title: 'Notifications',
//         link: '/components/notifications',
//       },
//     ],
//   },
//   {
//     title: 'Maps',
//     icon: 'nb-location',
//     children: [
//       {
//         title: 'Google Maps',
//         link: '/maps/gmaps',
//       },
//       {
//         title: 'Leaflet Maps',
//         link: '/maps/leaflet',
//       },
//       {
//         title: 'Bubble Maps',
//         link: '/maps/bubble',
//       },
//       {
//         title: 'Search Maps',
//         link: '/maps/searchmap',
//       },
//     ],
//   },
//   {
//     title: 'Charts',
//     icon: 'nb-bar-chart',
//     children: [
//       {
//         title: 'Echarts',
//         link: '/charts/echarts',
//       },
//       {
//         title: 'Charts.js',
//         link: '/charts/chartjs',
//       },
//       {
//         title: 'D3',
//         link: '/charts/d3',
//       },
//     ],
//   },
//   {
//     title: 'Editors',
//     icon: 'nb-title',
//     children: [
//       {
//         title: 'TinyMCE',
//         link: '/editors/tinymce',
//       },
//       {
//         title: 'CKEditor',
//         link: '/editors/ckeditor',
//       },
//     ],
//   },
//   {
//     title: 'Tables',
//     icon: 'nb-tables',
//     children: [
//       {
//         title: 'Smart Table',
//         link: '/tables/smart-table',
//       },
//     ],
//   },
//   {
//     title: 'Miscellaneous',
//     icon: 'nb-shuffle',
//     children: [
//       {
//         title: '404',
//         link: '/miscellaneous/404',
//       },
//     ],
//   },
//   {
//     title: 'Auth',
//     icon: 'nb-locked',
//     children: [
//       {
//         title: 'Login',
//         link: '/auth/login',
//       },
//       {
//         title: 'Register',
//         link: '/auth/register',
//       },
//       {
//         title: 'Request Password',
//         link: '/auth/request-password',
//       },
//       {
//         title: 'Reset Password',
//         link: '/auth/reset-password',
//       },
//     ],
//   },
// ];
