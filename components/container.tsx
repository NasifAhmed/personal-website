import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

function Container({ children }: ContainerProps) {
    return (
        <div className="flex flex-col xl:flex-row w-full gap-5 xl:gap-10 justify-center items-start">
            {children}
        </div>
    );
}

export default Container;
