import React, { Component } from 'react';

export class TodoRow extends Component {
    render = () =>
        <tr>
            <td>
                { this.props.item.action}
            </td>
            <td>
                <input type="checkbox" checked={ this.props.item.done } onChange={ () => this.props.callback(this.props.item) } /> 
            </td>
            <td>
                <button className="btn btn-primary mt-1" onClick={ () => this.props.callbackDeleteRow(this.props.item) }>
                    <span class="oi oi-trash"></span>
                </button>
            </td>
        </tr>
}