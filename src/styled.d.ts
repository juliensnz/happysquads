import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    squad: {
      [name: string]: string;
    };
  }
}
