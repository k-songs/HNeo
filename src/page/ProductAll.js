import React from "react";
//import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from "react-bootstrap/";
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";


const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const [query,setQuery] = useSearchParams();

  const getProduct = async() => {
    const searchQuery = query.get("q") ||"";
    let url = `https://my-json-server.typicode.com/k-songs/HNeo/products/?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();

    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu,index) => (
            <Col lg={3} key={index}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
