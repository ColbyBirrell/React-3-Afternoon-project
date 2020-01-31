import React, { Component } from 'react'
import data from '../data'
import UpdateState from './UpdateState'
import '../App.css';

class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: data,
            index: 0
        }
    }

    indexBack = () => {
        this.setState({ index: this.state.index - 1 })
        if (this.state.index === 0) {
            this.setState({ index: data.length - 1 })
        }
    }

    indexForward = () => {
        this.setState({ index: this.state.index + 1 })
        if (this.state.index === data.length - 1) {
            this.setState({ index: 0 })
        }
    }

    render() {

        const employeeList = this.state.employees.map((element) => {
            return <UpdateState employee={element} key={element.id} />
        })

        return (
            <div className='childBox'>
                {employeeList[this.state.index]}
                <button className='prev' onClick={this.indexBack}>Prev</button>
                <button className='forward' onClick={this.indexForward}>Next</button>
            </div>
        )

    }


}

export default Child