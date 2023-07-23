import React from 'react';
import { useState } from 'react';

import CategoryList from '../productList/categoryList';


const MainProductList = (props)=>{

    const mainBookMarkList = props.items.filter((el)=>{
        return el.isBookMarked === true
    })

    return(
        <div className='products-container'>

            <div className='product-list-container'>
                <h2>상품 리스트</h2>
                <div className='product-item-container' >
                { props.items.slice(0,4).map((el,idx)=>{
                    return(
                        <ul key={el.id}>
                            <li>
                                <div className='product-item-img'>
                                <img src={!el.image_url ? el.brand_image_url : el.image_url}></img>
                                <div className='bookmark-on-off-container' onClick={()=>{props.bookMarkHandler(el.id)}}>
                                {
                                el.isBookMarked ? 
                                 <img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - on.png')}></img>
                                :<img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - off.png')}></img> 
                                }
                                </div> 
                                </div>
                                <div className='product-itme-content'>
                                    <span className='product-item-content-title'>{el.title}</span>
                                    <span className='product-item-discount' >{!el.discountPercentage ? '-':`${el.discountPercentage}%`}</span>
                                </div>
                                <div className='product-item-price'><span>{!el.price?  ' ': `${el.price}원`}</span></div>
                            </li>
                        </ul>
                    )
                 })}
                    
                </div>
            </div>

            <div className='bookmark-list-container'>
                <h2>북마크 리스트</h2>
                <div className='bookmark-item-container'>
                 <CategoryList 
                    items={mainBookMarkList.slice(0,4)} 
                    selectedCategory={props.selectedCategory} 
                    bookMarkHandler ={props.bookMarkHandler}
                    setNewData={props.setNewData}
                    ></CategoryList>
                </div>
            </div>




        </div>
    )
}


export default MainProductList