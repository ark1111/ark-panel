import {
  Container,
  Section1,
  SectionPart1,
  SectionPart2,
} from "./index.styled";
import Offers from "./components/Offers";
import Events from "./components/events/Events";


type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Container>
      <Section1>
        <SectionPart1>
          <Offers />
        </SectionPart1>
        <SectionPart2>
          <Events />
        </SectionPart2>
      </Section1>
    </Container>
  );
};

export default Dashboard;
