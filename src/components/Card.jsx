import './card.css'
import { useState } from 'react';

function Card ({data, onButtonClick}){

    // const handleDeletePost = async (id)=>{
    //     try{

    //         const res = await deletePost(id);
    //         if(res.status === 200){
    //             const newUpdatedData = data.filter((delData)=>{
    //                 return delData.id === id;
    //             });
    //         }

    //         setData(newUpdatedData);

    //     }catch(err){
    //         console.log(err.message)
    //     }
    // }
    return(
        <>
        <div className="inputBox">
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="Add Post"/>
            <button className="addBtn">ADD</button>
        </div>
        <div className="Container">
            {
                data.map((item)=>
                    <div className="cardBox" key={item.id}>
                <div>{item.id}.</div>
                <div className="title">Title: {item.title}</div>
                <div className="post">News: {item.body}</div>
                <div className='changebtn'>
                    <button>EDIT</button>
                    <button onClick={()=>onButtonClick(item.id)}>DELETE</button>
                </div>
            </div>
                )  
            }
            
        </div>
        </>
    )
}
export default Card