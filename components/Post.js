import React, { Component } from 'react'

// () => 1     //ES6 function syntax

//BELOW -- have to change class to className because class is a protected word in JS
const Post = (props) => (
<div className="post">
        <img src={props.data.image} alt={props.data.title} />
        <h3>{props.data.title}</h3>
        <p className="lead">
        Published on {props.data.date} at {props.data.time}
        </p>
        <p>
        {props.data.body}
        </p>
        <span className="small">Author: {props.data.author}</span>

</div>
)
export default Post
