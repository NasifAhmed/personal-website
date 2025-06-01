import Image from "next/image";
import Link from "next/link";

export type GithubData = {
    repo_name: string;
    repo_url: string;
    chart_svg: string;
};

export async function getGithubData(): Promise<GithubData> {
    try {
        const [repoResponse, chartResponse] = await Promise.all([
            fetch(
                "https://api.github.com/users/nasifahmed/repos?sort=updated&per_page=1"
            ),
            fetch("https://ghchart.rshah.org/nasifahmed"),
        ]);

        const data = await repoResponse.json();
        const repo = data[0];
        const repo_url = repo.html_url;
        const repo_name = repo.name;
        const chart_svg = await chartResponse.text();

        return {
            repo_name,
            repo_url,
            chart_svg,
        };
    } catch (error) {
        console.error("Failed to fetch github data:", error);
        return {
            repo_name: "",
            repo_url: "",
            chart_svg: "",
        };
    }
}

type GithubCardProps = {
    githubData?: GithubData;
};

export function GithubCard({ githubData }: GithubCardProps) {
    return (
        <div>
            {githubData?.chart_svg && (
                <Image
                    src={"https://ghchart.rshah.org/nasifahmed"}
                    alt="Github chart"
                    width={735}
                    height={112}
                    unoptimized={true}
                />
            )}
            {githubData?.repo_url && (
                <h3 className="text-sm font-medium mb-3 text-muted-foreground mt-2">
                    Currently working on{" "}
                    <span className="underline italic">
                        <Link href={githubData?.repo_url}>
                            {githubData?.repo_name}
                        </Link>
                    </span>
                </h3>
            )}
        </div>
    );
}
