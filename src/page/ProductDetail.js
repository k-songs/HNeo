import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
const ProductDetail = () => {
  let { id } = useParams(); //확인필요
  const [product, setProduct] = useState(null);

 
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/k-songs/github-action/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>￦{product?.price}</div>
          <Dropdown className="drop-button">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Select size
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-grid gap-2">
            <Button variant="light" size="xxl">
             추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
