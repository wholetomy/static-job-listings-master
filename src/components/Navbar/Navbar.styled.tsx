import styled from "styled-components";

export const NavbarContainer = styled.div<{$imagemdesktop: string, $imagemmobile: string}>`
    background-image: url("${props => props.$imagemdesktop}");
    background-repeat: repeat-x;
    background-color: hsl(180, 29%, 50%);
    height: 156px;
    width: 100%;

    @media (max-width: 600px) {
        background-image: url("${props => props.$imagemmobile}");
    }

`