import type { Config } from './types';

export default {
  id: '/',
  name: 'Recommend Drama Sinhala',
  shortName: 'RecommendDrama',
  description: 'Sinhala Subtitles Drama Streaming Site',

  direction: 'auto',
  language: 'en-US',

  backgroundColor: '#000000',
  themeColor: '#000000',

  display: 'standalone',
  orientation: 'natural',

  scope: '/',
  startUrl: '/?utm_source=homescreen',

  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,

  // Optional shortcuts (ඔයාට ඕන නැත්නම් ඉවත් කරන්නත් පුළුවන්)
  shortcuts: [
    {
      name: 'Latest Episodes',
      shortName: 'Episodes',
      description: 'View latest drama episodes',
      url: '/search?utm_source=homescreen',
    },
    {
      name: 'Drama List',
      shortName: 'Dramas',
      description: 'All drama list',
      url: '/?utm_source=homescreen',
    },
  ],

  pwa: {
    logs: true,

    // Cloudflare / OneSignal දැනට OFF
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '',
      allowLocalhostAsSecureOrigin: false,
    },
  },

  // ✅ IMPORTANT: YOUR REAL BLOG URL
  origin: 'https://recommendrama.blogspot.com',
} satisfies Config;
