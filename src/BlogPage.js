import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useNavigate, useParams } from "react-router-dom";

function BlogPage(){
  const [blogs, setBlogs] = React.useState(blogdata)
  const navigate = useNavigate();
  const { slug } = useParams();

  const deletePost = (slug) => { 

    setBlogs(blogs.filter(blog=> blog.slug !== slug))
    console.log(blogs)
    // HTMLFormControlsCollection      
    //     const blogIndex = blogdata.findIndex(post => post.slug === slug);
    //     console.log(blogIndex);
    //     const newBlogdata = [...blogdata];
    //     newBlogdata.splice(blogIndex, 1)
    //     console.log(newBlogdata);
    //     setBlogs(newBlogdata)
    };


    return (
       <>
          <h1>Blog</h1>

            <Outlet />

          <ul>
            {blogs.map(post => (
             <BlogLink key={post.slug} post={post} />
            ))}
          </ul>
       </>
    );  
}

function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}

export { BlogPage };