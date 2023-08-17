import React from 'react';
import './Calculator.css'

class Calculator extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            currentVal: 0,
            formula: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }

    handleClick(event){
        this.setState(state =>({
            currentVal: event.target.value,
            formula: state.formula += this.state.currentVal
        }));
    }

    clearDisplay(){
        this.setState({
            currentVal: 0
        })
    }

    render(){
        return(
            <div className="calculator">
                <div className="formula">{this.state.formula}</div>
                <div id="display">{this.state.currentVal}</div>
                <div id="controls">
                    <button id="clear" onClick={this.clearDisplay}>AC</button>
                    <button id="divide" value="/" onClick={this.handleClick}>/</button>
                    <button id="multiply" value="*" onClick={this.handleClick}>X</button>
                    <button id="seven" value="7" onClick={this.handleClick}>7</button>
                    <button id="eight" value="8" onClick={this.handleClick}>8</button>
                    <button id="nine" value="9" onClick={this.handleClick}>9</button>
                    <button id="substract" value="-" onClick={this.handleClick}>-</button>
                    <button id="four" value="4" onClick={this.handleClick}>4</button>
                    <button id="five" value="5" onClick={this.handleClick}>5</button>
                    <button id="six" value="6" onClick={this.handleClick}>6</button>
                    <button id="add" value="+" onClick={this.handleClick}>+</button>
                    <button id="one" value="1" onClick={this.handleClick}>1</button>
                    <button id="two" value="2" onClick={this.handleClick}>2</button>
                    <button id="three" value ="3" onClick={this.handleClick}>3</button>
                    <button id="zero" value="0" onClick={this.handleClick}>0</button>
                    <button id="decimal" value="." onClick={this.handleClick}>.</button>
                    <button id="equals" value="=">=</button>
                </div>
            </div>
        )
    }
}

export default Calculator;
