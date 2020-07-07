import React, { Component } from 'react'

export class Colors extends Component {
    render() {
        const {colors} = this.props;
        return (
            <div className="colors">
                {
                    colors.map((color,index) =>(
                        <button key={index} style={{background: color}}></button>
                    ))
                }
            </div>
        )
    }
}

export default Colors
