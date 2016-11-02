import React, { Component } from 'react'
import Post from './Post'


//Below is called a 'stateless component'
const Posts = (props) => {  //This is a constant variable (immutable) and always creates a new component based on new input. Does not go back and change the old one, rather spits out a new one.
    const PostItems = props.data.map((post, i) =>{
        return <Post post={post} key={i} /> //Need to the key to create a new Array with actual numbered keys starting at [0]. This dynamically allows for new posts (data to be entered in the future)
    })

    return (
    <div>
        <h1>Blog Posts</h1>
        {PostItems}
    </div>
)
}
//Have to wrap the return ^^ in divs because render can only mount one component at a time


export default Posts
