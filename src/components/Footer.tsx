import { styled } from "styled-components";
import { FlexBox } from "./basic/Box";

const Root = styled.div`
  position: fixed;
  left: 40px;
  bottom: 50px;
  transform-origin: bottom left;
  transform: rotate(-90deg);
`;

const Link = styled.a`
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <Root>
      <FlexBox alignItems="center" gap="50px">
        {LINKS.map((link) => {
          return (
            <Link href={link.url} key={link.url} target="_blank">
              {link.label}
            </Link>
          );
        })}
      </FlexBox>
    </Root>
  );
};

export default Footer;

const LINKS = [
  {
    label: "Twitter",
    url: "https://twitter.com/",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/",
  },
];
