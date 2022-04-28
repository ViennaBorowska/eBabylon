import Button from '@mui/material/Button';
import ADD_TO_CART from '../../state/store/actions';
import { useStoreContext } from '../../state/store/provider';

import MainImage from '../../components/MainImage';
import Info from '../../components/Info';
import ImageGrid from '../../components/ImageGrid';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';

const images = [
  'https://img01.ztat.net/article/spp-media-p1/a85e287c242334f18d150a38fc36a287/5ee3d1a1799a45498b95d63c317ce0c9.jpg?imwidth=156',
  'https://img01.ztat.net/article/spp-media-p1/9457cce30487353aad4cc02d8e24d331/04eea11f09d24d5cba8ca71cab051adc.jpg?imwidth=156',
  'https://img01.ztat.net/article/spp-media-p1/ba17cbe7964d376a97ef5732e366637f/c871bbb5be8b4629b3f310f28b26ebdb.jpg?imwidth=156',
];

const product = {
  title: 'G-Star',
  description: 'ROVIC ZIP 3D STRAIGHT TAPERED - Cargo trousers',
  price: 56.0,
  AbortController: 'grey',
};

const SingleProduct = () => {
  const [state, dispatch] = useStoreContext();

  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <Box>
      <Grid container spacing={2} style={{ maxWidth: '1100', margin: '0 auto' }}>
        <Grid item lg={2}>
          <ImageGrid images={images} onSelect={setSelectedImage} />
        </Grid>
        <Grid item md={6}>
          <MainImage src={images[selectedImage]} />
        </Grid>
        <Grid item md={4}>
          <Info {...product} />
        </Grid>
      </Grid>

      <Button variant="contained" onClick={() => dispatch({ type: ADD_TO_CART, payload: testData })}>
        Contained
      </Button>
    </Box>
  );
};

export default SingleProduct;
