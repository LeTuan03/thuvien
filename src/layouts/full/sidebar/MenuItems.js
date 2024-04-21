import {
  IconAperture,
  IconArrowsExchange,
  IconBook,
  IconBookmark,
  IconClipboardList,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUser,
  IconUserCircle,
  IconUserPlus,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  // {
  //   navlabel: true,
  //   subheader: 'Home',
  // },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Quản lý sách',
    icon: IconBook,
    href: '/manage-book',
  },
  {
    id: uniqueId(),
    title: 'Loại sách',
    icon: IconBookmark,
    href: '/manage-genre',
  },
  {
    id: uniqueId(),
    title: 'Mượn trả sách',
    icon: IconArrowsExchange,
    href: '/manage-borrow-book',
  },
  {
    id: uniqueId(),
    title: 'Thẻ thư viện',
    icon: IconClipboardList,
    href: '/manage-card',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Sample Page',
  //   icon: IconAperture,
  //   href: '/sample-page',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Utilities',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Typography',
  //   icon: IconTypography,
  //   href: '/ui/typography',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Shadow',
  //   icon: IconCopy,
  //   href: '/ui/shadow',
  // },
  {
    navlabel: true,
    subheader: 'Hệ thống',
  },
  {
    id: uniqueId(),
    title: 'Nhân viên',
    icon: IconUser,
    href: '/manage-staff',
  },
  {
    id: uniqueId(),
    title: 'Người dùng',
    icon: IconUserCircle,
    href: '/manage-user',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/auth/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/auth/register',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Extra',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
];

export default Menuitems;
