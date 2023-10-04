import theme from "components/theme";
import { DialogProvider } from "contexts/DialogContext";
import { StoreProvider } from "contexts/StoreContext";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const NewsPage = lazy(() => import("pages/NewsPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <DialogProvider>
          <Routes>
            <Route path="" element={<NewsPage />} />
          </Routes>
        </DialogProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
