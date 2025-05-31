import { Code2, Database, Globe, Wrench } from "lucide-react";
import CardContainer from "./card-container";

function TechCard() {
    return (
        <CardContainer title="Tech Stack">
            <div className="space-y-6">
                {/* Languages Section */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                            Languages
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 rounded-md">
                                JavaScript
                            </span>
                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-md">
                                TypeScript
                            </span>
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-md">
                                Python
                            </span>
                            <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/20 text-cyan-800 dark:text-cyan-300 rounded-md">
                                Go
                            </span>
                        </div>
                    </div>
                </div>

                {/* Frameworks Section */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                            Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/20 text-cyan-800 dark:text-cyan-300 rounded-md">
                                React
                            </span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600/20 text-gray-800 dark:text-gray-300 rounded-md">
                                Next.js
                            </span>
                        </div>
                    </div>
                </div>

                {/* Databases Section */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                            Databases
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-md">
                                PostgreSQL
                            </span>
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-md">
                                MongoDB
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tools & Technologies Section */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                        <Wrench className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                            Tools & Technologies
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="flex flex-wrap gap-2 text-sm">
                                    <span className="px-2 py-1 bg-blue-blue-100 dark:bg-blue-900/20 text-gray-800 dark:text-gray-300 rounded-md">
                                        Docker
                                    </span>
                                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 rounded-md">
                                        Linux
                                    </span>
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-md">
                                        Bash
                                    </span>
                                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded-md">
                                        Git
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
}

export default TechCard;
