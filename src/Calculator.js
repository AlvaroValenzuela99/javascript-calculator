import React from 'react';

class Calculator extends React.Component{
    render(){
        return(
            <div className="calculator">
                <div id="display"></div>
                <div id="controls"></div>
            </div>
        )
    }
}

export default Calculator;
