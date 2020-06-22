//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
//import PostHeader from  "./PostHeader";
import dummyData from "../../dummy-data.js";
//import LikeSection from "./LikeSection";
//import CommentSectionContainer from "../CommentSection/CommentSectionContainer.js";
// import data 
//src\components\PostsContainer\PostsPage.js

const PostsPage = () => {
  const [props] = useState(dummyData);
  console.log("this is data from postspage", props);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {props.map(i=> (
        <Post key={i.imageUrl} post ={i} />
      ))}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};


export default PostsPage;
