import Footer from "components/Footer";
import Nav from "components/Nav";
import CSS from "csstype";
import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Root = styled.div`
  min-height: 100vh;
`;

export const WithAppbar = (Component: any, style?: CSS.Properties) => {
  const hoc = (props: any) => {
    return (
      <Root style={style}>
        <Nav />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Component {...props} />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </Root>
    );
  };

  return hoc;
};
