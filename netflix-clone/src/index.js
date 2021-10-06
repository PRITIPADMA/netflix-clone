import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card"

ReactDOM.render(
  <>
   <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" title="A Netflix Original"
   sname='DARK'
   link="https://www.netflix.com/in/title/80990668?source=35"
   
   />
   <Card
   imgsrc="https://wallpapercave.com/wp/wp8988425.jpg" 
   title="A Netflix Original"
   sname='Stranger Things'
   link="https://www.netflix.com/in/title/80990668?source=35"
   />
   <Card
   imgsrc="https://wallpapercave.com/uwp/uwp1470273.jpeg" title="A Netflix Original"
   sname='Extra Curricular'
   link="https://www.netflix.com/in/title/80990668?source=35"
   />
  </>,
document.getElementById('root'));
