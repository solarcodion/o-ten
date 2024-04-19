import { styled } from "styled-components";
import { device } from "utils/device";
import { useState } from "react";
import Timeline from "components/Timeline/Timeline";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${(props) => props.theme.colors.bg};
  @media ${device.tablet} {
    padding: 94px 0;
    overflow: auto;
  }
  @media ${device.mobile} {
    padding: 94px 0;
    overflow: auto;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  height: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: -webkit-fill-available;
  }
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media ${device.mobile} {
    width: 100%;
    height: unset;
  }
`;
const Roadmap = () => {
  const [selected, setSelected] = useState<number | string>(1);
  return (
    <Root className="full">
      <Container>
        <TabContainer>
          <Timeline
            data={MOCK}
            selected={selected}
            onTabChange={(id) => setSelected(id)}
          />
        </TabContainer>
      </Container>
    </Root>
  );
};

export default Roadmap;

const MOCK = [
  { id: 1, label: "Q2", year: 23, texts: ["design & concept development"] },
  {
    id: 2,
    label: "Q3",
    year: 23,
    texts: [
      "1st seed fundraising",
      "expanding team",
      "project planning",
      "first prototypes",
    ],
  },
  {
    id: 3,
    label: "Q4",
    year: 23,
    texts: [
      "raise public awareness",
      "community building",
      "app development",
      "2nd seed fundraising",
      "ONYX @ Sneakercon",
    ],
  },
  { id: 4, label: "Q1", year: 24, texts: ["design & concept development"] },
  { id: 11, label: "Q2", year: 23, texts: ["design & concept development"] },
  {
    id: 12,
    label: "Q3",
    year: 23,
    texts: [
      "1st seed fundraising",
      "expanding team",
      "project planning",
      "first prototypes",
    ],
  },
  {
    id: 13,
    label: "Q4",
    year: 23,
    texts: [
      "raise public awareness",
      "community building",
      "app development",
      "2nd seed fundraising",
      "ONYX @ Sneakercon",
    ],
  },
  { id: 14, label: "Q1", year: 24, texts: ["design & concept development"] },
];
