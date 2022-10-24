import React, { Component, Fragment } from 'react'
class Counter extends Component {
   
    render() { 
        console.log('props', this.props)
        return (
            <div>
                <span className='badge badge-warning m-2' style={{ color : 'red'}}>{this.props.counter.value}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-small m-2">delete</button>
            </div>
        )
    }
}
 
export default Counter;