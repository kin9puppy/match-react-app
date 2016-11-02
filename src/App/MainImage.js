/*global Caman b:true*/
/*eslint no-undef: "error"*/
import React, {Component} from 'react';

export default class MainImage extends Component {
    
    componentDidUpdate() {
        const {options} = this.props.store.filter
        Caman("#main-img", "img/girl.jpg", function () {
            for(var prop in options){
                console.log(prop, options[prop]);
                this[prop](options[prop]);
            }
            this.revert();
            this.render();
        });
    }
    
    render(){
        return (
            <div className="col-md-4 main-img">
                <img id="main-img" src="img/girl.jpg" alt="main picture" data-filter={this.props.store.filter.name}/>
            </div>
        );
    }

}