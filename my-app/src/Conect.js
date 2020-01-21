import React from 'react'

class Conect extends React.Component{
    render(){
       return <div className="box">
       <h3>צור קשר</h3>
       <form>
           <div id="ab">
           <section id="ns">
           <input required="" placeholder="השם המלא שלך" type="text"></input>
           </section>
           <section id="ns">
           <input required="" placeholder="המספר טלפון שלך" type="text"></input>
           </section>
           </div>
           <section>
                    <textarea cols="50" placeholder="מה אתה באמת חושב?"></textarea>
                  </section>
                  <section>
                    <input type="submit" value="שלח"></input>
                  </section>
       </form>

       </div>
    }
}

export default Conect