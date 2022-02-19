import React from "react";

class Button extends React.Component {
    render() {
        return (
            <div className={`column-${this.props.cols}`}>
                <button
                    className="cal-button"
                    onClick={() => {this.props.action(this.props.symbol);}}>
                    {this.props.symbol}
                </button>
            </div>
        );

    }
}

export default Button;











