import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DownloadIcon, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import CardContainer from "./card-container";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function AboutCard() {
    const data = {
        name: "Nasif Ahmed",
        title: "Software Developer",
        avatar_url: "https://avatars.githubusercontent.com/u/33228097",
        avatar_fallback: "NA",
        about_me:
            "I am a fullstack developer with expertise and interests in modern web, backend ,dev ops and ML/LLM technologies.",
    };
    return (
        <CardContainer>
            <div className="flex gap-8 justify-start items-center">
                <Avatar className="h-25 w-25">
                    <AvatarImage src={data.avatar_url} />
                    <AvatarFallback>{data.avatar_fallback}</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-xl">{data.name}</h1>
                    <h1 className="text-muted-foreground text-lg">
                        {data.title}
                    </h1>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-start mt-8">
                <h2 className="">About</h2>
                <p className="text-muted-foreground max-w-3xl">
                    {data.about_me}
                </p>
            </div>
            <Separator className="my-5" />
            <ul className="flex justify-center gap-6 items-center mt-8">
                <li>
                    <Link href={"https://github.com/nasifAhmed"}>
                        <Github className="hover:text-white cursor-pointer text-muted-foreground"></Github>
                    </Link>
                </li>
                <li>
                    <Link href={"https://www.linkedin.com/in/nasif2ahmed"}>
                        <Linkedin className="hover:text-white cursor-pointer  text-muted-foreground"></Linkedin>
                    </Link>
                </li>
                <li>
                    <Link href={"https://x.com/nasif2ahmed"}>
                        <Twitter className="hover:text-white cursor-pointer  text-muted-foreground"></Twitter>
                    </Link>
                </li>
                <li className="flex justify-center items-center gap-2">
                    <Button
                        variant={"secondary"}
                        className="hover:text-white cursor-pointer text-muted-foreground"
                    >
                        <DownloadIcon></DownloadIcon>
                        <span>Download Resume</span>
                    </Button>
                </li>
            </ul>
        </CardContainer>
    );
}

export default AboutCard;
