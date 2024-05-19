import {style} from '@vanilla-extract/css';

export const classes = {
  header: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }),
  top: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  logo: style({
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    gap: 16,
  }),
  title_container: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
  }),
  title: style({
    fontSize: 24,
    fontWeight: 600,
  }),
  bottom: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  }),
};
