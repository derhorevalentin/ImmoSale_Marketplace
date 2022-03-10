import React, { useState, useEffect } from "react";
import { Row, Col, Card, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

import Article from "./Article";
import { useGetArticlesQuery } from "../services/immoApi";

const Homepage = () => {
  const { data: articlesList, isFetching } = useGetArticlesQuery();
  const [articles, setArticles] = useState(articlesList?.data?.articles);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (articlesList) => {
    let value = articlesList.target.value.toLowerCase();
    let result = [];
    //console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    axios("http://127.0.0.1:3000")
      .then((response) => {
        //console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        //console.log("Error");
      });
  }, []);

  console.log(filteredData);

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="search-articles">
        <Input
          placeholder="Search for an article "
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <Row gutter={[16, 16]} className="articles-card-container">
        {filteredData.map((value, index) => {
          return (
            <Col span={6} className="articles-card">
              <Link
                key={articlesList}
                to={`/article/${value.id}`}
                data-id={`${value.id}`}
              >
                <Card>
                  <h1>Title</h1>
                  <p>{value.title}</p>
                  <h1>Description</h1>
                  <p>{value.description}</p>
                  <h1>Price</h1>
                  <p>{value.price}</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Homepage;
