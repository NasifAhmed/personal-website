import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
    className?: string;
    title?: string;
    children: ReactNode;
};

function CardContainer({ className, title, children }: ContainerProps) {
    return (
        <div
            className={cn(
                "border px-0 p-8 w-full bg-card text-card-foreground rounded-xl shadow-xl",
                className
            )}
        >
            {title && <h1 className="mb-10">{title}</h1>}
            {children}
        </div>
    );
}

export default CardContainer;
