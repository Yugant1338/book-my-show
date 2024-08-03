import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";
import axios from "axios";

const PlayPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`/movie/now_playing`);
                console.log(response.data.results); // Log the API response
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching data from TMDb:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 my-10">
                <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
                    <div className="w-full lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Movies in Chennai</h2>
                        <div className="flex flex-wrap">
                            {movies.map((movie) => (
                                <div key={movie.id} className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                    <Poster
                                        id={movie.id}
                                        poster_path={movie.poster_path}
                                        title={movie.title}
                                        isDark={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <PlayFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                        <PlayFilters title="Language" tags={["English", "Kannada", "Hindi", "Telugu"]} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DefaultLayoutHoc(PlayPage);
