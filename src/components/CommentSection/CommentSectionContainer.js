// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
//import dummyData from "../../dummy-data.js";


const CommentSection = props => {
   //console.log ("These are props from CommentSection", props);

  // Add state for the comments
  //const [points, setPoints]= useState(props.post)

  return (
    <div>
      {/* {data.map(c=> (
        <Comment key={c.id} post=[c] />
      ))} */}

      {/* map through the comments data and return the Comment component */}
      {/*<CommentInput />*/}

    </div>
  );
};

export default CommentSection;
