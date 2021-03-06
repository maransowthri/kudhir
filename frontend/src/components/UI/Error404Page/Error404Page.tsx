import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import classes from "./Error404Page.module.css";

const Error404Page: React.FC = () => {
  const history = useHistory();

  return (
    <div className={classes.Error404Page}>
      <svg
        className={classes.ErrorSVG}
        id="Capa_1"
        enableBackground="new 0 0 512 512"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m512 31.893h-256l-20.016 147.587 276.016-20.016z"
          fill="#B7B7A4"
        />
        <path d="m0 31.893v127.571l256 20.016v-147.587z" fill="#B7B7A4" />
        <path d="m47.839 80.678h31.893v30h-31.893z" fill="#ff4a4a" />
        <path d="m111.625 80.678h31.893v30h-31.893z" fill="#ffd422" />
        <path d="m175.41 80.678h31.893v30h-31.893z" fill="#90e36a" />
        <path
          d="m512 159.464h-256l-20.016 160.322 20.016 160.321h256z"
          fill="#f0f0f0"
        />
        <path d="m0 159.464h256v320.644h-256z" fill="#f0f0f0" />
        <path d="m256 270.054h16.893v99.463h-16.893z" fill="none" />
        <path d="m239.107 270.054h16.893v99.463h-16.893z" fill="none" />
        <path
          d="m145.322 304.786h-33.785v-64.732h-30v94.732h63.785v64.731h30v-159.463h-30z"
          fill="#ccc"
        />
        <path
          d="m400.463 240.054v64.732h-33.785v-64.732h-30v94.732h63.785v64.731h30v-159.463z"
          fill="#ccc"
        />
        <path
          d="m272.893 270.054v99.463h-16.893l-10.008 15.15 10.008 14.85h46.893v-159.463h-46.893l-10.008 15.946 10.008 14.054z"
          fill="#ccc"
        />
        <path
          d="m209.107 399.517h46.893v-30h-16.893v-99.463h16.893v-30h-46.893z"
          fill="#ccc"
        />
      </svg>
      <p className={classes.ErrorMessage}>Page not found.</p>
      <Button type="secondary" action={() => history.push("/")}>
        Back To Home
      </Button>
    </div>
  );
};

export default Error404Page;
