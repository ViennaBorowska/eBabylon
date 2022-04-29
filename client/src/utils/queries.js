import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query allitems {
    items {
      _id
      title
      description
      image
      price
      salePrice
      stock
      size
      colour
    }
  }
`;

export const GET_BRAND_ITEMS = gql`
  query Query {
    brandItems {
      _id
      title
      description
      price
      stock
    }
  }
`;
