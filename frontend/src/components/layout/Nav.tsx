import { useLocation, useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  LinksContainer,
  StyledLink,
} from "../../assets/styles/layout/Header.styled";
import PrimaryButton from "../../assets/styles/base/Button.styled";
import ScreenOverlay from "../ScreenOverlay";

interface INavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ isMenuOpen, setIsMenuOpen }: INavBarProps) => {
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigate = useNavigate();

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ScreenOverlay handleClick={toggleIsMenuOpen} isMenuOpen={isMenuOpen} />
      <LinksContainer isMenuOpen={isMenuOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <PrimaryButton
          width="172px"
          height="50px"
          fontSize="s"
          onClick={() => navigate("/login")}
        >
          Log in/Sign up
        </PrimaryButton>
      </LinksContainer>
    </>
  );
};

export default Nav;