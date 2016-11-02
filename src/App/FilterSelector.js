import React, {Component} from 'react';
import filterOptions from './filter-selector/filter-options.js'

export default class FilterSelector extends Component {
    
    _onClick(){
        this.props.dispatch({type: 'SET_FILTER', value: filterOptions[this.props.name]});
    }

    _camanAttribute(){
        let attr = '';
        const options = filterOptions[this.props.name].options;
        for(let prop in options){
            attr += prop + '("' + options[prop] + '") ';
        }
        return attr.trim();
    }
    
    render() {
        const { displayName } = filterOptions[this.props.name]
        return (
            <a className="little-box-link" onClick={this._onClick.bind(this)}>
                <div className="little-box">
                    <img src="img/girl_sm.jpg"
                         data-caman={this._camanAttribute()}/>
                </div>
                <div>{displayName}</div>
            </a>
        );
    }
}