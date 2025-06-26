interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👨‍🚀' },
  { id: 'experience', label: 'Experience', icon: '🚀' },
  { id: 'projects', label: 'Projects', icon: '🛸' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'contact', label: 'Contact', icon: '📡' },
];

export const logoText = 'SeBeom.dev';
