import React from 'react'
import './styles/Blog.css'
import image from './img/Deepak.jpg'
import { Link } from 'react-router-dom'
import data from './data/data'


function Blog() {
    return (
        <>
            <div className="blog" id='blog'>
                <h2><i className='fa-solid fa-blog'></i> Blog <span>Posts</span></h2>
                <div className="blog-post">
                    <div className="card-container">

                        {
                            data.map((blog)=><Card img={blog.img} id={blog.id} key={blog.id}/>)
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

function Card({ img, id }) {
    return (
        <div className='card'>
            <Link to={''+id}>
                <div className="img-box">
                    <img src={img} alt="" />
                </div>
                <div className="card-content">
                    <div className="channel-info">
                        <img src={image} alt="" />
                        <h2>Deepak Nagar<span> <i className="fa-solid fa-circle-dot"></i> 2d</span></h2>
                    </div>
                    <h1>Tata Power shares rise after Moody's upgrades rating, maintains stable outlook</h1>
                    <div className="social-interaction">
                        <p><i className="fa-regular fa-thumbs-up"></i> <span>6</span></p>
                        <p><i className="fa-regular fa-thumbs-down"></i> <span>3</span></p>
                        <p><i className="fa-regular fa-comment"></i> <span>4</span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Blog
