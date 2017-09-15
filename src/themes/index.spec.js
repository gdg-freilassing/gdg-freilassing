import {getThemeSource}  from './index';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import gdg_theme from './gdg_theme';

describe('locales', () => {

  it('should return theme source', () => {
    expect(
      getThemeSource('gdg')
    ).toEqual(gdg_theme)
  })

  it('should return default theme on wrong input', () => {
    expect(
      getThemeSource('themeX')
    ).toEqual(lightBaseTheme)
  })


})
