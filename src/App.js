import React, {Component} from 'react';

class App extends Component {

    _onClick(){
        this.props.dispatch({type: 'click'});
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="header">
                            <img src="img/match_logo.png"/>
                            <h2>Match Halloween</h2>
                        </div>
                    </div>
                    <div className="row name-header" onClick={this._onClick.bind(this)}>
                        Jordan Baker {this.props.store.count}
                    </div>
                    <div className="row main">
                        <div className="col-md-4 main-img">
                            <img src="img/girl.jpg" data-caman="saturation(-10) brightness(20) vignette('10%')"/>
                        </div>
                        <div className="col-md-8 filter-options">
                            <div className="row">
                                <a className="little-box-link">
                                    <div className="little-box">
                                        <img src="img/girl.jpg"/>
                                    </div>
                                    <div>No Filter</div>
                                </a>
                                <a className="little-box-link">
                                    <div className="little-box">
                                        <img src="img/girl.jpg"
                                             data-caman="saturation(-10) brightness(20) vignette('10%')"/>
                                    </div>
                                    <div>Airy</div>
                                </a>
                                <a className="little-box-link">
                                    <div className="little-box">
                                        <img src="img/girl.jpg"
                                             data-caman="saturation(20) brightness(-10) vignette('30%')"/>
                                    </div>
                                    <div>Dark</div>
                                </a>
                                <a className="little-box-link">
                                    <div className="little-box">
                                        <img src="img/girl.jpg"
                                             data-caman="saturation(-10) brightness(20) vignette('10%')"/>
                                    </div>
                                    <div>Airy</div>
                                </a>
                                <a className="little-box-link">
                                    <div className="little-box">
                                        <img src="img/girl.jpg"
                                             data-caman="saturation(-10) brightness(20) vignette('10%')"/>
                                    </div>
                                    <div>Airy</div>
                                </a>
                                <a className="little-box-link">
                                    <div className="little-box">
                                        <img src="img/girl.jpg"
                                             data-caman="saturation(-10) brightness(20) vignette('10%')"/>
                                    </div>
                                    <div>Airy</div>
                                </a>

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

export default App;
