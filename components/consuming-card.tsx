import { BookCard, getBookData } from "./book-card";
import CardContainer from "./card-container";
import { getMovieData, MovieCard } from "./movie-card";

async function ConsumingCard() {
    const [movieData, bookData] = await Promise.all([
        getMovieData(),
        getBookData(),
    ]);

    return (
        <CardContainer title="Consuming">
            <div className="text-muted-foreground space-y-6">
                <div>
                    <h3 className="font-medium mb-3 text-foreground">
                        Last read book
                    </h3>
                    <BookCard bookData={bookData} />
                </div>
                <div>
                    <h3 className="font-medium mb-3 text-foreground">
                        Last watched movie
                    </h3>
                    <MovieCard movieData={movieData} />
                </div>
            </div>
        </CardContainer>
    );
}

export default ConsumingCard;
