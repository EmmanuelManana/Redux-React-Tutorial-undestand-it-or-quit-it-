import React from 'react';
//react-redux
import { connect } from 'react-redux'


class Counter extends React.Component {

    decrement = () =>{
        this.props.dispatch({type : "DECREMENT"});
    }

    increment = () => {
        this.props.dispatch({type : "INCREMENT"});
    }

    render(){
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                <button onClick={this.decrement}>-</button>
                <span className="count">{this.props.count}</span>
                <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return  {
        count : state.count
    };
}

export default connect(mapStateToProps)(Counter);