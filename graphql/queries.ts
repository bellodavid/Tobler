import { gql, useQuery } from '@apollo/client';

const GET_CUSTOMERS = gql`
  query GetCustomers   {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;


export const GET_ORDERS = gql`
  query GetOrders   {
    getOrders {
      name
      value {
        Address
        City
        Lat
        carrier
        Lng
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            item_id
            price
            name
            quantity
          }
        }
      }
    }
  }
`;