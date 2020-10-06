import React from "react";
import Display from "./display"
import ButtonBox from "./buttonBox"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <main>
                <div id='calc-box'>
                    <Display />
                    <ButtonBox />
                </div>
            </main>
        )
    }
}

export default Calculator;