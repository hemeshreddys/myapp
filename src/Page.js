import React, {Component} from 'react';


class Page extends Component{
    render(){
        var stylesS = {
            padding:'100px',
            width: "100%",
            height:'60vh',
            fontFamily: "'Sacramento', cursive;",
            backgroundColor: this.props.bgColor,
            fontSize:'4.5em',
            margin:'2px 0px'
        };
        return(
                <div style={stylesS}>
                  {this.props.contentP}
                </div>
        );
    }
}
export default Page;