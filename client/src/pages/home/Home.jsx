import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({type}) => {
  const [lists,setLists]=useState([]);
  const [genre,setGenre]=useState([]);
  useEffect(()=>{
    const getRandomLists =  async ()=>{
      try{
        const res = await axios.get(`lists${type ? "?type=" + type:""}&${genre? "$genre="+genre:""}`,
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGY4MjEzOTRjZDUzNjkwOTdmNWJlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjE3NjY4MiwiZXhwIjoxNjY2NjA4NjgyfQ.Ea1oew4mhLym2WKvRqKvsavT4vJ478YAKMDdwS89VDU"
          }
        });
        console.log(res);
        //setLists(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getRandomLists();
  },[type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default Home;
