import { useEffect, useState } from "react";
import api from "../../services/api.js";
import { Link } from "react-router-dom"; 
import "./home.css";

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadFilmes(page);
    }, []);

    async function loadFilmes(pageNumber) {
        const response = await api.get("movie/now_playing", {
            params: {
                api_key: "07ceb7f5b400a434ed626dca93ac4d72",
                language: "pt-BR",
                page: pageNumber,
            }
        });

        setFilmes((prevFilmes) => [...prevFilmes, ...response.data.results.slice(0, 10)]);
        setLoading(false);
    }

    function loadMoreMovies() {
        const nextPage = page + 1;
        setPage(nextPage);
        loadFilmes(nextPage);
    }

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => (
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
            <div className="load-more">
                <button onClick={loadMoreMovies}>Carregar mais</button>
            </div>
        </div>
    );
}

export default Home;