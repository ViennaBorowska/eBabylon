import ImageList from '@mui/material/ImageList';
import React from 'react';

const ImageGrid = ({ item, setIndex, index }) => {
  console.log(item, 'item');
  return (
    <ImageList cols={3} rowHeight={164}>
      {item.map((e, index) => {
        console.log(e, 'see what e is');
        return (
          <img
            key={index}
            src={e}
            height={150}
            onClick={() => setIndex(index)}
            style={{
              // border: index === index ? 'solid 2px black' : 'solid 2px #eee',
              border: index ? 'solid 2px black' : 'solid 2px #eee',
              cursor: 'pointer',
            }}
            alt="product images"
          />
        );
      })}
    </ImageList>
  );
};

export default ImageGrid;
