import React from 'react';
import './Calculator.css'
import Button from './Button'
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

console.log(math.sqrt(-4).toString()) // 2i



const dupOpRegex = /[+/*]?-?\d+\.?\d*/g;

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentVal: "0",
            operatorFlag: false,
            decimalFlag: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (buttonValue) => {
        let currentVal = this.state.currentVal;
        let operatorFlag = this.state.operatorFlag;

        switch(true){
            case buttonValue === "0" ||
                buttonValue === "1" ||
                buttonValue === "2" ||
                buttonValue === "3" ||
                buttonValue === "4" ||
                buttonValue === "5" ||
                buttonValue === "6" ||
                buttonValue === "7" ||
                buttonValue === "8" ||
                buttonValue === "9" :

            if(this.state.currentVal !== "0"){
                currentVal += buttonValue
                operatorFlag = false
            }else{
                currentVal = buttonValue;
            }
            break;

            case buttonValue === "+" ||
                buttonValue === "-" ||
                buttonValue === "*" ||
                buttonValue === "/" :
            if(!this.state.operatorFlag){
                currentVal += buttonValue
                this.setState({decimalFlag:false})
            }else{
                const newNumber = currentVal.slice(0, currentVal.length-1)
                currentVal = newNumber
                currentVal += buttonValue
            }
            break;

            case buttonValue === "AC":
                currentVal = "0"
                operatorFlag = false
                this.setState({decimalFlag:false})
            break;

            case buttonValue === "=":
                console.log(currentVal.match(dupOpRegex))
                currentVal = math.evaluate(currentVal.match(dupOpRegex).join(''));
                operatorFlag = false;
                this.setState({decimalFlag:true})
            break;

            case buttonValue === ".":
                if(!this.state.decimalFlag){
                    currentVal += "."
                    this.setState({decimalFlag:true})
                }
            break;
            default:
                break;
       }
       this.setState({operatorFlag})
       this.setState({currentVal})
    }


    render(){
        return(
            <div className="calculator">
                <div id="display">{this.state.currentVal}</div>
                <div id="controls">
                    <Button className="button" id="clear" value="AC" handleClick={this.handleClick}></Button>
                    <Button className="button" id="divide" value="/" handleClick={this.handleClick}></Button>
                    <Button className="button" id="multiply" value="*" handleClick={this.handleClick}></Button>
                    <Button className="button" id="seven" value="7" handleClick={this.handleClick}></Button>
                    <Button className="button" id="eight" value="8" handleClick={this.handleClick}></Button>
                    <Button className="button" id="nine" value="9" handleClick={this.handleClick}></Button>
                    <Button className="button" id="subtract" value="-" handleClick={this.handleClick}></Button>
                    <Button className="button" id="four" value="4" handleClick={this.handleClick}></Button>
                    <Button className="button" id="five" value="5" handleClick={this.handleClick}></Button>
                    <Button className="button" id="six" value="6" handleClick={this.handleClick}></Button>
                    <Button className="button" id="add" value="+" handleClick={this.handleClick}></Button>
                    <Button className="button" id="one" value="1" handleClick={this.handleClick}></Button>
                    <Button className="button" id="two" value="2" handleClick={this.handleClick}></Button>
                    <Button className="button" id="three" value ="3" handleClick={this.handleClick}></Button>
                    <Button className="button" id="zero" value="0" handleClick={this.handleClick}></Button>
                    <Button className="button" id="decimal" value="." handleClick={this.handleClick}></Button>
                    <Button className="button" id="equals" value="=" handleClick={this.handleClick}></Button>
                </div>
            </div>
        )
    }
}


export default Calculator;
