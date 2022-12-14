import React  from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/Navbar/News";
import Music from "./Components/Navbar/Music";
import Settings from "./Components/Navbar/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = () => {


    return (
      <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
          <div className='app-wrapper-content'>
              <Routes>
                  <Route path="/profile" element={<Profile />}/>
                  <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                  <Route path="/users/" element={<UsersContainer/>}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/music" element={<Music/>}/>
                  <Route path="/settings" element={<Settings/>}/>
              </Routes>
          </div>

      </div>
      </BrowserRouter>
  );

}
export default App;
