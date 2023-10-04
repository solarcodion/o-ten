import { WithAppbar } from "layouts/WithAppbar";
import { styled } from "styled-components";
import img1 from "assets/images/placeholder-woman-w-sneakers.jpg";
import img2 from "assets/images/placeholder-group.jpg";
import img3 from "assets/images/placeholder-shoe-casasport.jpg";
import img4 from "assets/images/placeholder-shoes-dior.jpg";
import YellowPane from "components/YellowPane";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  flex-direction: column;
`;

const Gallery = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  flex-grow: 1;

  .gallery-1 {
    grid-area: 1 / 1 / span 2 / span 2;
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
  }

  .gallery-2 {
    grid-area: 1 / 3 / span 1 / span 2;
    background-image: url(${img2});
    background-size: cover;
    background-position: center;
  }

  .gallery-3 {
    grid-area: 2 / 3 / span 1 / span 1;
    background-image: url(${img3});
    background-size: cover;
    background-position: center;
  }

  .gallery-4 {
    grid-area: 2 / 4 / span 1 / span 1;
    background-image: url(${img4});
    background-size: cover;
    background-position: center;
  }
`;

const GridRow = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 14px;
  min-height: 90px;
`;

const StyledYellowPane = styled(YellowPane)`
  text-transform: uppercase;
  font-weight: 500;
`;

const NewsBadge = styled(YellowPane)`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  left: 34px;
  top: 34px;
  padding: 10px 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const NewsPage = () => {
  return (
    <Root className="full">
      <Container>
        <NewsBadge>Latest news</NewsBadge>
        <Gallery>
          <div className="gallery-1"></div>
          <div className="gallery-2"></div>
          <div className="gallery-3"></div>
          <div className="gallery-4"></div>
        </Gallery>
        <GridRow>
          <StyledYellowPane>
            TIME UNTIL MINT: 100 : 20 : 18 : 42
          </StyledYellowPane>
          <StyledYellowPane>An ethereum-based project</StyledYellowPane>
          <StyledYellowPane>Older news articles</StyledYellowPane>
        </GridRow>
      </Container>
    </Root>
  );
};

export default WithAppbar(NewsPage);
