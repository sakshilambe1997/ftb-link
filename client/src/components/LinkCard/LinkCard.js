
import "./LinkCard.css"

function LinkCard({title,slug,target,views,createdAt}) {

  const shortUrl =`${process.env.REACT_APP_API_URL}/${slug}`
  return (
    <div className="link-card">
        <h3 className="link-card-title">{title || "No Title"}</h3>

        <a href={shortUrl}
        target="_blank" 
        className="link-card-short-url">
         <span className="link-key">Short URL: </span>

       {shortUrl} 

       </a>
        
        <a href={target} 
        target="_blank"
        className="link-card-target u-none">
         <span className="link-key"> Target URL: </span>
          {target.substring(0,50)}{target.length>50 ? "...":null}
         </a>
         
      <span className=" link-card-views">
        {views}</span>

        <span className="link-card-view-text">
          {views > 0 ? `${views} people visited to this link `: `Share this link to see view count`} 
         </span>
        
        <span className="link-card-date" > 
           {new Date(createdAt).toLocaleString()}</span>
       
    </div>
  )
}

export default LinkCard