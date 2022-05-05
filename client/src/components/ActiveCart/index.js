import React from 'react';
import { TableBody } from '@mui/material';
import CartItem from '../SingleCartItem';
import { Button } from '@mui/material';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../state/store/provider';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import Typography from '@mui/material/Typography';

import './index.css';

export default function ActiveCart({ cart, total }) {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }
  console.log('From ActiveCart', cart);
  return (
    <>
      <TableBody>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </TableBody>

      <br></br>

      <Typography className="total-figure">Total: £ {total}</Typography>

      <br></br>
      {Auth.loggedIn() ? (
        <Button className="check-out-button" variant="contained" href="../checkout">
          Checkout
        </Button>
      ) : (
        <Typography variant="caption" display="block" gutterBottom>
          Please log in to check out
        </Typography>
      )}
    </>
  );
}
