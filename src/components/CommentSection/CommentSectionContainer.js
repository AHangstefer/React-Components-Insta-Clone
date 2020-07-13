// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
//import dummyData from "../../dummy-data";


const CommentSection = props => {
   const [comments] =useState(props.comments);
   const [newComments] =useState([]);

   console.log ("Comment section container", comments);
   
   // Add state for the comments
 
     return (
      <div>
        
        {comments.map(c => 
        <Comment key={c.username + c.text} comment = {c} />
        )}
      
    

      {/* map through the comments data and return the Comment component */}
      <CommentInput newComments ={newComments} />
      

      </div>
  );
  
};

export default CommentSection;
