import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, width, height);
}

class App extends React.Component {
    constructor() {
      super();
      this.state = { x: 200, y: 450 };
    }

    componentDidMount() {
      window.addEventListener('keyup', this.keyCodes.bind(this));
      this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    keyCodes(e) {
      if(e.keyCode === 38 && this.state.y > 0) {
        this.setState({y: this.state.y - 50})
      }
      if(e.keyCode === 40 && this.state.y < 450) {
        this.setState({y: this.state.y + 50})
      }
      if(e.keyCode === 37 && this.state.x > 0) {
        this.setState({x: this.state.x - 50})
      }
      if(e.keyCode === 39 && this.state.x < 450) {
        this.setState({x: this.state.x + 50})
      }
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 500, 500);
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 500, 500);
        rect({ctx, x: this.state.x, y: this.state.y, width: 50, height: 50});
    }

    render() {
      this.updateCanvas.bind(this);
        return (
          <div className='App'>
            <canvas onKeyUp={(e)=>this.mouseOverEvent(e)}
                    ref="canvas"
                    width={500}
                    height={500}/>
          </div>
        );
    }
}

export default App;
