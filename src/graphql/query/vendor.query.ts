import gql from 'graphql-tag';

export const GET_VENDOR = gql`
  query getVendor($slug: String!) {
    vendor(slug: $slug) {
      id
      slug
      name
      categories {
        id
        name
      }
      previewUrl
      thumbnailUrl
      # type
      deliveryDetail {
        charge
        minimumOrder
        isFree
      }
      address {
        id
      }
      products {
        id
        name
        type
        description
        price
      }
    }
  }
`;
