import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spnnier from './Spnnier';
import PropTypes from 'prop-types'

class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }



    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f047f1e573c4948ac28be50575a36a6&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f047f1e573c4948ac28be50575a36a6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ page: this.state.page - 1,
             articles: parseData.articles,
             loading: false
             })
        }
    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f047f1e573c4948ac28be50575a36a6&page=${this.state.page + 1}&pageSize=$
            {this.props.pageSize}`;
                this.setState({ loading: true });
                let data = await fetch(url);
                let parseData = await data.json()
                this.setState({ page: this.state.page + 1,
                     articles: parseData.articles,
                     loading: false 
                })
       }    
        
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{margin:'35px 0px'}}>News24-Top News</h1>
                {this.state.loading && <Spnnier />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.id}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-success" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-danger" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;