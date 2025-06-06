import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Allroutes from "../src/Allroutes";
import Drawersliderbar from "../src/Component/Leftsidebar/Drawersliderbar"
import Createeditchannel from "./pages/Channel/Createeditchannel";
import Videoupload from "./pages/Videoupload/Videoupload";
import { useDispatch } from "react-redux";
import { fetchallchannel } from "./action/channeluser";
import { getallvideo } from "./action/video";
import { getallcomment } from "./action/comment";
import { getallhistory } from "./action/history";
import { getalllikedvideo } from "./action/likedvideo";
import { getallwatchlater } from "./action/watchlater";
function App() {
  const [toggledrawersidebar, setToggledrawersidebar] = useState({
    display: "none",
  });
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchallchannel())
    dispatch(getallvideo())
    dispatch(getallcomment())
    dispatch(getallhistory())
    dispatch(getalllikedvideo())
    dispatch(getallwatchlater())
  },[dispatch])
  const toggledrawer = () => {
    if (toggledrawersidebar.display === "none") {
      setToggledrawersidebar({
        display: "flex",
      });
    } else {
      setToggledrawersidebar({
        display: "none",
      });
    }
  };
  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  const [videouploadpage, setvideouploadpage] = useState(false);
  return (
    
      <Router>
        {
          videouploadpage && (
            <Videoupload
              setvideouploadpage={setvideouploadpage}
            />
          )
        }
        {editcreatechanelbtn && (
          <Createeditchannel
            seteditcreatechanelbtn={seteditcreatechanelbtn}
          />
        )}
        <Navbar
          seteditcreatechanelbtn={seteditcreatechanelbtn}
          toggledrawer={toggledrawer}
        />
        <Drawersliderbar toggledrawer={toggledrawer} toggledrawersidebar={toggledrawersidebar}/>
        <Allroutes seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage} />
      </Router>
    
  );
}

export default App;
