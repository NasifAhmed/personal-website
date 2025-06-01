import { Separator } from "./ui/separator";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Separator className="mt-10" />
            <footer className="text-center space-y-1 mt-5">
                <p className="text-sm text-muted-foreground">
                    © {currentYear} Nasif Ahmed. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground">
                    Built with Next.js and TypeScript
                </p>
            </footer>
        </>
    );
}
