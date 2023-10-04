import Footer from "components/Footer";
import Nav from "components/Nav";
import CSS from "csstype";
import { styled } from "styled-components";

const Root = styled.div`
  min-height: 100vh;
`;

export const WithAppbar = (Component: any, style: CSS.Properties) => {
  const hoc = (props: any) => {
    return (
      <Root style={style}>
        <Nav />
        <Component {...props} />
        <Footer />
      </Root>
    );
  };

  return hoc;
};
