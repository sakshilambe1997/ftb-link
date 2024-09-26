import { useState ,useEffect } from 'react';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';
import React from 'react'
import "./MyLinks.css"
import LinkCard from '../../components/LinkCard/LinkCard';


function MyLinks() {
  const [links, setLinks] = useState([]);

  const fetchAllLinks = async () => {
    const responce = await axios.get(`${process.env.REACT_APP_API_URL}/links`);
    setLinks(responce.data.data);
    toast.success("All links fetched successfully!");
  };

  useEffect(() => {
    fetchAllLinks();
  }, []);

  return (
    <>
    
    <h1 className='text-align-center'>MyLinks</h1>
    
    <div className='my-links-container'>
    {links.map((link, i) => {
      const { title, slug, target, views, createdAt } = link;
      return (
       <LinkCard
       title={title}
       slug={slug}
       target={target}
       views={views}
       createdAt={createdAt}
       />
      );
    })}

</div>
    <Toaster/>
  </>
  )
}

export default MyLinks