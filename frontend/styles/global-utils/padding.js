import {spacing} from "../variables/_variables";
import {rem} from "polished";

const padding = `
  .padding {
  
    // All around
    &-xs {
      padding: ${ rem(spacing.xs) };
    }
    &-xl {
      padding: ${ rem(spacing.xl) };
    }
    
    // Only top and bottom
    &-xl-0 {
      padding: ${ rem(spacing.xl) } 0;
    }
    
    &-xl-0-lg-0 {
      padding: ${ rem(spacing.xl) } 0 ${ rem(spacing.lg) } 0;
    }
    
    // no top, only right, bottom, left
    &-0 {
      &-sm {
       &-md {
          // right: sm, bottom: md, left: sm
          padding: 0 ${ rem(spacing.sm) } ${ rem(spacing.md) };
       }
      }
    }
  }
  
`;

export default padding;