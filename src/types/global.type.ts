import 'styled-components';
import { TThemeProps } from './theme.type';

declare module 'styled-components' {
  export interface DefaultTheme extends TThemeProps { }
}