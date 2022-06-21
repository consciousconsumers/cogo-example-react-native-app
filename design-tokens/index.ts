export default {
  radius: { '0': 0, '1': 2, '2': 4, '3': 8, '4': 16, '5': 24, '6': 32 },
  color: {
    seaweed: {
      '16': '#004750',
      '21': '#025D69',
      '37': '#357D87',
      '52': '#62A0A8',
      '95': '#EFF5F6',
      opacity: { '5': 'rgba(0, 71, 80, .05)', '12': 'rgba(0, 71, 80, .12)' }
    },
    kaakaariki: { '75': '#B5CCB1', '88': '#D8EBD5', '95': '#ECF7EB' },
    marshmallow: { '78': '#D4BFBB', '88': '#EBD8D5', '94': '#F7EAE9' },
    feedback: { error: '#AF5746', warning: '#F9AF39', success: '#577B51' },
    white: '#ffffff'
  },
  breakpoint: { xs: 414, sm: 600, md: 840, lg: 1240, xl: 1440 },
  stroke: { '0': 0, '1': 1, '2': 2, '3': 4 },
  space: {
    '0': 0,
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '6': 24,
    '8': 32,
    '10': 40,
    '14': 56,
    '20': 80,
    '28': 112,
    px: 1,
    half: 2,
    '1half': 6,
    '2half': 10,
    '3half': 14
  },
  shadow: {
    '1': {
      value: {
        x: 0,
        y: 3,
        blur: 5,
        spread: 0,
        color: 'rgba(0, 71, 80, .1)',
        type: 'dropShadow'
      },
      css: 0,
      type: 'boxShadow'
    },
    '2': {
      value: {
        x: 0,
        y: 5,
        blur: 9,
        spread: 0,
        color: 'rgba(0, 71, 80, .1)',
        type: 'dropShadow'
      },
      css: 0,
      type: 'boxShadow'
    },
    '3': {
      value: {
        x: 0,
        y: 9,
        blur: 10,
        spread: 0,
        color: 'rgba(0, 71, 80, .1)',
        type: 'dropShadow'
      },
      css: 0,
      type: 'boxShadow'
    }
  },
  font: {
    size: {
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 40,
      '4xl': 52,
      '5xl': 64
    },
    family: 'Denim',
    leading: {
      sm: 20,
      md: 24,
      lg: 24,
      xl: 28,
      '2xl': 36,
      '3xl': 48,
      '4xl': 60,
      '5xl': 76
    },
    tracking: { normal: 0, wide: 1 }
  }
}
