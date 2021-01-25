const HEADER_ROUTES = [
  {
    name: 'Help',
    to: '/',
    back: '',
    img: require('assets/img/page/help.svg'),
  },
  {
    name: 'Account',
    to: '/account/',
    back: '',
    img: require('assets/img/page/account.svg'),
  },
  {
    name: 'ChatRoom',
    to: '/chatroom/',
    back: '',
    img: require('assets/img/page/chatroom.svg'),
  },
  {
    name: 'Chat',
    to: '/chat/:id',
    back: '/chatroom/',
    img: require('assets/img/page/chat.svg'),
  },
  {
    name: 'Password',
    to: '/password/:id',
    back: '/chatroom/',
    img: require('assets/img/page/lock.svg'),
  },
  {
    name: 'Setting',
    to: '/setting/',
    back: '',
    img: require('assets/img/page/setting.svg'),
  },
];

const FOOTER_ROUTES = [
  {
    name: 'Help',
    to: '/',
    img: require('assets/img/page/help.svg'),
  },
  {
    name: 'Account',
    to: '/account/',
    img: require('assets/img/page/account.svg'),
  },
  {
    name: 'ChatRoom',
    to: '/chatroom/',
    img: require('assets/img/page/chatroom.svg'),
  },
  {
    name: 'Setting',
    to: '/setting/',
    img: require('assets/img/page/setting.svg'),
  },
];

const COLORS = [
  {
    label: 'red',
    value: 'red',
  },
  {
    label: 'tomato',
    value: 'tomato',
  },
  {
    label: 'green',
    value: 'green',
  },
  {
    label: 'forestgreen',
    value: 'forestgreen',
  },
  {
    label: 'cornflowerblue',
    value: 'cornflowerblue',
  },
  {
    label: 'navy',
    value: 'navy',
  },
  {
    label: 'gold',
    value: 'gold',
  },
  {
    label: 'orange',
    value: 'orange',
  },
  {
    label: 'brown',
    value: 'brown',
  },
  {
    label: 'purple',
    value: 'purple',
  },
  {
    label: 'pink',
    value: 'pink',
  },
];

const PERSISTENCE_TYPES = [
  {
    label: 'local',
    value: 'local',
  },
  {
    label: 'session',
    value: 'session',
  },
  {
    label: 'none',
    value: 'none',
  },
];

export { HEADER_ROUTES, FOOTER_ROUTES, COLORS, PERSISTENCE_TYPES };
