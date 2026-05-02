import axios from "axios";
import { getPost } from "./Api/PostApi";
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

  useEffect(()=>{
    getPostData();
  }, [])

  return (
    <>
    <Card data={data}/>
    </>
  )
}
export default App;