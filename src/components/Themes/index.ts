const cyan = {
  cyan50: '#001640',
  cyan40: '#1A3D7F',
  cyan30: '#025FDE',
  cyan20: '#217EFD',
  cyan15: '#bad8ff',
  cyan10: '#EEF5FF'
};

const shades = {
  shade70: '#262930',
  shade60: '#4A4F58',
  shade50: '#333333',
  shade40: '#666666',
  shade30: '#999999',
  shade20: '#EEEEEE',
  shade10: '#EFF1F3',
  shade05: '#FAFAFA'
};

const red = {
  red40: '#981010',
  red30: '#B41313',
  red20: '#F3D9D9',
  red10: '#F9EDED'
};

const honey = {
  honey40: '#F77202',
  honey30: '#F77202',
  honey20: '#FCCEA7',
  honey10: '#FDE3CC'
};

const yellow = {
  yellow30: '#D08007',
  yellow20: '#EFD3A8',
  yellow10: '#FAF2E6'
};

const mint = {
  mint40: '#059D2F',
  mint30: '#06B737',
  mint20: '#D7EFDE',
  mint10: '#EBF8EF'
};

const special = {
  cyan30opacity16: 'rgba(33, 126, 253, 0.16)'
};

const white = '#FFFFFF';
const black = '#000000';
const transparent = 'transparent';

export const spacing = {
  space1: '4px',
  space2: '8px',
  space3: '16px',
  space4: '24px',
  space5: '32px',
  space6: '40px',
  space7: '48px',
  space8: '56px',
  space9: '64px'
};

const zIndex = {
  z1: 1,
  z2: 2,
  z3: 3,
  z4: 4,
  z5: 5,
  z6: 6,
  z7: 7,
  z8: 8,
  z9: 9,
  full: 10000
};

export const theme = {
  zIndex,
  spacing,
  colors: {
    ...yellow,
    ...shades,
    ...red,
    ...honey,
    ...mint,
    ...cyan,
    white,
    black,
    transparent,
    ...special
  },
  fonts: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  title: {
    medium: '24px',
    large: '34px'
  },
  paragraph: {
    'xx-small': '10px',
    'x-small': '12px',
    small: '14px',
    medium: '16px',
    large: '18px'
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
    h1: '36px',
    h2: '34px',
    h3: '32px',
    h4: '28px',
    h5: '24px',
    p0: '20px',
    p1: '16px',
    p2: '14px',
    p3: '13px',
    p4: '11px'
  }
};
