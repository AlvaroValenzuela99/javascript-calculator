import React from 'react';

class Button extends React.Component{
   
    runParentHandleClick = () => {
        this.props.handleClick(this.props.value);
    }
    render(){
        return(
            <button onClick={this.runParentHandleClick}>{this.props.value}</button>
        )
    }
}

export default Button;