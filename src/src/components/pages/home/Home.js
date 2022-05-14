import React, { Fragment, useContext, useEffect } from "react";
import SearchBox from "./SearchBox";
import Results from "./Results";
import Header from "../../layout/Header";
import SearchContext from "../../../context/search/searchContext";
import "./Home.css";

const Home = ({ user, Logout }) => {
    const searchContext = useContext(SearchContext);
    const { GetCategories, SearchData, categories, results } = searchContext;

    useEffect(() => {
        GetCategories();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Header Logout={Logout} user={user} />
            <div className="home-container">
                <SearchBox
                    user={user}
                    categories={categories}
                    SearchData={SearchData}
                />
                {results.length > 0 && <Results data={results} />}
            </div>
        </Fragment>
    );
};

export default Home;
