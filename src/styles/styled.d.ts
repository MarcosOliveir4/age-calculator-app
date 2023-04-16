import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primarylight: string;
      primary: string;
      primaryDark: string;

      secundarylight: string;
      secundary: string;
      secundaryDark: string;

      errorlight: string;
      error: string;
      errorDark: string;

      warninglight: string;
      warning: string;
      warningDark: string;

      infolight: string;
      info: string;
      infoDark: string;

      successlight: string;
      success: string;
      successDark: string;

      background: string;
      text: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primarylight: string;
      primary: string;
      primaryDark: string;

      secundarylight: string;
      secundary: string;
      secundaryDark: string;

      errorlight: string;
      error: string;
      errorDark: string;

      warninglight: string;
      warning: string;
      warningDark: string;

      infolight: string;
      info: string;
      infoDark: string;

      successlight: string;
      success: string;
      successDark: string;

      background: string;
      text: string;
    };
  }
}
