import React, { useState } from "react";
import PropTypes from "prop-types";

import { Input, Checkbox } from "@components";
import { useForm } from "react-hook-form";

const PostManagement = (props) => {
  const { control, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const [postActived, setPostActived] = useState("post-1");
  const handleClickPost = (id) => {
    setPostActived(id);
  };
  return (
    <section className="container">
      <h3 className="text-2xl font-semibold mb-3">Post list</h3>
      <div className="p-3 rounded-t-lg bg-white border-b border-light-gray">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            id="search"
            name="search"
            placeholder="Search"
            style="w-[22rem] border-light-gray pl-3"
          />
        </form>
      </div>
      <div className="p-3 bg-white">
        {/* map here */}
        <div className="border-b border-light-gray grid grid-cols-7 place-items-center py-2">
          <div className="flex items-center w-full gap-x-5">
            <Checkbox
              control={control}
              name="post-1"
              handleClickPost={handleClickPost}
            />
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-12 h-12 rounded-md border border-light-gray"
            />
          </div>
          <span>
            <strong>Gamming headset</strong>
          </span>
          <span>
            <strong>08123123</strong>
          </span>
          <span>125000VND</span>
          <span>Active</span>
          <span>1 weeks ago</span>
          <button className="p-2 rounded-full bg-white">...</button>
        </div>
        <div className="border-b border-light-gray grid grid-cols-7 place-items-center py-2">
          <div className="flex items-center w-full gap-x-5">
            <Checkbox control={control} name="post-2" />
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-12 h-12 rounded-md border border-light-gray"
            />
          </div>
          <span>
            <strong>Gamming headset</strong>
          </span>
          <span>
            <strong>08123123</strong>
          </span>
          <span>125000VND</span>
          <span>Active</span>
          <span>1 weeks ago</span>
          <button className="p-2 rounded-full bg-white">...</button>
        </div>
      </div>
    </section>
  );
};

PostManagement.propTypes = {};

export default PostManagement;
