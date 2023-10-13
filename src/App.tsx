import { DialogProvider } from "contexts/DialogContext";
import { StoreProvider } from "contexts/StoreContext";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "react-indiana-drag-scroll/dist/style.css";
import SneakerRoute from "routes/SneakerRoute";
import AboutRoute from "routes/AboutRoute";
import { CustomThemeProvider } from "contexts/CustomThemeContext";

const NewsPage = lazy(() => import("pages/NewsPage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const AboutMainPage = lazy(() => import("pages/AboutMainPage"));
const BenefitsPage = lazy(() => import("pages/BenefitsPage"));
const TeamsPage = lazy(() => import("pages/TeamsPage"));
const SneakerStart1Page = lazy(() => import("pages/SneakerStart1"));
const SneakerStart2Page = lazy(() => import("pages/SneakerStart2"));
const SneakerMoreInfoPage = lazy(() => import("pages/SneakerMoreInfo"));
const SneakerGalleryPage = lazy(() => import("pages/SneakerGalleryPage"));
const SneakerDescPage = lazy(() => import("pages/SneakerDescPage"));
const MintPage = lazy(() => import("pages/MintPage"));

function App() {
  return (
    <CustomThemeProvider>
      <StoreProvider>
        <DialogProvider>
          <Suspense fallback={<div>not found</div>}>
            <Routes>
              <Route path="" element={<NewsPage />} />
              <Route path="/about" element={<AboutRoute />}>
                <Route path="" element={<AboutPage />} />
                <Route path="main" element={<AboutMainPage />} />
                <Route path="benefits" element={<BenefitsPage />} />
                <Route path="team" element={<TeamsPage />} />
              </Route>
              <Route path="/sneaker" element={<SneakerRoute />}>
                <Route path="" element={<SneakerStart1Page />} />
                <Route path="intro" element={<SneakerStart2Page />} />
                <Route path="more" element={<SneakerMoreInfoPage />} />
                <Route path="gallery" element={<SneakerGalleryPage />} />
                <Route path="desc" element={<SneakerDescPage />} />
              </Route>
              <Route path="/mint">
                <Route path="" element={<MintPage />} />
              </Route>
            </Routes>
          </Suspense>
        </DialogProvider>
      </StoreProvider>
    </CustomThemeProvider>
  );
}

export default App;
