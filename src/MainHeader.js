import React, {Component} from 'react';
class MainHeader extends Component{
    render(){
        const mainHeaderContainer = {
            width: '100%',
            height:'10%',
            backgroundColor:'#303633',
            padding:'10px 100px',
            boxSizing:'border-box',
            fontFamily: "Anton, sans-serif",
            fontSize:34,
            alignSelf: 'flex-start'
        };
        return(
            <div style={mainHeaderContainer}>
                <i class="material-icons">fingerprint</i>Quotes
            </div>
        );
    }
}
export default MainHeader;