import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
    className?: string;
    children: ReactNode;
};

function ColumnContainer({ className, children }: ContainerProps) {
    return (
        <div
            className={cn(
                "flex flex-col w-full grow gap-5 xl:gap-10 xl:items-center",
                className
            )}
        >
            {children}
        </div>
    );
}

export default ColumnContainer;
