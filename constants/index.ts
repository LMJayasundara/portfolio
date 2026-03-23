import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';

export const baseUrl = 'https://lahirumadushan.com';

export const avatar = {
  name: 'Lahiru Jayasundara',
  initials: 'LJ',
};

export const links = [
  {
    title: 'GitHub',
    url: 'https://github.com/LMJayasundara',
    icon: FaGithubSquare,
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/lahirujayasundara',
    icon: FaLinkedin,
  },
  {
    title: 'Email',
    url: 'mailto:jmlahirujayasundara@gmail.com',
    icon: FaEnvelope,
  },
];

export const navItems = [
  {
    title: 'About',
    label: 'About',
    url: '/',
  },
  {
    title: 'Career',
    label: 'Career',
    url: '/career',
  },
  {
    title: 'Projects',
    label: 'Projects',
    url: '/projects',
  },
  {
    title: 'Contact',
    label: 'Contact',
    url: '/contact',
  },
];
