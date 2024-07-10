import React from "react";

const NewsItem =(props)=> { 
    let { title, description, urlToImage, url, author, date } = props;
    return (<>
        <div className="card">
            <img src={!urlToImage?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OW7BAUKZEFZRHJ7QSAF67NWFZU_size-normalized.jpg":urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <small className="text-muted">By <strong>{author?author:"Unknown"}</strong> on <strong>{new Date(date).toGMTString()}</strong>
                    </small>
                </p>
                <div className="text-end">
                    <a href={url} className="btn btn-sm btn-dark" target="_blank">Read More</a>
                </div>                    
            </div>
        </div>
    </>)
}
export default NewsItem;