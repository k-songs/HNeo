import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail =() => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail}>
        <img width={120} src={item?.img} alt=""/>
        <div style={{color:"violet"}}>{item?.choice === true ?"Concious Choice":""}</div> 
        <div>{item?.title}</div>
        <div>￦{item?.price}</div>
        <div style={{color:"blue"}}>{item?.new === true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
//리스폰시브   한줄에 4개  가운데 쪽으로 들어가 있고.  부트스트랩 이용함.