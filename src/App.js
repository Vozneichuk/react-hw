import React from 'react';
import CharList from './characters/characters'


const App = (props) => {
  return (
    <div><CharList /></div>
  )
}

export default App;


window.onload = function() {
    
  setTimeout(function() {

    document.getElementById("preloader_malc").style.display = "none";

  }, 400);

};
