import {
  Container,
  Section1,
  SectionPart1,
  SectionPart2,
} from "./index.styled";
import Offers from "./components/Offers";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Container>
      <Section1>
        <SectionPart1>
          <Offers />
        </SectionPart1>
        <SectionPart2></SectionPart2>
      </Section1>
    </Container>
  );
};

export default Dashboard;
