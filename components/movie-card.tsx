import Image from "next/image";
import Link from "next/link";
import { parseStringPromise } from "xml2js";

export interface MovieData {
    title: string;
    year: string;
    rating: string;
    link: string;
    date: string;
    poster: string | null;
}

export async function getMovieData(): Promise<MovieData> {
    try {
        // Fetch and parse Letterboxd RSS
        const xml = await fetch("https://letterboxd.com/nasif/rss/", {
            next: { revalidate: 300 },
        }).then((r) => r.text());

        const {
            rss: { channel },
        } = await parseStringPromise(xml);
        const latestMovie = channel[0].item[0] ?? null;

        let poster: string | null = null;
        let title: string = "No recent movie";
        let year: string = "";
        let rating: string = "";

        if (latestMovie) {
            // Extract poster from description HTML
            const html = latestMovie.description?.[0] ?? "";
            const match = html.match(/<img[^>]+src="([^">]+)"/);
            poster = match ? match[1] : null;

            // Parse title format: "Movie Title, Year - Rating"
            const titleString = latestMovie?.title?.[0] || "";
            const [left, ratingPart] = titleString.split(" - ");
            const [titlePart, yearPart] = left?.split(", ") || ["", ""];

            title = titlePart || "No recent movie";
            year = yearPart || "";
            rating = ratingPart || "";
        }

        return {
            title,
            year,
            rating,
            link: latestMovie?.link?.[0] || "#",
            date: latestMovie?.pubDate?.[0] || new Date().toISOString(),
            poster,
        };
    } catch (error) {
        console.error("Failed to fetch movie data:", error);
        return {
            title: "Failed to load movie data",
            year: "",
            rating: "",
            link: "#",
            date: new Date().toISOString(),
            poster: null,
        };
    }
}

interface MovieCardProps {
    movieData: MovieData;
}

export function MovieCard({ movieData }: MovieCardProps) {
    return (
        <div className="flex justify-start items-start gap-4">
            {movieData.poster && (
                <Image
                    src={movieData.poster}
                    alt="Movie poster"
                    width={80}
                    height={120}
                    className="rounded-md object-cover"
                />
            )}
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    {movieData.rating && (
                        <span className=" text-yellow-500">
                            {movieData.rating}
                        </span>
                    )}
                </div>
                <h3 className="font-medium mb-1">
                    <Link
                        href={movieData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        {movieData.title}
                    </Link>
                </h3>
                {movieData.year && (
                    <p className="text-sm text-muted-foreground mb-2">
                        {movieData.year}
                    </p>
                )}
                <p className="text-xs text-muted-foreground">
                    Watched on {new Date(movieData.date).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
