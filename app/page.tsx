import AboutCard from "@/components/about-card";
import ActivityCard from "@/components/activity-card";
import ColumnContainer from "@/components/column-container";
import ConsumingCard from "@/components/consuming-card";
import Container from "@/components/container";
import Footer from "@/components/footer";
import HardwareCard from "@/components/hardware-card";
import TechCard from "@/components/tech-card";
import TestCard from "@/components/test-card";

export default function Home() {
    return (
        <>
            <Container>
                <AboutCard></AboutCard>
                <ActivityCard />
                <ConsumingCard />
                <TechCard />
                <HardwareCard />
            </Container>
            <Footer />
        </>
    );
}
