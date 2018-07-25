import React, {Component} from 'react';

import data from './data.json';
import Result from './Result'
import './style.css'

// import Btn from './Btn'

class App extends Component {

    constructor(props) {
        super(props);
        this.arr = [];
        this.countCells = 0;

        this.state = {
            isOpen: false
        }
    }

    handleClickRes = () => {
        this.arr = [];
        this.countCells = 0;
        for (var prop in data) {
            this.arr.push(data[prop]);
        }
        this.toCountCells(this.arr);
    };

    toCountCells = (arr) => {
        let maxArrVal = 0,
            indexMaxArrVal = 0;

        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] > maxArrVal) {
                maxArrVal = arr[i];
                indexMaxArrVal = i;
            }
        }

        let indexLeft = 0,
            indexRight = arr.length - 1,
            valLeft = 0,
            valRight = 0,
            maxLeft = 0,
            maxRigh = 0;

        while (indexLeft !== indexMaxArrVal) {
            if (arr[indexLeft] < valLeft || arr[indexLeft] < maxLeft) {
                this.countCells += maxLeft - arr[indexLeft];
                valLeft = arr[indexLeft];
            } else {
                maxLeft = arr[indexLeft];
            }

            indexLeft = indexLeft + 1;
        }

        while (indexRight !== indexMaxArrVal) {

            if (arr[indexRight] < valRight || arr[indexRight] < maxRigh) {
                this.countCells += maxRigh - arr[indexRight];
                valRight = arr[indexRight];
            } else {
                maxRigh = arr[indexRight];
            }

            indexRight = indexRight - 1;
        }
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getBody = () => {
        if (this.state.isOpen) {
            this.handleClickRes();
            return (
                <Result arr = {this.arr} cells = {this.countCells}/>
            )
        }
        else {
            return null
        }
    };

    render() {
        return (
            <div className='container'>
                <button className='btn-main' onClick={this.toggleOpen}>Print</button>
                {this.getBody()}
            </div>
        );
    }


}

export default App;
