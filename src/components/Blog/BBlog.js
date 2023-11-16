    // BlogTemplate.js
  import React from "react";
  import { useParams } from "react-router-dom";
  
  // data.js
const blogData = [
    {
      id: 1,
      author: "Bard",
      title: "My First Blog Post",
      date: "2023-10-15",
      headings: ["Introduction", "Body", "Conclusion"],
      content: [
        "This is my first blog post!",
        "I'm excited to share my thoughts and ideas with the world.",
        "In this post, I'll be talking about the importance of collaboration in the AYUSH startup ecosystem.",
        "Collaboration is essential for accelerating innovation and bringing new AYUSH products and services to market.",
        "I believe that the Startup AYUSH portal can play a vital role in fostering collaboration and helping AYUSH startups succeed.",
      ],
    },
    {
      id: 2,
      author: "Bard",
      title: "The Future of AYUSH Startups",
      date: "2023-10-17",
      headings: ["Introduction", "Trends and Opportunities", "Conclusion"],
      content: [
        "The AYUSH sector is booming, and startups are playing a leading role in driving innovation.",
        "AYUSH startups are developing new products and services in a wide range of areas, including healthcare, wellness, and nutrition.",
        "In this post, I'll discuss some of the key trends and opportunities shaping the future of AYUSH startups.",
        "I'll also provide some advice for entrepreneurs who are interested in launching an AYUSH startup.",
      ],
    },
  ];


const BlogTemplate = () => {
  const { id } = useParams();
  const blogPost = blogData.find((post) => post.id == id);

  if (!blogPost) {
    return <h1>Blog post not found</h1>;
  }

  const renderHeadingAndContent = (heading, content) => {
    return (
      <div key={heading}>
        <h2>{heading}</h2>
        {content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="blog-template">
      <h1>{blogPost.title}</h1>
      <p>Author: {blogPost.author}</p>
      <p>Date: {blogPost.date}</p>

      {blogPost.headings.map((heading, index) => {
        const content = blogPost.content.slice(0, index + 1);
        return renderHeadingAndContent(heading, content);
      })}
    </div>
  );
};

export default BlogTemplate;
