import React,{Component} from 'react';
class MainFooter extends Component{
    render(){
        const footerContainer ={
            width:'100%',
            height:'auto',
            backgroundColor:'#94D42E',
            alignSelf:'flex-end'
        };
        return(
            <div style={footerContainer}>
Footer
            </div>
        );
    }
}
export default MainFooter;