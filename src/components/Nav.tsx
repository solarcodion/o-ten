import styled from "styled-components";
import { FlexBox } from "./basic/Box";
import logoImg from "assets/images/logo/white/o-ten o.svg";
import menuImg from "assets/images/menu-2.svg";
import { useLocation } from "react-router-dom";

const Root = styled.div`
  padding: 50px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Logo = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const MenuIcon = styled.img`
  height: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const Link = styled.a`
  font-size: 16px;
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: #fff;

  &:after {
    display: block;
    content: "";
    color: #fff;
    padding-bottom: 1px;
    border-bottom: solid 1px #fff;
    transform: scaleX(0);
    transition: transform 275ms ease-in-out;
    transform-origin: 100% 50%;
    margin-top: -1px;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
    color: #fff;
    border-bottom: solid 1px #fff;
    transition: transform 275ms ease-in-out;
  }

  &.active:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
    color: #fff;
    border-bottom: solid 1px #fff;
    transition: transform 275ms ease-in-out;
  }
`;

const Nav = () => {
  const location = useLocation();
  return (
    <Root>
      <FlexBox justifyContent="space-between" alignItems="center">
        <Logo src={logoImg} alt="logo" />
        <FlexBox alignItems="center">
          <FlexBox alignItems="center" gap="20px">
            {LINKS.map((link) => {
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  className={link.url === location.pathname ? "active" : ""}
                >
                  {link.label}
                </Link>
              );
            })}
          </FlexBox>
          <MenuIcon src={menuImg} alt="menu" style={{ marginLeft: "100px" }} />
        </FlexBox>
      </FlexBox>
    </Root>
  );
};

export default Nav;

const LINKS = [
  {
    label: "News",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Sneaker",
    url: "/sneaker",
  },
  {
    label: "Mint",
    url: "/mint",
  },
  {
    label: "Roadmap",
    url: "/roadmap",
  },
  {
    label: "Press",
    url: "/press",
  },
];
