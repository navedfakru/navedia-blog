import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Container, PostForm } from '../components';

function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const posts = useSelector(state => state.posts.allPosts.documents);

  useEffect(() => {
    if (slug && posts) {
      let postdata = posts.find(post => post.$id === slug);
      setPost(postdata);
    } else {
      navigate("/")
    }
  }, [slug, navigate]);

  return post ? (
    <div className='py-2 background-gradient'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost 