import React from 'react'
import css from "./css/Content.module.css";

function PostItem(props) {
    const posts = props.posts
  return (
    posts.map((post) => {
        const { name, title, image, description } = post;
            return (
                <div className={css.SearchItem} key={title}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt="various images"></img>
                    <p>{description}</p>
                </div>
            )
        })
    )};


export default PostItem