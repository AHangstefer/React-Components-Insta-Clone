/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
/* import the PostsPage and SearchBar and add them to the App */
import LikeSection from "./components/PostsContainer/LikeSection";
//import Post from "./components/PostsContainer/Post";
import PostHeader from "./components/PostsContainer/PostHeader";
import PostsPage from "./components/PostsContainer/PostsPage";
//import Posts from "./components/PostsContainer/Posts";
import Comment from "./components/CommentSection/Comment";
import CommentInput from "./components/CommentSection/CommentInput";
import CommentSectionContainer from "./components/CommentSection/CommentSectionContainer";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";




const App = () => {

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <LikeSection />
      <SearchBarContainer/>
      <PostHeader />
      <PostsPage />
      {/*<Posts />*/}
      {/*<Comment /> */}
      <CommentInput />
      <CommentSectionContainer />
      

      
    </div>
  );
};

export default App;
