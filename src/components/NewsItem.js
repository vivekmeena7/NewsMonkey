import React from "react";

const NewsItem = (props)=> {
  
    let { title, description, ImageUrl, NewsUrl ,author , date , Source} = props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:'0'}}>
          
         <span className=" badge rounded-pill bg-danger">{Source}</span>
        </div>
          <img
            src={
              !ImageUrl
                ? "https://images.hindustantimes.com/tech/img/2023/02/18/1600x900/APPLE-IPHONE-CHINA-3_1663438521234_1663438521234_1676733327089_1676733327089.JPG"
                : ImageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
              rel="noreferrer"
              href={NewsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
