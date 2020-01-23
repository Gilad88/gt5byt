import React from 'react';
import './App.css';
import Header from './Header'
import Circle from './Circle'
import Area1 from './Area1'
import Area2 from './Area2'
import Conect from './Conect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      
      </header>
      <nav className="box">
        <ul>
      <Circle classnam="fas fa-mobile-alt" info="התקשר אליי" link="tel:555-555-5555"/>
      <Circle classnam="fab fa-whatsapp" info="וואצפ" link="https://wa.me/15551234567"/>
      <Circle classnam="fab fa-facebook-f" info="פייסבוק" link="http://www.facebook.com/pages/xxxx/xxxxxx"/>
      <Circle classnam="fas fa-envelope" info="מייל" link="contact@workin.co.il‬"/>
      <Circle classnam="fab fa-instagram" info="עקוב" link="http://www.instagram.com/yourusername"/>
      <Circle classnam="fab fa-waze" info="נווט אליי" link="https://waze.com/ul"/>
        </ul>
      </nav>
      <div id="ar">
      <Area1 />
      <div id="ar2">
      <Area2 />
      <Conect />
      </div>
      </div>
    </div>
  );
}

export default App;
