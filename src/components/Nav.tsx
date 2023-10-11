import styled from "styled-components";
import { FlexBox } from "./basic/Box";
import logoImg from "assets/images/logo/white/o-ten o.svg";
import menuImg from "assets/images/menu-2.svg";
import { useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../constants";
import { useCallback, useState } from "react";
import FullscreenNav from "./FullscreenNav";
import useStore from "hooks/useStore";
import { device } from "utils/device";

const Root = styled.div`
  padding: 50px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: ${(props) => props.theme.colors.bg};

  @media ${device.tablet} {
    padding: 24px 26px;
  }
`;

const Logo = styled.img`
  height: 30px;

  @media ${device.tablet} {
    height: 22px;
  }
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
  const [showFull, setShowFull] = useState<boolean>(false);
  const { store } = useStore();

  const handleMenu = useCallback(() => {
    setShowFull(true);
  }, []);

  const isActive = useCallback(
    (url: string) => {
      console.log("23", url, location.pathname);
      if (!url) return false;
      if (url === "/") {
        if (location.pathname === "/") return true;
        return false;
      }
      return location.pathname.startsWith(url);
    },
    [location.pathname]
  );

  return (
    <Root>
      <FlexBox justifyContent="space-between" alignItems="center">
        <Logo src={logoImg} alt="logo" />
        <FlexBox alignItems="center">
          {!store.isMobile && (
            <FlexBox alignItems="center" gap="20px">
              {MENU_ITEMS.map((link) => {
                return (
                  <Link
                    key={link.url}
                    href={link.url}
                    className={isActive(link.url) ? "active" : ""}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </FlexBox>
          )}
          <MenuIcon
            src={menuImg}
            alt="menu"
            style={{ marginLeft: "100px" }}
            onClick={handleMenu}
          />
        </FlexBox>
      </FlexBox>
      {showFull && <FullscreenNav onClose={() => setShowFull(false)} />}
    </Root>
  );
};

export default Nav;
