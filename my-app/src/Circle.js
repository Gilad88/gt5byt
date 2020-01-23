import React from 'react'

class Circle extends React.Component{
    render(){
       return <div className="Circle">
           
           <a href={this.props.link}>
                    <li className="li1"><i class={this.props.classnam}></i></li></a>
                    <span>{this.props.info} </span>
       </div>
    }
}

export default Circle