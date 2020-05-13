import { LinkedIn, Facebook, Twitter } from '@material-ui/icons';

export const reqUrl = "http://localhost:3000";

export const themeModesConstants = {
  storageKey: 'theme-mode',
  dark: 'dark',
  light: 'light',
};

export const routes = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Contact', path: '/#contact' },
];

export const socialLinks = [
  { icon: LinkedIn, url: 'https://linkedin.com/in/ahmeeedmostafa', label: 'ahmeeedmostafa' },
  { icon: Facebook, url: 'https://facebook.com/ahmeeedmustafa', label: 'ahmeeedmustafa' },
  { icon: Twitter, url: 'https://twitter.com/ahmeeedmostafa', label: 'ahmeeedmostafa' },
];