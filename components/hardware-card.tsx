import {
    Cpu,
    Gpu,
    MemoryStick,
    Monitor,
    Router,
    Smartphone,
    Zap,
} from "lucide-react";
import CardContainer from "./card-container";

function HardwareCard() {
    return (
        <CardContainer title="Hardware Stack">
            <div className="space-y-6">
                {/* PC Section */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Monitor className="w-5 h-5 " />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">PC</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">
                                    AMD Ryzen 5 2600
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MemoryStick className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">
                                    16GB RAM
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Gpu className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">
                                    NVIDIA Geforce GT710
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">
                                    Debian 12
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phone Section */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Phone</h3>
                        <div className="space-y-1 text-sm">
                            <div className="text-muted-foreground">
                                Google Pixel 2 XL
                            </div>
                            <div className="text-muted-foreground">
                                ROM : Pixeilbuilds Infinity
                            </div>
                            <div className="text-muted-foreground">
                                OS : Android 14
                            </div>
                        </div>
                    </div>
                </div>

                {/* Router Section */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <Router className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Router</h3>
                        <div className="space-y-1 text-sm">
                            <div className="text-muted-foreground">
                                Model : Cudy WR3000S
                            </div>
                            <div className="text-muted-foreground">
                                OS : OpenWrt 24.10
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
}

export default HardwareCard;
