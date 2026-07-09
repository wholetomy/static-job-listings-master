import { NavbarContainer } from "./Navbar.styled"
import bgHeaderDesktop from "../../assets/images/bg-header-desktop.svg";
import bgHeaderMobile from '../../assets/images/bg-header-mobile.svg';

export default function Navbar() {

    const imagens = {
        $imagemdesktop: bgHeaderDesktop,
        $imagemmobile: bgHeaderMobile,
    };

    return (
        <>
            <NavbarContainer {...imagens} />
        </>
    )
}
