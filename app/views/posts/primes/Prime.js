import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Worker from 'worker-loader!./worker';

class Prime extends Component {

  static defaultProps = { width: 1000, height: 1000 };

  constructor(props) {
    super(props);
    this.state = {
      r: 0.5,
      points: 1000000,
      primes: [],
      center: {
        x: props.width / 2,
        y: props.height / 2,
      },
      workers: 8,
      sections: 1,
      step: 0,
      time: 0,
      done: false,
    };
  }

  componentWillMount() {
    this.runWorkers();
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({
      step: this.state.step + 1,
    }), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getSVG() {
    const twoPi = 2 * Math.PI;
    const xOffset = this.state.center.x / Math.sqrt(this.state.points);
    const yOffset = this.state.center.y / Math.sqrt(this.state.points);
    return (
      <svg width={this.props.width} height={this.props.height}>
        {this.state.primes.map((i) => {
          const sqi = Math.sqrt(i);
          const x = -Math.cos(sqi * twoPi) * sqi * xOffset;
          const y = Math.sin(sqi * twoPi) * sqi * yOffset;
          return (
            <circle
              key={`${x}${y}`}
              cx={this.state.center.x + x}
              cy={this.state.center.y + y}
              r={this.state.r}
              fill="red" />
          );
        })
        }
      </svg>
    );
  }

  fillCanvas() {
    const twoPi = 2 * Math.PI;
    const xOffset = this.state.center.x / Math.sqrt(this.state.points);
    const yOffset = this.state.center.y / Math.sqrt(this.state.points);

    const ctx = this.canvas.getContext('2d');
    ctx.canvas.width = this.props.width;
    ctx.canvas.height = this.props.height;
    ctx.fillStyle = 'black'; // "rgba(255, 0, 0, 0.95)";

    this.state.primes.forEach((i) => {
      const sqi = Math.sqrt(i);
      const x = this.state.center.x - (Math.cos(sqi * twoPi) * (sqi * xOffset));
      const y = this.state.center.y + (Math.sin(sqi * twoPi) * (sqi * yOffset));
      ctx.fillRect(x, y, this.state.r, this.state.r);
    });
  }
/*
  fillUlamCanvas() {
    const twoPi = 2 * Math.PI;
    const x_offset = this.state.center.x / Math.sqrt(this.state.points);
    const y_offset = this.state.center.y / Math.sqrt(this.state.points);

    const offset = this.props.width % 2 === 0 ? 0 : 1; // even or odd
    const roots = new Array(Math.ceil(Math.sqrt(this.state.points)))
      .fill().map((e, i) => i + 1)
      .filter(i => i % 2 === offset);
    const squares = roots.map(i => i * i);
    // console.log(roots, squares);
    this.state.primes.forEach((p) => {
      const rank = Math.min(...squares.filter(s => s > p));
      const sideL = Math.pow(Math.sqrt(rank) - 2, 2);
      // console.log(rank, sideL, Math.sqrt(rank), p - sideL);
    });

    var ctx = this.ulam.getContext('2d');
    ctx.canvas.width  = this.props.width;
    ctx.canvas.height = this.props.height;
    ctx.fillStyle = "black"; // "rgba(255, 0, 0, 0.95)";


    this.state.primes.forEach((i) => {
      const sqi = 50*Math.log(i);
      const x = - Math.cos(sqi * twoPi) * sqi * x_offset;
      const y = Math.sin(sqi * twoPi) * sqi * y_offset;
      ctx.fillRect(Math.round(this.state.center.x + x),
        Math.round(this.state.center.y + y), this.state.r, this.state.r);
    })
  } */


  runWorkers = () => {
    let numbersToCheck = this.state.points;
    const buffer = new ArrayBuffer(numbersToCheck);
    performance.mark('start');
    let offset = 0;
    let primes = [];
    while (numbersToCheck) {
      const blockLen = Math.min(numbersToCheck, this.state.points / this.state.workers);
      const worker = new Worker();
      worker.onmessage = (msg) => {
        primes = [...primes, ...msg.data.primes];
        if (msg.data.offset + msg.data.length === buffer.byteLength) {
          performance.mark('end');
          performance.measure('duration', 'start', 'end');
          const timeTaken = performance.getEntriesByName('duration')[0].duration;
          // console.log(performance.getEntriesByName('duration'));
          this.setState({
            time: timeTaken,
            done: true,
            primes,
          });
          clearInterval(this.timer);
          this.fillCanvas();
          // this.fillUlamCanvas();
        }
        if (this.state.done && primes.length > this.state.primes.length) {
          this.setState({
            primes,
          });
          this.fillCanvas();
          // this.fillUlamCanvas();
        }
      };
      worker.postMessage({
        offset,
        length: blockLen,
      });
      numbersToCheck -= blockLen;
      offset += blockLen;
    }
  };

  render() {
    return (
      <div className="sacks-spiral">
        <h1> Sacks Spiral </h1>
        {this.state.done ? <p>{this.state.primes.length} primes found under {this.state.points} in {this.state.time.toFixed(2)} milliseconds.</p> : <div className="wait"><p> Calculating {'...'.substr(0, this.state.step % 6)} </p></div>}
        {this.state.done ? this.getSVG() : null }
        {this.state.done ? (<canvas ref={(input) => { this.canvas = input; }} />) : null}
        <h1> Ulam Spiral </h1>
        {/* this.state.done ? (<canvas ref={(input) => { this.ulam = input; }} />) : null */}

      </div>
    );
  }
}

Prime.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Prime;
