import React, { Component } from 'react';

const btnStyle={
        width: '700px',
        height:'100px',
        background : '#6aa84f',
        border: 'solid 1px black'
    
};
    
class Header extends Component {
    render() {
        return <div style={ btnStyle }></div>;
    }
}
    
export default Header;