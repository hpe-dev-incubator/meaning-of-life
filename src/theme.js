// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP
import { css } from 'styled-components';

const isObject = item => (
  item && typeof item === 'object' && !Array.isArray(item));

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

const baseSpacing = 24;
const scale = 6;
const baseFontSize = baseSpacing * 0.75;
const fontScale = baseSpacing / scale;
// const borderWidth = 2;

const fontSizing = factor => ({
  size: `${baseFontSize + (factor * fontScale)}px`,
  height: `${baseSpacing + (factor * fontScale)}px`,
  // maxWidth chosen to be ~50 characters wide
  // see: https://ux.stackexchange.com/a/34125
  maxWidth: `${baseSpacing * (baseFontSize + (factor * fontScale))}px`,
});

const accentColors = ['#2AD2C9', '#614767', '#ff8d6d'];
const neutralColors = ['#1F2532', '#232a37', '#5F7A76', '#80746E', '#767676', '#516778'];
const statusColors = {
  critical: '#F04953',
  error: '#F04953',
  warning: '#FFD144',
  ok: '#01a982',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};

const colors = {
  brand: '#29f3bc',
  purple: '#9060EB',
  focus: accentColors[0],
};

const colorArray = (array, prefix) => (
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  }));

colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach((color) => {
  colors[`status-${color}`] = statusColors[color];
});

export const hpeDesign = deepFreeze({
  global: {
    colors,
    font: {
      family: "'Metric', Arial, sans-serif",
      face: `
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
        }

        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format('woff');
          font-weight: 700;
        }

        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format('woff');
          font-weight: 600;
        }

        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }
      `,
    },
  },
  anchor: {
    textDecoration: 'none',
    color: {
      dark: colors.brand,
      light: colors.brand,
    },
    extend: 'font-weight: 600;',
  },
  button: {
    border: {
      radius: '0px',
    },
    colors: {
      accent: '#ff8d6d',
      secondary: 'rgba(51,51,51,0.6)',
    },
    extend: `
      letter-spacing: 0.04167em;
      transition: transform 0.15s ease-out;
      &:hover { transform: scale(1.2); }
    `,
  },
  checkBox: {
    icon: {
      extend: css`
        box-sizing: border-box;
        position: absolute;
        top: 0px;
        left: 0px;
        width: ${props => props.theme.checkBox.size};
        height: ${props => props.theme.checkBox.size};
      `,
    },
  },
  paragraph: {
    small: { ...fontSizing(-1) },
    medium: { ...fontSizing(0) },
    large: { ...fontSizing(1) },
    xlarge: { ...fontSizing(3.5) },
    xxlarge: { ...fontSizing(4) },
    extend: 'font-weight: 100;',
  },
  text: {
    small: { ...fontSizing(-1) },
    medium: { ...fontSizing(0) },
    large: { ...fontSizing(1) },
    xlarge: { ...fontSizing(3.5) },
    xxlarge: { ...fontSizing(4) },
  },
  heading: {
    level: {
      1: {
        small: { ...fontSizing(4) },
        medium: { ...fontSizing(8) },
        large: { ...fontSizing(44) },
        xlarge: { ...fontSizing(120) },
      },
      2: {
        small: { ...fontSizing(2) },
        medium: { ...fontSizing(4) },
        large: { ...fontSizing(8) },
        xlarge: { ...fontSizing(12) },
      },
      3: {
        small: { ...fontSizing(1) },
        medium: { ...fontSizing(1) },
        large: { ...fontSizing(4) },
        xlarge: { ...fontSizing(6) },
      },
      4: {
        small: { ...fontSizing(0) },
        medium: { ...fontSizing(0) },
        large: { ...fontSizing(0) },
        xlarge: { ...fontSizing(0) },
      },
    },
    responsiveBreakpoint: 'small',
    weight: 700,
  },
  icon: {
    colors,
  },
});

export default hpeDesign;
