import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

function UserLoginRequired(props) {
  const { path } = props;
  return (
    <div className="h-full m-5 mx-8 my-20">
      <div className="text-2xl">Please Login to View this.</div>
      <p className="text-gray-500 py-3">
        Once you login, you can view this and other restricted pages.
      </p>
      <div className="my-5">
        <Link to={path}>
          <Button name="Login" />
        </Link>
      </div>
    </div>
  );
}

export default UserLoginRequired;
