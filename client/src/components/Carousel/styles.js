import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Root = styled('div')(({ theme }) => ({
  // a must if you want to set arrows, indicator as absolute
  position: 'relative',
  width: '100%',
}));

export const LeftButton = styled(Button)(({ theme }) => ({
  // a must if you want to set arrows, indicator as absolute
  display: 'none',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [theme.breakpoints.up('sm')]: {
    display: 'inline-flex',
  },
  left: 0,
  [theme.breakpoints.up('lg')]: {
    left: -64,
  },
}));

export const RightButton = styled(Button)(({ theme }) => ({
  // a must if you want to set arrows, indicator as absolute
  display: 'none',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [theme.breakpoints.up('sm')]: {
    display: 'inline-flex',
  },
  right: 0,
  [theme.breakpoints.up('lg')]: {
    right: -64,
  },
}));

export const Slide = styled('div')(({ theme }) => ({
  // a must if you want to set arrows, indicator as absolute
  perspective: 1000, // create perspective
  overflow: 'hidden',
  // relative is a must if you want to create overlapping layers in children
  position: 'relative',
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(10),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  display: 'block',
  position: 'absolute',
  zIndex: 10,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  marginLeft: '12%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: '4%',
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, san-serif',
  fontWeight: 900,
  position: 'absolute',
  color: theme.palette.common.white,
  padding: '0 8px',
  transform: 'rotateY(45deg)',
  lineHeight: 1.2,
  [theme.breakpoints.up('sm')]: {
    padding: '0 16px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 24px',
  },
  top: 20,
  left: '20%',
  height: '40%',
  fontSize: 40,
  zIndex: 1,
  background: 'linear-gradient(#800080, #ffc0cb)',
  [theme.breakpoints.up('sm')]: {
    top: 40,
    fontSize: 72,
  },
  [theme.breakpoints.up('md')]: {
    top: 52,
    fontSize: 72,
  },
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, san-serif',
  fontWeight: 900,
  position: 'absolute',
  color: theme.palette.common.white,
  padding: '0 8px',
  transform: 'rotateY(45deg)',
  lineHeight: 1.2,
  [theme.breakpoints.up('sm')]: {
    padding: '0 16px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 24px',
  },
  top: 60,
  left: '0%',
  height: '52%',
  fontSize: 56,
  zIndex: 2,
  background: 'linear-gradient(#8a2378, #e94057, #f27121)',
  [theme.breakpoints.up('sm')]: {
    top: 112,
    left: '6%',
    fontSize: 96,
  },
  [theme.breakpoints.up('md')]: {
    top: 128,
    fontSize: 104,
  },
}));
