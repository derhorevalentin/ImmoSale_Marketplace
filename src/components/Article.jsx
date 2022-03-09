import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Col } from "antd";

import { useGetArticlesQuery } from "../services/immoApi";

function Article() {
  const { articleId } = useParams();
  const { data, isFetching } = useGetArticlesQuery();

  console.log(data);

  function getDatas() {
    if (!isFetching) {
      const datas = data.find((obj) => {
        return obj.id == articleId;
      });
      return datas;
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="card-container">
        <Card className="card-show-article">
          <img
            src="https://images.pexels.com/photos/8146147/pexels-photo-8146147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="articles-img"
          />
          <h1>Title</h1>
          <p>{getDatas().title}</p>
          <h1>Description</h1>
          <p>{getDatas().description}</p>
          <h1>Price</h1>
          <p>{getDatas().price} $</p>
          <h1>Owner</h1>
          <p>{getDatas().user_id}</p>
        </Card>
      </div>
    </>
  );
}

export default Article;
