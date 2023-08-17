import React from 'react';

class Button extends React.Component{
   
    runParentHandleClick = () => {
        this.props.handleClick(this.props.value);
    }
    render(){
        return(
            <button onClick={this.runParentHandleClick} className="button" id={this.props.id} value={this.props.value}>{this.props.value}</button>
        )
    }
}

export default Button;