import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
    }
    mixin: {
      wrapV1: string,
      wrapV2: string,
      wrapV3: string
    }
  }
}
