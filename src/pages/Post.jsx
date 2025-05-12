import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { Button } from '../components'
import { service } from '../appwrite/confing';
import { useSelector } from 'react-redux';
import parse from "html-react-parser"


function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const posts = useSelector(state => state.posts.allPosts.documents);
  const userData = useSelector(state => state.auth.userData);

  // console.log("Posts :: post.jsx", posts)
  // console.log("useData :: post.jsx", userData)

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featureImage);
        navigate("/");
      }
    })
  }

  useEffect(() => {
    if (!slug) {
      navigate("/");
      return;
    }

    let postdata = posts?.find(post => post?.$id === slug);

    if (postdata) {
      setPost(postdata);
      // console.log("PostData from store :: post.jsx", postdata);
    } else {
      service.getPost(slug).then(post => {
        setPost(post);
        // console.log("Post.jsx frome apppwrete ::", post);
      }).catch((error) => {
        console.error("failed to fetch post.jsx::", error);
        navigate("/");
      })
    }

  }, [slug, posts, navigate]);

  const isAdmin = post && userData ? post.userId === userData.$id && userData.labels[0] === 'admin' : false;

  // console.log(post)
  // console.log("user admin ", typeof userData.labels[0])

  if (!post) {
    return (
      <div className='w-full min-h-screen background-gradient flex items-center justify-center'>
        <h1 className="text-xl p-4 font-bold">Loading...</h1>
      </div>
    )
  }


  return post ? (
    <div className='w-full min-h-screen background-gradient'>
      <div className='w-full max-w-3xl mx-auto px-4 py-8 dark:text-white text-black'>
        <img
          src={service.getFilePreview(post.featureImage)}
          alt={post.title}
          className="rounded-xl w-full mx-auto mb-6"
        />

        {isAdmin && (
          <div className="flex items-center justify-between">
            <Link to={`/edit-post/${post.$id}`}>
              <Button >
                Edit
              </Button>
            </Link>
            <Button onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
        <div className='w-full mb-6'>
          <h2 className="text-2xl md:text-3xl font-bold">{post.title}</h2>
        </div>
        <div className='ck-content w-full'>
          <div className='px-4'>
            {parse(post.content)}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Post