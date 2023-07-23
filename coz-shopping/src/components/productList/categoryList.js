import React from 'react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';


const CategoryList = (props) =>{

    const [isLoading, setIsLoading] = useState(false);
    const target = useRef(null);
    const viewPoart = useRef();

    const options = {
        root: viewPoart.current,
        rootMargin: "0px",
        threshold: 0.5,
    }
    
    const onIntersect = ([entry], observer)=>{
        if (entry.isIntersecting && !isLoading){
            setIsLoading(true);
            axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=10')
            .then((res)=>{
              const newData = res.data && res.data.map((el)=>{
                return {...el, isBookMarked:false}})
                props.setNewData(newData);
            })
            setIsLoading(false);
            observer.observe(target.current);
        }
    } 

    useEffect( () => {
        let observer;
        if (target.current) {
          // callback 함수, option
          observer = new IntersectionObserver(onIntersect, options);
          observer.observe(target.current); // 타겟 엘리먼트 지정
        }
        return () => observer && observer.disconnect();//다수의 엘리먼트를 관찰하고 있을떄, 이에대한 모든 관찰을 멈추고 싶을때 사용한다
      }, [target]);


    const filteredData = props.items.filter((el)=>{
        if(props.selectedCategory === 'All'){
            return props.items
        }else if( props.selectedCategory === 'Product' ||
             props.selectedCategory === "Category" || 
             props.selectedCategory === "Exhibition" || 
             props.selectedCategory === "Brand"){
            return el.type === props.selectedCategory
        }else if(props.selectedCategory === "BOOKMARK"){
            return el.isBookMarked === true
        }
    })

   

    // items={props.items} selectedCategory={props.selectedCategory} bookMarkHanler ={props.bookMarkHanler}
    return(
        <div className='category-list-container'>  
        {/* category-list-container에 무한스크롤기능을 넣어야한다. */}
                <div className='category-item-container'ref={viewPoart} >
                {filteredData.map((el,idx)=>{
                    return(
                        <ul key={idx}>
                            <li>
                                <div className='category-item-img'>
                                <img src={!el.image_url ? el.brand_image_url : el.image_url}></img>
                                <div className='bookmark-on-off-container' onClick={()=>{props.bookMarkHandler(el.id)}}>
                                {
                                el.isBookMarked ? 
                                 <img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - on.png')}></img>
                                :<img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - off.png')}></img> 
                                }
                                </div>
                                </div>
                                <div className='category-item-content'>
                                    <span className='category-item-content-title'>{el.title}</span>
                                    <span className='category-item-discount'>{!el.discountPercentage ? '-':`${el.discountPercentage}%`}</span>
                                </div>
                                <div className='category-item-price'><span>{!el.price?  ' ': `${el.price}원`}</span></div>
                            </li>

                        </ul>
                    )
                 })}
                 
                            <div className='scroll-container' ref={target} >
                                <h2></h2>
                            </div>


                </div>
        </div>
    )
}



export default CategoryList