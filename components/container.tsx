import React, { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

function Container({ children }: ContainerProps) {
    // Masonary layout with order. Divided in two columns
    // Layout like this :
    // 1    2
    // 3    4
    // 5    6
    const items = React.Children.toArray(children);
    const leftColumn = items.filter((_, i) => i % 2 === 0);
    const rightColumn = items.filter((_, i) => i % 2 === 1);
    return (
        <div className="flex flex-col xl:flex-row w-full gap-5 xl:gap-8 justify-center items-start">
            {/* For mobile screens single column */}
            <div className="flex-1 space-y-4 xl:hidden">{items}</div>
            {/* For xl screens double column */}
            <div className="hidden xl:block flex-1 space-y-8">{leftColumn}</div>
            <div className="hidden xl:block flex-1 space-y-8">
                {rightColumn}
            </div>
        </div>
    );
}

export default Container;
