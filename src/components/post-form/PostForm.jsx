import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import { service } from "../../appwrite/confing";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function PostForm({ post }) {
  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

      if (file) {
        service.deleteFile(post.featureImage);
      }

      const featureImage = file ? file.$id : undefined;

      const dbPost = await service.updatePost(post.$id, data.title, data.content, featureImage,  data.status);

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await service.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featureImage = fileId;

        const title = data.title;
        const content = data.content;
        const featureImage = data.featureImage;
        const status = data.status;
        const userId = userData.$id;
        const dbPost = await service.createPost(title, content, featureImage, status, userId);

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  // const submit = async (data) => {
  //   console.log(typeof data.content)
  //   console.log(userData.$id)
  // }


  return (
    <>
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap w-full">
        <div className="w-full lg:w-2/3 px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className='default-input mb-4'
            {...register("title", { required: true })}
          />
          <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-full lg:w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className='default-input mb-4'
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-4">
              <img
                src={service.getFilePreview(post.featureImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
          />
          <Button type="submit"
            className="default-btn w-full"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
}


// import React from 'react'

// function Layout() {
//   return (
//     <div className='bg-red-500 w-full flex flex-wrap'>
//       <div
//         className='h-52 bg-blue-500 lg:w-2/3 px-2 w-full'
//       ></div>
//       <div
//       className='h-52 bg-amber-500 lg:w-1/3 px-2 w-full'
//       ></div>
//     </div>
//   )
// }

// export default Layout