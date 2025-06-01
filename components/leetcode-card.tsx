import Image from "next/image";

export default function LeetcodeCard() {
    return (
        <div>
            <Image
                src={
                    "https://leetcard.jacoblin.cool/ReraltOfGivia?theme=dark&font=JetBrains%20Mono&ext=activity"
                }
                alt="Github chart"
                width={500}
                height={500}
                unoptimized={true}
            />
        </div>
    );
}
