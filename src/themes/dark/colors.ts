const Colors = {
  primary: 'rgb(244, 128, 110)', // #f4806e
  primaryForGradient: 'rgba(244, 128, 110, .5)', // #f4806e
  secondary: 'rgb(36, 36, 36)', // #242424
  tertiary: 'rgb(16, 94, 117)', // #105E75
  tertiaryForGradient: 'rgba(16, 94, 117, 5)', // #105E75

  white: 'rgb(255, 255, 255)',
  whiteWithOpacity: 'rgba(255, 255, 255, .75)',
  black: 'rgb(44, 44, 44)',
  blackSecondary: 'rgb(77, 77, 77)', // #4D4D4D
  blackTertiary: 'rgb(41, 41, 41)', // #292929
  blackOpacity: 'rgba(255, 255, 255, 0.4)',

  transparent: 'transparent',

  lightGray: 'rgb(243, 243, 243)', // #F3F3F3
  gray: 'rgb(172, 184, 188)', // #ACB8BC
  darkGray: 'rgb(115, 115, 115)', // #737373
  charcoal: 'rgb(51, 51, 51)', // #333333
  charcoalOpacity: 'rgba(51, 51, 51, 0.3)',
  lightBlue: 'rgba(199, 229, 238, 1)', // #C7E5EE;

  success: 'rgb(90, 202, 117)', // #5ACA75
  warning: 'rgb(255, 143, 57)', // #FF8F39
  error: 'rgb(218, 20, 20)', // #DA1414

  shadow: 'rgba(51, 51, 51, 0.15)',
}

export const colorWithOpacity = (
  rgbColor: ValueOf<typeof Colors>,
  opacity: number,
): string => {
  if (rgbColor.includes(',')) {
    const alpha = Math.min(Math.max(opacity, 0), 1)
    const rgbToArray = rgbColor
      .slice(rgbColor.indexOf('(') + 1, rgbColor.indexOf(')'))
      .split(', ')
    if (rgbToArray && rgbToArray.length >= 3) {
      const red = parseInt(rgbToArray[0], 10)
      const green = parseInt(rgbToArray[1], 10)
      const blue = parseInt(rgbToArray[2], 10)
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`
    }
  }
  return rgbColor
}

export default Colors
