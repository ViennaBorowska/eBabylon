import React from 'react';
// import Button from '@mui/material/Button';
// import SaveIcon from '@mui/icons-material/Save';
import CheckoutButton from '../../components/CheckoutButton';
import Container from '@mui/material/Container';
// import SideCart from "../../components/SideCart";
// import './index.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import DailyInteger from './DailyInteger';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: '1.75rem',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
  },
}));

function createData(image, name, descr, size, quantity, totalPrice) {
  return { image, name, descr, size, quantity, totalPrice };
}

const rows = [
  createData(
    'https://dynamic.zacdn.com/TIqU0jk90hPxnuO44NnNXO4B1AU=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/fila-4662-609589-1.jpg',
    'Henry T-Shirt',
    'White, Screen',
    'S',
    2,
    '$39.98'
  ),
  createData(
    'https://www.hybridoutfitters.com/wp-content/uploads/2019/11/147.jpg',
    'Stripe Tee',
    'ocean, stripe',
    'M',
    3,
    '$100'
  ),
  createData(
    'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/09/18/goods-first-img/1568766431491927776.jpg',
    'Sweater Hood',
    'Light Brown, Wool',
    'S',
    1,
    '$39.99'
  ),
  createData(
    'https://l.lnwfile.com/_resize_images/600/600/w1/nh/5z.jpg',
    'Jackboot',
    'Brown, Leather',
    10.5,
    1,
    '$69.99'
  ),
];

const Checkout = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box pt={{ xs: 2, sm: 4, md: 6 }}>
          <StyledTypography variant={'h1'} gutterBottom>
            Shopping Cart.
          </StyledTypography>
          <TableContainer>
            <Table styles={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total Price</TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <Box display={'flex'} alignItems={'center'}>
                        <Box width={80} height={80}>
                          <img
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                            alt={row.name}
                            src={row.image}
                          />
                        </Box>
                        <Box ml={2}>
                          <p
                            className={{
                              fontFamily:
                                '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                              fontWeight: 'bold',
                              fontSize: 16,
                              margin: '0 0 8px 0',
                            }}>
                            {row.name}
                          </p>
                          <span>{row.descr}</span>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{row.totalPrice}</TableCell>
                    <TableCell>
                      <DailyInteger>{row.quantity}</DailyInteger>
                    </TableCell>
                    <TableCell>{row.totalPrice}</TableCell>
                    <TableCell>
                      <IconButton>
                        <Close />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <CheckoutButton />
      </Container>
    </>
  );
};

export default Checkout;
