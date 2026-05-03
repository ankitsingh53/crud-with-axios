import { postData } from '../Api/PostApi';
import './card.css'
import { useState } from 'react';

function Card ({data, setData, onButtonClick}){

    const[addData, setAddData] = useState({
        title: "",
        body: ""
    });

    const handleInputChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev)=>{
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    

    const addPostData = async (addData)=>{
       const response = await postData(addData);
       console.log(response)
       if(response.status===201){
        setData([...data, response.data])
       }
    }

    const handleForm = (e)=>{
        e.preventDefault();
        addPostData(addData);
        // console.log(addData)
    }

   
    return(
        <>
        
        <form className="inputBox" onSubmit={handleForm}>
            <input 
            type="text" 
            placeholder="title"
            autoComplete='off'
            name='title'
            id='title'
            value={addData.title}
            onChange={handleInputChange}
            />
            <input 
            type="text" 
            placeholder="Add Post"
            autoComplete='off'
            name='body'
            id='body'
            value={addData.body}
            onChange={handleInputChange}
            />
            <button type='submit' className="addBtn">ADD</button>
        </form>

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