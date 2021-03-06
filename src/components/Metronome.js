import React, { Component } from 'react';
import click1 from '../sound/click1.wav';
import click2 from '../sound/click2.wav';

class Metronome extends Component {
    constructor(props){
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4,
        };

        //create audio object
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }

    handleBpmChange = event => {
        const bpm = event.target.value;
        this.setState({bpm});
    }

    startStop = () => {
        this.click1.play();
    }

    render(){
        const { playing, bpm } = this.state;

        return(
            <div className="metronome">
                <div className="bpm-slider">
                    <div> {bpm}  BPM</div>
                    <input type="range" min="60" max = "240" value={bpm} onChange={this.handleBpmChange}></input>
                    <button onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
                </div>
            </div>
        );
    }
}


export default Metronome;