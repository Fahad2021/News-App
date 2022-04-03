import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        let {title,description,imgUrl,newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div class="card" style={{width: "18rem"}}>
                    <img src={!imgUrl?"https://images.hindustantimes.com/img/2022/04/03/550x309/meteor_shower_chinese_rocket_maharashtra_mp_gujara_1648945103218_1648945103379.png":imgUrl} className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            <a href={newsUrl} target="_blank" class="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;