import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    squad: {
      [squad in SquadType]: string;
    };
  }
}
