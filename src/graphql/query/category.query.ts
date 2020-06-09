import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query getCategories($type: String!) {
    categories(type: $type) {
      id
      name
      slug
      icon
      children {
        id
        name
        slug
      }
    }
  }
`;
