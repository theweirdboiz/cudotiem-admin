import React from "react";
import PropTypes from "prop-types";

import { Input } from "@components";
import { useForm } from "react-hook-form";

const PostManagement = (props) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="container">
      <h3 className="text-2xl font-semibold mb-3">Post list</h3>
      <div className="p-3 rounded-lg bg-white">
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
    </section>
  );
};

PostManagement.propTypes = {};

export default PostManagement;
