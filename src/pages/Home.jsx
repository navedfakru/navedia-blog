import React from 'react';
import { useSelector } from 'react-redux';
import { Container, PostCard } from '../components'
import Login from './Login';
import { Link } from 'react-router';


function Home() {

  const posts = useSelector(state => state.posts.allPosts);

  if (posts.total <= 1 || posts.length === 0) {
    return <Login />
  }

  return posts ? (
    <>
      <div className='background-gradient w-full min-h-screen py-4'>
        <Container>
          <div className='flex flex-wrap'>
            {posts.documents.slice(3).map((post) => (
              <div key={post.$id} className='p-2 mx-auto'>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  ) : null;
}

export default Home





// export default function Home(){

//   return (
//     <>
//       <Button
//         onClick={() => {
//           service.getPosts().then((posts) => console.log("Posts: ", posts))
//         }}
//       >
//         Click to get data
//       </Button>
//       <Link to="/all-posts">
//         goto all posts
//       </Link>
//     </>
//   )
// }