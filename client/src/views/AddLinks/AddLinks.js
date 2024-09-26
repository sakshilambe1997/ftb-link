import React, { useState } from "react";
import "./AddLinks.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


function AddLinks() {
  const [linkData, setLinkData] = useState({
    title: "",
    target: "",
    slug: "",
  });

  const shortenURL = async () => {
    const responce = await axios.post(
      `${process.env.REACT_APP_API_URL}/link`,
      linkData
    );

    if (responce.data.success) {
      toast.success("Link shortend Successfully!");
      setLinkData({
        title: "",
        target: "",
        slug: "",
      });
    } else {
      toast.error(responce.data.message);
    }
  };

  return (
    <div>
      <h1>Shorten your links in seconds.</h1>
      <p>Dont waste time typing long URLs.</p>

      <div className="links-main-container">
        <form className="link-form">
          <input
            type="text"
            placeholder="Title"
            value={linkData.title}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                title: e.target.value,
              });
            }}
            className="link-input"
          />

          <input
            type="email"
            placeholder="Target"
            value={linkData.target}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                target: e.target.value,
              });
            }}
            className="link-input"
          />

          <input
            type="text"
            placeholder="Slug"
            value={linkData.slug}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                slug: e.target.value,
              });
            }}
            className="link-input"
          />
          <button type="button" className="link-button" onClick={shortenURL}>
            Shorten
          </button>
        </form>

      </div>
      <Toaster />
    </div>
  );
}

export default AddLinks;
