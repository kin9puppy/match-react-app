import React, {Component} from 'react';
import FilterSelector from './App/FilterSelector.js'
import MainImage from './App/MainImage.js'

export default class App extends Component {

    render() { 
        const { dispatch, store } = this.props;
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="header">
                            <img src="img/match_logo.png"/>
                            <h2>Match - Filter Maker</h2> 
                        </div>
                    </div>
                    <div id="user-fullname" className="row name-header">
                        Jordan Baker
                    </div>
                    <div className="row main">
                        <MainImage
                            store={store}
                        />
                        <div className="col-md-8 filter-options">
                            <div className="row">
                                <FilterSelector
                                    dispatch={dispatch}
                                    name='none'
                                />
                                <FilterSelector
                                    dispatch={dispatch}
                                    name='pomegranate'
                                />
                                <FilterSelector 
                                    dispatch={dispatch}
                                    name='millenium_q12'
                                />
                                <FilterSelector
                                    dispatch={dispatch}
                                    name='downwire'
                                />
                                <FilterSelector
                                    dispatch={dispatch}
                                    name='colawash'
                                />
                                <FilterSelector
                                    dispatch={dispatch}
                                    name='honeycrisp'
                                />
                            </div>
                            <div className="row about">
                                <div><b>Age:</b> 29</div>
                                <div><b>Gender:</b> Female</div>
                                <div><b>City:</b> ADK, NY</div>
                                <div><b>Country:</b> United States</div>
                                <div><b>Interests:</b> Golf, Jogging, Wine</div>
                                <div><b>Pets:</b> My dog Bruno</div>
                                <div><b>About me:</b> I am a super athletic girl who likes to have fun, a little cynical and am looking for a guy who is fun and likes to be outdoors.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
