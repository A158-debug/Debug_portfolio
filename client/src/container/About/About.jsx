import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Resume from "../../assets/Resume.pdf";
import { MdContentCopy } from "react-icons/md";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import {CopyToClipboard} from 'react-copy-to-clipboard';



const About = () => {
  const [abouts, setAbouts] = useState([]);
  
  // const handleIconClick = ({link}) => {
  //   copy(link);
  // };
  const GithubLink = "https://github.com/A158-debug";
  const LinkedinLink = "https://www.linkedin.com/in/abhishek-kumar-929a17200/"
  const ResumeLink = "https://drive.google.com/file/d/1aQpl69guwDxZK-mKMcEGr57b2_if9JIU/view?usp=sharing"

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__footer-card ">
        <div>
          <a href={Resume} className="p-text" target="_blank" rel="noreferrer">
            Resume <FaDownload />
          </a>
          <CopyToClipboard text={ResumeLink} style={{cursor: "pointer"}}>
          <MdContentCopy size={20}/>
        </CopyToClipboard>
        </div>
        <div>
          <a href={Resume} className="p-text" target="_blank" rel="noreferrer">
            Linkedin <FiExternalLink />
          </a>
          <CopyToClipboard text={LinkedinLink} style={{cursor: "pointer"}}>
          <MdContentCopy size={20}/>
        </CopyToClipboard>
        </div>
        <div>
          <a href={Resume} className="p-text" target="_blank" rel="noreferrer">
            Github <FiExternalLink />
          </a>
          <CopyToClipboard text={GithubLink} style={{cursor: "pointer"}}>
          <MdContentCopy size={20}/>
        </CopyToClipboard>
        </div>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <div className="app__profile_text" style={{ padding: "10px" }}>
              <h2 className="bold-text">{about.title}</h2>
              <p className="desc-text">{about.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
