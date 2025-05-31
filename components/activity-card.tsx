import CardContainer from "./card-container";
import { getMovieData, MovieCard } from "./movie-card";
import { getBookData, BookCard } from "./book-card";

async function ActivityCard() {
    const [movieData, bookData] = await Promise.all([
        getMovieData(),
        getBookData(),
    ]);

    return (
        <CardContainer title="Activity">
            <div className="text-muted-foreground space-y-6">
                <div>
                    <h3 className="text-sm font-medium mb-3 text-foreground">
                        Last read book
                    </h3>
                    <BookCard bookData={bookData} />
                </div>
                <div>
                    <h3 className="text-sm font-medium mb-3 text-foreground">
                        Last watched movie
                    </h3>
                    <MovieCard movieData={movieData} />
                </div>
            </div>
        </CardContainer>
    );
}

export default ActivityCard;
