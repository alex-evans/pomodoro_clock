import React from "react";
import { connect } from "react-redux";
import { decreaseTime, increaseTime} from "../redux/actions";

class BreakController extends React.Component {
    constructor(props) {
        super(props);
        this.handleDecreaseClick = this.handleDecreaseClick.bind(this)
        this.handleIncreaseClick = this.handleIncreaseClick.bind(this)
    }

    handleDecreaseClick() {
        this.props.decreaseTime('Break')
    }

    handleIncreaseClick() {
        this.props.increaseTime('Break')
    }

    render() {
        return (
            <div id="break-controller">
                <div id="break-label">
                    <h3>Break Length</h3>
                </div>
                <div id="break-info">
                    <div className="btn-minus" id="break-decrement">
                        <button onClick={this.handleDecreaseClick}>-</button>
                    </div>
                    <div id="break-length">
                        {this.props.breakLength}
                    </div>
                    <div className="btn-plus" id="break-increment">
                        <button onClick={this.handleIncreaseClick}>+</button>
                    </div>
                </div>                    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { decreaseTime, increaseTime })(BreakController);