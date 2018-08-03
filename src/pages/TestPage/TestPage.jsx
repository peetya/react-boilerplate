import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateNrOfClicks } from '../../actions/test.action';

class TestPage extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();

        const { dispatch } = this.props;

        dispatch(updateNrOfClicks());
    }

    render() {
        const { numberOfClicks } = this.props;

        return (
            <div>
                <h1>Test page</h1>
                <p>You clicked on the button {numberOfClicks} times.</p>
                <button type="button" className="btn btn-primary" onClick={this.onClick}>Test</button>
            </div>
        );
    }
}

TestPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    numberOfClicks: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    numberOfClicks: state.test.numberOfClicks,
});

export default connect(mapStateToProps)(TestPage);
