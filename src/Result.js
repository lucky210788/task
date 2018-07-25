import React, {Component} from 'react';


import './style.css'

class Result extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        const {cells, arr} = this.props;
        return (
            <div className='result-wrap'>
                <p>Массив - {arr}</p>
                <p>К-во ячеек с водой - {cells}</p>
            </div>
        );
    }
}

export default Result;
