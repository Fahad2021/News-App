import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7f047f1e573c4948ac28be50575a36a6&page=1pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults })
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f047f1e573c4948ac28be50575a36a6&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
    handleNextClick = async () => {
        console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f047f1e573c4948ac28be50575a36a6&page=$
                {this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json()
            console.log(parseData);
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }
    }


    render() {
        return (
            <div className='container my-3'>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.id}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;