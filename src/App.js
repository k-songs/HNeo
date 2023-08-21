import './App.css'
import {useEffect, useState} from 'react'
import { Route,Routes } from 'react-router-dom'  //링크는  아직.
import ProductAll from './page/ProductAll';
import Login from './page/Login';
//import ProductDetail from './page/ProductDetail';
import Nav from './component/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';
//1.전체상품페이지, 로그인, 상세페이지
//2.전체상품에서 전체상품 볼 수있다.
//3.로그인버튼 누르면 로그인 페이지 나옴
//4.상품디테일 누르고 로그인이 안되있을 경우 로그인페이지가 니온다.
//5.로그인 되있을경우 디테일 페이지 볼수가 있다.
//6.로그아웃이 가능해진다.
//7.로그아웃이면 디테일 접근금지 다시 로그인이 보이게 된다.
//8로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9상품검색 할 수가 있다.
export default function App() {

  const [authenticate,setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log(authenticate,"aaa")
  },[authenticate])
  return (
    <div >
      <Nav />
   <Routes>
    <Route path="/" element={<ProductAll/>}/>
    <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
    <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
   </Routes>
    </div>
  )
}


