import {style} from '@vanilla-extract/css';

export const classes = {
  root: style({
    width: '100%',
    height: '100vh',
    margin: '0 auto',
  }),
  main: style({
    height: 'calc(100vh - 90px)',
  }),
  footer: style({
    height: 30,
  }),
};
