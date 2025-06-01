import AboutCard from "@/components/about-card";
import ActivityCard from "@/components/activity-card";
import ColumnContainer from "@/components/column-container";
import ConsumingCard from "@/components/consuming-card";
import Container from "@/components/container";
import HardwareCard from "@/components/hardware-card";
import TechCard from "@/components/tech-card";

export default function Home() {
    return (
        <Container>
            <ColumnContainer>
                <AboutCard></AboutCard>
                <TechCard />
                <HardwareCard />
            </ColumnContainer>
            <ColumnContainer>
                <ActivityCard />
                <ConsumingCard />
            </ColumnContainer>
        </Container>
    );
}
