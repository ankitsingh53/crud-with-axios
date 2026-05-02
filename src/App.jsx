import axios from "axios";
import { getPost, deletePost } from "./Api/PostApi";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App(){
  const[data, setData] = useState([])


  const getPostData = async ()=>{
    try{
    const response = await getPost();
    console.log(response.data);
    setData(response.data)
    }catch(err){
      console.log(err.message)
    }
  }

  const handleDeletePost = async (id)=>{
        try{
            const res = await deletePost(id);
            if(res.status === 200){
                const newUpdatedData = data.filter((delData)=>{
                    return delData.id === id;
                });
                setData(newUpdatedData);
            }

        }catch(err){
            console.log(err.message)
        }
    }


  useEffect(()=>{
    getPostData();
  }, [])

  return (
    <>
    <Card data={data} onButtonClick={handleDeletePost}/>
    </>
  )
}
export default App;