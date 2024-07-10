import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropsTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResult] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
        
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ab4b1330ed84621b7d380cc7c7ecb34&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(parseData.articles);
        setTotalResult(parseData.totalResults);
        setLoading(false);        
    }

    useEffect(()=>{
        document.title = `${capitalizeFirstLetter(props.category)} - News Monkey Top Headline App`;
        updateNews();
    }, []);    

    // const handlePrevClick = async () => {
    //     setPage(page-1);
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page+1);
    //     updateNews();
    // }
    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ab4b1330ed84621b7d380cc7c7ecb34&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(articles.concat(parseData.articles));
        setTotalResult(parseData.totalResults);
    };
    return (<>
        <div className="container">
            <h3 className="my-3 text-center">News Monkey - Top Headlines Key</h3>
            {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4 gy-3" key={element.url}>
                                    <NewsItem urlToImage={element.urlToImage} title={element.title} description={element.description}
                                        author={element.author} date={element.publishedAt} url={element.url} />
                                </div>
                            )
                        })}
                    </div>
                    </div>                        
                </InfiniteScroll>
            {/* <div className="d-flex justify-content-between my-3">
                <div>
                    <button className="btn-sm btn btn-dark" type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Prev</button>
                </div>
                <div>
                    <button className="btn-sm btn btn-dark" type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div> */}
        </div>
    </>)
}
News.defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
}
News.propsTypes = {
    country: PropsTypes.string,
    category: PropsTypes.string,
    pageSize: PropsTypes.number
}
export default News;