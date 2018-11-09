import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { curveBasis } from 'd3-shape';
import {
  LineChart, Line, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';
import { TweenMax, Power1 } from 'gsap';

const LinesLayout = styled(ResponsiveContainer)`
  svg {
    /* Force video card acceleration on animation. */
    transform: translateZ(0);
  }
`;

export default class Lines extends Component {
  constructor(props) {
    super(props);
    const state = {};
    props.lineXPosStart.map((line, index) => state[`line${index + 1}`] = line); // eslint-disable-line
    this.state = { ...state };
    this.animate = this.animate.bind(this);
    this.createLineAnim = this.createLineAnim.bind(this);
    this.lineAnims = [];
  }

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    // Prevent the state from updating after the component
    // has unmounted.
    this.lineAnims.map(tween => tween.kill());
  }

  createLineAnim(lineStartPos, index) {
    const linesFrom = lineStartPos.map(line => line);
    // TODO: moar random.
    const linesTo = lineStartPos.map((line) => {
      if (line === 50) return line;
      if (line === 49) return 51;

      const oppositePoint = 100 - line;
      if (oppositePoint > 50) return Math.floor((Math.random() * 5) + oppositePoint);
      if (oppositePoint < 50) return Math.floor(oppositePoint - (Math.random() * 5));

      return oppositePoint;
    });
    const duration = (Math.random() * 12) + 5;
    const lineAnim = TweenMax.to(linesFrom, duration, linesTo);

    lineAnim.vars.ease = Power1.easeInOut;
    lineAnim.delay((Math.random() * 1));
    lineAnim.repeat(-1).yoyo(true);
    linesTo.onUpdate = () => {
      this.setState({
        [`line${index}`]: linesFrom.map(lineX => lineX),
      });
    };

    // Push anim to array to handling unmounting.
    this.lineAnims.push(lineAnim);
  }

  animate() {
    const {
      line1, line2, line3, line4,
    } = this.state;
    [line1, line2, line3, line4].map((line, index) =>
      this.createLineAnim(line, index + 1));
  }

  render() {
    const { layout } = this.props;
    const {
      line1, line2, line3, line4,
    } = this.state;
    const curve = curveBasis;
    const data = line1.map((line1X, index) => ({
      line1X,
      line2X: line2[index],
      line3X: line3[index],
      line4X: line4[index],
    }));
    const xAxis = layout === 'vertical'
      ? <XAxis hide type="number" domain={[0, 100]} />
      : <XAxis hide type="category" />;
    const yAxis = layout === 'vertical'
      ? <YAxis hide type="category" />
      : <YAxis hide type="number" domain={[0, 100]} />;
    return (
      <LinesLayout>
        <LineChart layout={layout} data={data}>
          {xAxis}
          {yAxis}
          <Line
            isAnimationActive={false}
            dot={false}
            type={curve}
            dataKey="line1X"
            stroke="#C0FF00"
            strokeWidth="8"
          />
          <Line
            isAnimationActive={false}
            dot={false}
            type={curve}
            dataKey="line2X"
            stroke="#7D4CDB"
            strokeWidth="8"
          />
          <Line
            isAnimationActive={false}
            dot={false}
            type={curve}
            dataKey="line3X"
            stroke="#00F4BB"
            strokeWidth="8"
          />
          <Line
            isAnimationActive={false}
            dot={false}
            type={curve}
            dataKey="line4X"
            stroke="#FF5271"
            strokeWidth="8"
          />
        </LineChart>
      </LinesLayout>
    );
  }
}

Lines.defaultProps = {
  lineXPosStart: [
    [50, 50, 30, 70, 10, 65, 30, 50, 50],
    [50, 50, 20, 80, 15, 55, 33, 50, 50],
    [50, 50, 10, 100, 5, 75, 20, 50, 50],
    [50, 50, 22, 90, 3, 90, 10, 50, 50],
  ],
  layout: 'vertical',
};

Lines.propTypes = {
  lineXPosStart: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
};
