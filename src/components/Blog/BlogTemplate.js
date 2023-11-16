import React from 'react';
import data from './data/data';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound'
import './styles/blogTemplate.css';
import image from './img/Deepak.jpg';

function BlogTemplate() {
    const { id } = useParams();
    const blogPost = data.find((post) => post.id === parseInt(id));

    return (
        <>
        {
            !blogPost ? <PageNotFound /> :
            <div>
                <div className="blog-template">
                    <h2>{blogPost.title}</h2>
                    <div className='author-detail'>
                        <img src={image} alt="" />
                        <h1>{blogPost.author}</h1>
                        <span>|</span>
                        <p>{blogPost.date}</p>
                        <span>|</span>
                        <p>{blogPost.readTime}</p>
                    </div>
                    <div className=' img-box'>
                    <img src='https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/blogpost/how-algorithmic-trading-systems-work/photo-1518186285589-2f7649de83e0.jpg' alt="" />
                    </div>
                    <div className="content">
                        <p>{blogPost.content[0]}</p> 
                        <h3>{blogPost.heading[0]}</h3>
                        <p>{blogPost.content[1]}</p> 
                        <h3>{blogPost.heading[1]}</h3>
                        <p>{blogPost.content[2]}</p>
                        <p>{blogPost.content[3]}</p>
                        <p>{blogPost.content[4]}</p>
                        <h3>{blogPost.heading[2]}</h3>
                        <p>{blogPost.content[5]}</p>
                        <p>{blogPost.content[6]}</p>
                        <p>{blogPost.content[7]}</p>
                        <p>{blogPost.content[8]}</p>
                    </div>
                </div>

                <div className="comments">
                    <h4>Add a new Comment</h4>
                    <textarea name="comment" id="comment" cols='150' placeholder='Type a Comment' ></textarea>
                    <button className="btn">Post Comment</button>
                </div>
            </div>
        }
        </>
    );
}

export default BlogTemplate;
