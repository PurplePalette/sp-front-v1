import colors from 'vuetify/es5/util/colors'

export default {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.purple.base,
        secondary: '#673AB7',
        accent: colors.indigo.base,
        error: colors.pink.base,
        warning: colors.amber.base,
        info: colors.teal.base,
        success: colors.green.base
      }
    }
  }
}
