export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/posts', label: 'Blog' },
  { href: '/cv', label: 'CV' },
  { href: '/tidbits', label: 'Tidbits' }
]; 