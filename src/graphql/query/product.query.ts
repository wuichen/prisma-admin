import gql from 'graphql-tag';

export const GET_PRODUCT_WITH_RELATED_PRODUCTS = gql`
  query getProductWithRelatedProducts($slug: String!, $type: String!) {
    product(slug: $slug) {
      id
      name
      weight
      slug
      price
      type
      image
      categories {
        id
        slug
        name
      }
    }
    relatedProducts(slug: $slug, type: $type) {
      id
      name
      slug
      weight
      price
      type
      image
    }
  }
`;

export const GET_RELATED_PRODUCTS = gql`
  query getRelatedProducts($type: String!, $slug: String!) {
    relatedProducts(type: $type, slug: $slug) {
      id
      name
      slug
      weight
      price
      type
      image
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      weight
      slug
      price
      discountInPercent
      type
      gallery
      image
      categories {
        id
        slug
        name
      }
    }
  }
`;
export const GET_PRODUCT_DETAILS = gql`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      slug
      name
      type
      unit
      price
      salePrice
      description
      discountInPercent
      gallery
      image
      categories {
        id
        slug
        name
      }
      # author {
      #   id
      #   name
      #   avatar
      #   bio
      #   socials {
      #     id
      #     media
      #     profileLink
      #   }
      # }
      # meta {
      #   publisher
      #   isbn
      #   edition
      #   languages
      #   country
      #   numberOfReader
      #   numberOfPage
      #   samplePDF
      # }
    }
  }
`;
