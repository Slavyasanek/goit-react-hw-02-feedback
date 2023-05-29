import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {

    static propTypes = {
        options: PropTypes.shape({
            good: PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
            neutral: PropTypes.number.isRequired,
        }).isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    }

    render() {
        return (
            <ul>
                {Object.entries(this.props.options).map(([key, value]) => {
                    return (<li key={key}>{key} : {value}</li>)
                })}
                <li key="total">Total : {this.props.total}</li>
                <li key="positivePercantage">Positive percantage : {this.props.positivePercentage} %</li>
            </ul>
        )
    }
}

export default Statistics;