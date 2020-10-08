import React from "react";
import { connect } from "react-redux";
import { decreaseTime, increaseTime} from "../redux/actions";

class SessionController extends React.Component {
    constructor(props) {
        super(props);
        this.handleDecreaseClick = this.handleDecreaseClick.bind(this)
        this.handleIncreaseClick = this.handleIncreaseClick.bind(this)
    }

    handleDecreaseClick() {
        this.props.decreaseTime('Session')
    }

    handleIncreaseClick() {
        this.props.increaseTime('Session')
    }

    render() {
        return (
            <div id="session-controller">
                <div id="session-title">
                    <h3>Session Length</h3>
                </div>
                <div id="session-info">
                    <div className="btn-minus" id="session-minus">
                        <button onClick={this.handleDecreaseClick}>-</button>
                    </div>
                    <div id="session-length">
                        {this.props.sessionLength}
                    </div>
                    <div className="btn-plus" id="session-plus">
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

export default connect(mapStateToProps, { decreaseTime, increaseTime })(SessionController);