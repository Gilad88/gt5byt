import React from 'react'
import HeaderImg from './HeaderImg'
import HeaderLogo from './headerLogo'
import BigTitle from './BigTitle'
import SmallTitle from './SmallTitle'

class Header extends React.Component{
    render(){
       return <header>
           <HeaderImg />
           <HeaderLogo />
           <BigTitle />
           <SmallTitle />
       </header>
    }
}

export default Header