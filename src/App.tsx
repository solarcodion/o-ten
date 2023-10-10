import theme from "components/theme";
import { DialogProvider } from "contexts/DialogContext";
import { StoreProvider } from "contexts/StoreContext";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const NewsPage = lazy(() => import("pages/NewsPage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const AboutMainPage = lazy(() => import("pages/AboutMainPage"));
const BenefitsPage = lazy(() => import("pages/BenefitsPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <DialogProvider>
          <Suspense fallback={<div>not found</div>}>
            <Routes>
              <Route path="" element={<NewsPage />} />
              <Route path="/about">
                <Route path="" element={<AboutPage />} />
                <Route path="main" element={<AboutMainPage />} />
                <Route path="benefits" element={<BenefitsPage />} />
              </Route>
            </Routes>
          </Suspense>
        </DialogProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
