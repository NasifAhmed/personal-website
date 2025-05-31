import Image from "next/image";
import Link from "next/link";
import { parseStringPromise } from "xml2js";

export interface BookData {
    title: string;
    author: string;
    link: string;
    date: string;
    rating?: string;
    cover?: string;
}

export async function getBookData(): Promise<BookData> {
    try {
        // Fetch and parse Goodreads RSS
        const xml = await fetch(
            "https://www.goodreads.com/review/list_rss/132603414-nasif?shelf=read",
            { next: { revalidate: 300 } }
        ).then((r) => r.text());

        const {
            rss: { channel },
        } = await parseStringPromise(xml);
        const latestBook = channel[0].item[0] ?? null;

        let title = "No recent book";
        let author = "Unknown author";
        let rating = "";
        let cover = "";

        if (latestBook) {
            const titleString = latestBook?.title?.[0] || "";
            const html = latestBook.description?.[0] ?? "";

            // Enhanced parsing strategy

            // 1. Try to parse title and author from the title string first
            if (titleString.includes(" by ")) {
                const parts = titleString.split(" by ");
                title = parts[0].trim();
                author = parts.slice(1).join(" by ").trim(); // Handle multiple "by"s
            } else {
                title = titleString || "No recent book";

                // 2. Extract author from HTML description with multiple fallback patterns
                const authorPatterns = [
                    // Pattern 1: Standard Goodreads author link
                    /by\s*<a[^>]+href="[^"]*\/author\/show\/[^"]*"[^>]*>([^<]+)<\/a>/i,
                    // Pattern 2: Simple "by Author" text
                    /by\s+([A-Z][A-Za-z\s\.,''-]+?)(?:\s*<|$|\n|\.|\()/i,
                    // Pattern 3: Author name in quotes or emphasis
                    /author[:\s]*["']?([A-Z][A-Za-z\s\.,''-]+?)["']?(?:\s*<|$|\n|\.)/i,
                    // Pattern 4: Any link that might be author
                    /<a[^>]+href="[^"]*author[^"]*"[^>]*>([^<]+)<\/a>/i,
                    // Pattern 5: Look for capitalized names after common words
                    /(?:written|authored|created)\s+by\s+([A-Z][A-Za-z\s\.,''-]+?)(?:\s*<|$|\n|\.)/i,
                ];

                for (const pattern of authorPatterns) {
                    const match = html.match(pattern);
                    if (match && match[1] && match[1].trim().length > 2) {
                        author = match[1].trim();
                        // Clean up common artifacts
                        author = author.replace(
                            /\s+(rated|gave|review|on|the).*$/i,
                            ""
                        );
                        author = author.replace(/[.,]+$/, ""); // Remove trailing punctuation
                        if (author.length > 2 && author !== title) {
                            break;
                        }
                    }
                }
            }

            // 3. Extract rating with comprehensive patterns
            const ratingPatterns = [
                // Standard Goodreads patterns
                /(?:rated|gave)\s+(?:it\s+)?(\d+)\s+(?:out\s+of\s+5\s+)?stars?/i,
                /(\d+)\s+of\s+5\s+stars?/i,
                /(\d+)\s*\/\s*5\s*stars?/i,
                /my\s+rating[:\s]*(\d+)/i,
                /rating[:\s]*(\d+)/i,
                // Star symbols
                /(★{1,5})/g,
                // Numbers followed by stars
                /(\d+)\s*stars?/i,
                // Rating in various formats
                /score[:\s]*(\d+)/i,
            ];

            for (const pattern of ratingPatterns) {
                const match = html.match(pattern);
                if (match) {
                    if (match[1] && match[1].includes("★")) {
                        rating = match[1];
                        break;
                    } else if (match[1]) {
                        const stars = parseInt(match[1]);
                        if (stars >= 1 && stars <= 5) {
                            rating = "★".repeat(stars) + "☆".repeat(5 - stars);
                            break;
                        }
                    }
                }
            }

            // 4. Clean up HTML entities
            title = title
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"');
            author = author
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"');

            // 5. Extract and convert cover image
            const coverMatch = html.match(/<img[^>]+src="([^">]+)"/);
            if (coverMatch && coverMatch[1]) {
                const originalUrl = coverMatch[1];
                const urlMatch = originalUrl.match(
                    /\/books\/(\d+)[li]\/(\d+)\./
                );

                if (urlMatch) {
                    const imageId = urlMatch[1];
                    const bookId = urlMatch[2];
                    cover = `https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${imageId}i/${bookId}.jpg`;
                } else {
                    cover = originalUrl;
                }
            }
        }

        return {
            title,
            author,
            rating,
            cover,
            link: latestBook?.link?.[0] || "#",
            date: latestBook?.pubDate?.[0] || new Date().toISOString(),
        };
    } catch (error) {
        console.error("Failed to fetch book data:", error);
        return {
            title: "Failed to load book data",
            author: "Unknown",
            link: "#",
            date: new Date().toISOString(),
        };
    }
}

interface BookCardProps {
    bookData: BookData;
}

export function BookCard({ bookData }: BookCardProps) {
    return (
        <div className="flex justify-start items-start gap-4">
            {bookData.cover && (
                <Image
                    src={bookData.cover}
                    alt="Book cover"
                    width={80}
                    height={120}
                    className="rounded-md object-cover shadow-md"
                />
            )}
            <div className="flex-1">
                {bookData.rating && (
                    <div className="mb-1">
                        <span className="text-yellow-500 text-sm">
                            {bookData.rating}
                        </span>
                    </div>
                )}
                <h3 className="font-medium mb-1">
                    <Link
                        href={bookData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        {bookData.title}
                    </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                    by {bookData.author}
                </p>
                <p className="text-xs text-muted-foreground">
                    Read on {new Date(bookData.date).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
