import React, {Component} from 'react';
import Media from "react-media";

class Page extends Component{
    render(){
        var stylesS = {
            padding:'100px',
            width: "100%",
            height:'60vh',
            fontFamily: "'Sacramento', cursive;",
            backgroundColor: this.props.bgColor,
            
            margin:'2px 0px'
        };
        return(
                <div style={stylesS}>
                  
                  <Media
                    query="(max-width: 480px)"
                    render={() => <p style={{fontSize:'2em'}}>{this.props.contentP}</p>}
                    />
                    <Media
                    query="(min-width: 481px)"
                    render={() => <p style={{fontSize:'4em'}}>{this.props.contentP}</p>}
                    />
                </div>
        );
    }
}
export default Page;