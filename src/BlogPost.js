import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { blogdata } from "./blogdata";
import { BlogPage } from "./BlogPage";


function BlogPost({Blogs,setBlogs}) {
    
    //const [blogs, setBlogs] = React.useState(blogdata)
    const navigate = useNavigate();
    const { slug, deletePost } = useParams();

    
    const auth = useAuth();

    const blogpost = blogdata.find(post => post.slug === slug);
    
    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

    const returnToBlog = () => {
        navigate('/blog');
    };

  

    
    const deleteee = (slug)=>{
       
        setBlogs(Blogs.filter(blog=> blog.slug !== slug))
        navigate('/blog');
   }
    
    

    return (
       <>
          <h2>{blogpost.title}</h2>
          <button onClick={returnToBlog}>Volver al Blog</button>
          <p>{blogpost.content}</p>
          <p>{blogpost.author}</p>
          <p>{blogpost.slug}</p>

          {canDelete && (
            <button onClick={() => deleteee(blogpost.slug)}>Eliminar Blogpost</button>
          )}

       </>
    );
}

export { BlogPost };
    
