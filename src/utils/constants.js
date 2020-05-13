import { LinkedIn, Facebook, Twitter, Home, Code, Mail  } from '@material-ui/icons';

// It should be set through environment variables for being more dynamic.
export const projectsDataApiUrl = "https://api.jsonbin.io/b/5ebc5e7147a2266b1478026b";

export const themeModesConstants = {
  storageKey: 'theme-mode',
  dark: 'dark',
  light: 'light',
};

export const routes = [
  { name: 'Home', path: '/', Icon: Home},
  { name: 'Projects', path: '/#projects', Icon: Code },
  { name: 'Contact', path: '/#contact', Icon: Mail },
];

export const socialLinks = [
  { icon: LinkedIn, url: 'https://linkedin.com/in/ahmeeedmostafa', label: 'ahmeeedmostafa' },
  { icon: Facebook, url: 'https://facebook.com/ahmeeedmustafa', label: 'ahmeeedmustafa' },
  { icon: Twitter, url: 'https://twitter.com/ahmeeedmostafa', label: 'ahmeeedmostafa' },
];

// These data should be retrieved from environment variables for being more secure.
export const mailingApiCredentials = {
    service_id: 'default_service',
    template_id: 'template_UglWvcKR',
    user_id: 'user_2bXXqoew5ZagekajmexNS',
};