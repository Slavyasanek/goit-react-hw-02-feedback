import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                {this.props.options.map(option => {
                    return (
                        <button
                        type='button'
                        onClick={() => this.props.onLeaveFeedback(option)}
                        key={option}
                        >{option}</button>
                    )
                })}
            </div>
        )
    }
}

export default FeedbackOptions;