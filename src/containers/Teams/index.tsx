import { PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import memberImg from "assets/images/team-placeholder.jpg";
import MemberCard from "./MemberCard";
import useStore from "hooks/useStore";
import { Carousel } from "components/Carousel";
import { useCallback, useState } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";

const Root = styled.div`
  padding: 130px 0 130px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media ${device.tablet} {
    padding: 94px 58px;
    height: 100vh;
  }
  @media ${device.mobile} {
    padding: 94px 28px;
  }
`;

const Container = styled.div`
  display: inline-flex;
  margin-top: 60px;
  margin-right: 60px;
  gap: 14px;
`;

const SliderContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 50px;
  width: 100%;
  @media ${device.mobile} {
    margin-top: 40px;
  }
  @media ${device.mobileS} {
    width: 100%;
  }

  & .carousel__slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledText = styled(Text)`
  max-width: 380px;
  margin-top: 60px;
  @media ${device.mobile} {
    margin-top: 30px;
  }
`;

const RightGradient = styled.div`
  width: 180px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(
    89deg,
    rgba(0, 0, 0, 0.01) 25%,
    rgba(0, 0, 0, 0.8) 75%
  );

  @media ${device.tablet} {
    display: none;
  }
`;

const Teams = () => {
  const { store } = useStore();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCarousel = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <Root className="full">
      <PageTitle>Our Team</PageTitle>
      <StyledText>
        We are a curated team of industry professionals united by the single
        goal to create an unconventional fashion brand that speciallizes in
        high-qality sneakers with a twist.
      </StyledText>
      {store.isTablet ? (
        <SliderContainer>
          <Carousel
            selectedIndex={selectedIndex}
            onClick={handleCarousel}
            arrows
            childStyle={{
              minWidth: "100%",
            }}
            option={{}}
          >
            {new Array(8).fill(1).map((v, i) => {
              return (
                <MemberCard
                  key={`member-carousel-${i}`}
                  img={memberImg}
                  name="Peter Aberdeen"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  twitterUrl="https://twitter.com"
                  facebookUrl="https://facebook.com"
                  instagramUrl="https://instagram.com"
                  linkedInUrl="https://linkedin.com"
                  role="Founder / CEO"
                />
              );
            })}
          </Carousel>
        </SliderContainer>
      ) : (
        <ScrollContainer style={{ width: "100%" }}>
          <Container>
            {new Array(8).fill(1).map((v, i) => {
              return (
                <MemberCard
                  key={`member-${i}`}
                  img={memberImg}
                  name="Peter Aberdeen"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  twitterUrl="https://twitter.com"
                  facebookUrl="https://facebook.com"
                  instagramUrl="https://instagram.com"
                  linkedInUrl="https://linkedin.com"
                  role="Founder / CEO"
                />
              );
            })}
          </Container>
          <RightGradient />
        </ScrollContainer>
      )}
    </Root>
  );
};

export default Teams;
