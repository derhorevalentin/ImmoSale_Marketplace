import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";

import { useGetArticlesQuery } from "../services/immoApi";

const Homepage = () => {
  const { data: articlesList, isFetching } = useGetArticlesQuery();
  const [articles, setArticles] = useState([]);

  console.log(articlesList);

  if (isFetching) return "Loading...";

  return (
    <>
      <Row gutters={[32, 32]} className="articles-card-container">
        {articlesList?.map((article) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="articles-card"
            key={articles.title}
          >
            <Card>
              <p>Titre :{article.title}</p>
              <p>Description :{article.description}</p>
              <p>Prix : {article.price}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
