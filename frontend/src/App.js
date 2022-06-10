import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { createItem, getItems,deleteItem } from "./functions";
import { BsFillPenFill } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";



import { ImCross } from "react-icons/im";

import "./App.css";
import { Modal } from "react-bootstrap";
import axios from 'axios';

function App() {
  const [item, setItem] = useState({ title: "", image: "" });
  const [items, setItems] = useState([]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (item.title == "" && item.image == "") {
      alert("fields cannot be empty");
    } else {
      const result = await createItem(item);
      setItems([...items, result]);
      setItem({
        title:"",
      })
    }
  };
 
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      console.log("fetch data;m", result);
      setItems(result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="upload">
          <div className="upload-types">
            <p>
              <BsFillPenFill /> compose post
            </p>
            <p>
              <MdInsertPhoto /> photo or video
            </p>
            <p>
              <AiFillVideoCamera /> live video
            </p>
          </div>
          <div className="close">
            <p>
              <ImCross />
            </p>
          </div>
          <hr />
        </div>





        {/* <pre>{JSON.stringify(item, null, '\t')}</pre> */}
        <form action="" onSubmit={onSubmitHandler}>
          <h4> Facebook post</h4>
          <div className="profile">
            <input
              type="image"
              src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              alt="Submit"
              width="48"
              height="48"
            ></input>

            <input
              placeholder="write something here...
          
          "
              type="text"
              className="input-field"
              onChange={(e) => setItem({ ...item, title: e.target.value })}
            />
          </div>

          <h5>select your image </h5>

          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setItem({ ...item, image: base64 })}
          />
          <div className="right-align">
          <button disabled > Only me  <IoIosArrowDropdownCircle/> </button>
            <button className="btns">Post</button>
          </div>
        </form>
      </div>
      {items?
<>


      {items?.map((item) => (
        <div className="card" key={item._id}>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Title : {item.title}
            </span>
          </div>
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              style={{ width: "100%", height: 300 }}
              src={item.image}
            />
          </div>
          <div>
            <hr />
            <div className="LCS">
              <h4>
                
                Like <AiFillLike />
              </h4>

              <h4>
                
                Comment <FaCommentDots />
              </h4>
              <h4>
                
                Share <IoIosShareAlt />
              </h4> 
             
            </div>
            <hr />
          </div>
          <button className="delete" onClick={()=>{
                deleteItem(item._id);
                window.location.reload()
              }}>
                Delete post
              </button>
        </div>
      ))}
</> : 
<h1>
  loading...
</h1> }





    </div>
  );
}

export default App;
