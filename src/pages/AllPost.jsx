import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, PostCard } from '../components'

function AllPost() {
  const [allPosts, setAllPosts] = useState(null)

  const posts = useSelector(state => state.posts.allPosts);

  useEffect(() => {
    if(posts) {
      setAllPosts(posts);
    } else {
      console.log("POsts nahi milie");
      setAllPosts("Sorry?")
    }
  })

  return allPosts?.documents ? (
    <div className='background-gradient w-full min-h-screen py-4'>
      <Container>
        <div className='flex flex-wrap'>
          {allPosts.documents.map((post) => (
            <div key={post.$id} className='p-2 mx-auto'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <div className='background-gradient w-full min-h-screen py-4 flex items-center justify-center'>
      <h1 className='text-4xl text-bold'>{allPosts}</h1>
    </div>
  )
}

export default AllPost 