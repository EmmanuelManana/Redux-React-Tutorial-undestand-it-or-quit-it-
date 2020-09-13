import React from 'react';
//react-redux
import { connect } from 'react-redux'
// dispacth functions
import { increment, decrement, reset } from '../actions/actions'



class Counter extends React.Component {

    decrement = () =>{
        this.props.decrement()
    }

    increment = () => {
        this.props.increment()
    }

    reset = () => {
        this.props.reset()
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
                <button onClick={this.reset} id="reset">reset</button>
            </div>
        )
    }
}
//map state, from the store to props
const mapStateToProps = (state) =>{
    return  {
        count : state.count
    };
}

// map dispatch actions to props
//functions returning actions to dispatch
const mapDispatchToProps = {
    increment,
    decrement,
    reset
}

// connect = high order function(returns a functions)
// connects component to the store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
