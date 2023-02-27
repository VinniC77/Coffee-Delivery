import { defaultTheme } from "../styles/theme/default";

type TheheType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends TheheType {}
}