import React from "react";
import CalcButton from "./calcButton";

class ButtonBox extends React.Component {
    render() {
        return (
            <div id="button-box">
                <CalcButton buttonId="clear" symbol="AC" />
                <CalcButton buttonId="divide" symbol="/" />
                <CalcButton buttonId="multiply" symbol="x" />
                <CalcButton buttonId="seven" symbol="7" />
                <CalcButton buttonId="eight" symbol="8" />
                <CalcButton buttonId="nine" symbol="9" />
                <CalcButton buttonId="subtract" symbol="-" />
                <CalcButton buttonId="four" symbol="4" />
                <CalcButton buttonId="five" symbol="5" />
                <CalcButton buttonId="six" symbol="6" />
                <CalcButton buttonId="add" symbol="+" />
                <CalcButton buttonId="one" symbol="1" />
                <CalcButton buttonId="two" symbol="2" />
                <CalcButton buttonId="three" symbol="3" />
                <CalcButton buttonId="equals" symbol="=" />
                <CalcButton buttonId="zero" symbol="0" />
                <CalcButton buttonId="decimal" symbol="." />
            </div>
        )
    }
}

export default ButtonBox;