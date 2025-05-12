import React from 'react'
import { Link } from 'react-router'
import { service } from '../appwrite/confing'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Button } from ".";

function PostCard({ $id, title, featureImage }) {

  return (
    <>
      <Link to={`/post/${$id}`}>
        <div className="max-w-sm background-gradient border border-gray-300 rounded-xl shadow-xl shadow-white drop-shadow-2xl drop-shadow-white  dark:border-gray-700">
          <img className="rounded-t-lg aspect-auto" src={service.getFilePreview(featureImage)} alt={title} />
          <div className="p-5">
            <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>
            <Button className='default-btn flex items-center justify-between gap-2'>
              <p>Read more</p>
              <IoArrowForward />
            </Button>
          </div>
        </div>
      </Link>
    </>
  )
}


export default PostCard