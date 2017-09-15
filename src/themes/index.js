import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import gdg_theme from './gdg_theme';

const themes= [
  {
    id: 'light',
    source: lightBaseTheme,
  },
  {
    id: 'dark',
    source: darkBaseTheme,
  },
  {
    id: 'gdg',
    source: gdg_theme,
  },
];

export function getThemeSource(theme){


  if(themes){
    for (var i = 0; i < themes.length; i++) {
      if(themes[i]['id']===theme){
        return themes[i]['source']
      }
    }
  }

  return lightBaseTheme; //Default theme

}


export default themes;
