import {
  Container,
  InfoCards,
  InfoCardsItem,
  Section1,
  SectionPart1,
  SectionPart2,
} from "./index.styled";
import Offers from "./components/Offers";
import Events from "./components/events/Events";
import InfoCard from "./components/info card/InfoCard";
import { useTranslate } from "../../locals/useTranslate";
import Analytics from "./components/analytics/Analytics";

type Props = {};

const Dashboard = (props: Props) => {
  const { language } = useTranslate();
  return (
    <Container>
      <Section1>
        <SectionPart1>
          <Offers />
          <InfoCards>
            <InfoCardsItem>
              <InfoCard
                title="total_incom"
                amount={language === "fa" ? 7778880000 : 2509646670.0}
                unit={language === "fa" ? "toman" : "$"}
                percent={10}
              />
            </InfoCardsItem>
            <InfoCardsItem>
              <InfoCard
                title="total_expense"
                amount={language === "fa" ? -3678000000 : -1809645550.0}
                unit={language === "fa" ? "toman" : "$"}
                percent={37}
              />
            </InfoCardsItem>
          </InfoCards>
        </SectionPart1>
        <SectionPart2>
          <Events />
          <Analytics/>
        </SectionPart2>
      </Section1>
    </Container>
  );
};

export default Dashboard;
