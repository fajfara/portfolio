import styled from "@emotion/styled";

import { rem } from 'polished';

// Variables
import { spacing, colors } from "../../styles/variables/_variables";

const NavbarStyles = styled.nav`
  background-color: #fff;
  display: flex;
  height: fit-content;
  top: 0;
  transition: position 0.3s ease-out;
  z-index: 1000;
  position: sticky;
  
  .container {
    display: flex;
    justify-content: space-between;
    padding: ${rem(32)};
    width: 100%;
  }
  
  .logo {
    cursor: pointer;
    
    &:hover {
      opacity: 0.75;
    }
  }
    
  .menu {
    display: flex;
    
    li {
      display: flex;
    
      a {
        color: ${ colors.black };
        text-decoration: none;
        font-weight: 600;
        display: flex;
        align-items: center;
      }
      
      &:not(:last-child) {
        margin-right: ${ rem(spacing.lg) };
      }
    }
  }
`;

export default NavbarStyles;