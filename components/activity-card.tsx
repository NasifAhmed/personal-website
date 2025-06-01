import CardContainer from "./card-container";
import { getGithubData, GithubCard } from "./github-card";
import LeetcodeCard from "./leetcode-card";

async function ActivityCard() {
    const [githubData] = await Promise.all([getGithubData()]);

    return (
        <CardContainer title="Activity">
            <div className="text-muted-foreground space-y-6">
                <div>
                    <h3 className="font-medium mb-3 text-foreground">
                        Github Activity
                    </h3>
                    <GithubCard githubData={githubData} />
                </div>
                <div>
                    <h3 className="font-medium mb-3 text-foreground">
                        Leetcode Activity
                    </h3>
                    <LeetcodeCard />
                </div>
            </div>
        </CardContainer>
    );
}

export default ActivityCard;
