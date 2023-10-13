import styled, { useTheme } from "styled-components";
import { FlexBox } from "./basic/Box";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FOOTER_LINKS, MENU_ITEMS, SOCIAL_LINKS } from "../constants";
import { CloseIcon } from "./icons";
import Clickable from "./Clickable";
import oxImg from "assets/images/logo/black/o-ten-icon.svg";
import useStore from "hooks/useStore";
import { device } from "utils/device";
import { useCallback } from "react";

const Root = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryBg};
  padding: 50px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobile} {
    padding: 34px;
  }
`;

const Link = styled(RouterLink)`
  font-size: 14px;
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: ${(props) => props.theme.colors.bg};

  &:hover {
    color: ${(props) => props.theme.colors.cyan};
  }

  &.active {
    color: ${(props) => props.theme.colors.cyan};
  }

  &.main {
    font-size: 24px;
    font-weight: 800;
  }
`;

const ExternalLink = styled.a`
  font-size: 14px;

  position: relative;
  text-decoration: none;
  display: inline-block;
  color: ${(props) => props.theme.colors.bg};

  &:hover {
    color: ${(props) => props.theme.colors.cyan};
  }

  &.active {
    color: ${(props) => props.theme.colors.cyan};
  }
`;

const LogoBg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 5%;
  transform: translate(-50%, -50%);
  width: 30%;

  @media ${device.mobile} {
    width: 80%;
    transform: translate(-35%, -50%);
  }
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

type Props = {
  onClose?: () => void;
};

const FullscreenNav: React.FC<Props> = ({ onClose }) => {
  const location = useLocation();
  const theme = useTheme();
  const { store } = useStore();

  const isActive = useCallback(
    (url: string) => {
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
      <LogoBg src={oxImg} alt="logo" />
      <FlexBox justifyContent="space-between" alignItems="center">
        <div></div>
        <Clickable onClick={onClose}>
          <CloseIcon width={16} height={16} fill={theme.colors.bg} />
        </Clickable>
      </FlexBox>
      <MenuContainer>
        {MENU_ITEMS.map((link) => {
          return (
            <Link
              key={link.url}
              to={link.url}
              className={isActive(link.url) ? "active main" : "main"}
            >
              {link.label}
            </Link>
          );
        })}
      </MenuContainer>
      <FlexBox justifyContent="space-between" alignItems="center">
        {!store.isMobile && (
          <FlexBox alignItems="center" gap="20px">
            {SOCIAL_LINKS.map((link) => {
              return (
                <ExternalLink href={link.url} key={link.url} target="_blank">
                  {link.label}
                </ExternalLink>
              );
            })}
          </FlexBox>
        )}
        <FlexBox alignItems="center" gap="20px">
          {FOOTER_LINKS.map((link) => {
            return (
              <Link to={link.url} key={link.url}>
                {link.label}
              </Link>
            );
          })}
        </FlexBox>
      </FlexBox>
    </Root>
  );
};

export default FullscreenNav;
