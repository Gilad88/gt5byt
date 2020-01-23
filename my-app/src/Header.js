import React from 'react'
import HeaderImg from './HeaderImg'
import HeaderLogo from './headerLogo'
import BigTitle from './BigTitle'
import SmallTitle from './SmallTitle'


class Header extends React.Component{
    render(){
       return <header>
           <HeaderImg />
           <div id="centerlog">
           <HeaderLogo />
           </div>
           <div className="box">
           <BigTitle />
           <SmallTitle />
           </div>
       </header>
    }
}

export default Header