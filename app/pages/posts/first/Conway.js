import React, { Component } from 'react';

const genKernel = () => {
  const kernel = Array.from({ length: 3 * 3 }, () => 1);
  kernel[4] = 0; // center of array.
  return kernel;
};

const generateNewBoard = (M, N, prob) => Array.from({
  length: M * N,
}, () => (Math.random() > prob ? 1 : 0));

const countPopulation = board => board.reduce((prev, curr) => prev + curr, 0);

class Conway extends Component {
  constructor(props) {
    super(props);
    this.state = {
      M: 50,
      N: 50,
      stepsElapsed: 0,
      stepLength: 100,
      prob: 0.75,
      paused: false,
      kernel: genKernel(),
    };
    const board = generateNewBoard(this.state.M, this.state.N, this.state.prob);
    this.state.board = board;
    this.state.population = countPopulation(board);
  }

  componentDidMount() {
    this.timer = setInterval(this.updateBoard, this.state.stepLength);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  getBoard() {
    return this.state.board.map(val => <div className={`cell${val}`} />);
  }

  updateBoard = () => {
    const M = this.state.M;
    const N = this.state.N;
    const kernel = this.state.kernel;
    const board = this.state.board;
    const kn = 3;
    const newboard = new Array(M * N);

    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        let sum = 0;
        for (let ki = Math.max(i - 1, 0); ki <= Math.min(i + 1, M - 1); ki++) {
          for (let kj = Math.max(j - 1, 0); kj <= Math.min(j + 1, N - 1); kj++) {
            sum += kernel[(((i - ki) + 1) * kn) + ((j - kj) + 1)] && board[(ki * M) + kj];
          }
        }
        if ((board[(i * M) + j] === 1) && (sum < 2 || sum > 3)) {
          newboard[(i * M) + j] = 0;
        } else if (board[(i * M) + j] === 0 && sum === 3) {
          newboard[(i * M) + j] = 1;
        } else {
          newboard[(i * M) + j] = board[(i * M) + j];
        }
      }
    }
    this.setState(state => ({
      stepsElapsed: state.stepsElapsed + 1,
      board: newboard,
    }));
  }

  pauseHandler = () => {
    if (this.state.paused) {
      this.timer = setInterval(this.updateBoard, this.state.stepLength);
    } else {
      clearInterval(this.timer);
    }
    this.setState({
      paused: !this.state.paused,
    });
  }

  resetHandler = () => {
    this.setState(state => ({
      board: generateNewBoard(state.M, state.N, state.prob),
    }));
  }

  render() {
    return (
      <div className="conway">
        <div className="controls">
          <button onClick={this.pauseHandler}>{this.state.paused ? 'Resume' : 'Pause'}</button>
          <button onClick={this.resetHandler}>Reset</button>
          <div className="steps">Steps: {this.state.stepsElapsed}</div>
        </div>
        <div className="board-container">
          <div className="board">
            {this.getBoard()}
          </div>
        </div>
      </div>
    );
  }
}

export default Conway;
