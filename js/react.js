//These are loading other libraries
import React from 'react'
import ReactDom from 'react-dom'
import Posts from '../components/Posts'

window.renderView = (data) => {
    ReactDom.render(   //RENDER CAN ONLY MOUNT ONE COMPONENT AT A TIME (COMPONENT IS <Posts data..../>) also connected to lines 9-12 on Posts.js (which is one component)
        <Posts data={data} />,   //JSX--Posts is the tag, data values are called 'props'
        document.getElementById('posts')  //this hooks onto my HTML id tag 'posts'(HAS TO BE AN ID, NOT A CLASS)
    )
}

renderView(posts)
