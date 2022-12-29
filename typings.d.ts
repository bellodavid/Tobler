type Customer = {
    email: string;
    name: string;
    };
    
    type CustomerList = {
    name: ID;
    value: Customer;
    };

    type Order = {
        carrier: string;
        createdAt: string;
        shippingCost: number;
        trackingId: string;
        Address: string;
        City: String;
        Lat: number;
        Lng: number;
        trackingItems: TrackingItems;
          
      };
      
      type OrderList = {
        name: ID
        value: Order
      };

      type OrderResponse = {
        value: Order;
        };
        
        type CustomerResponse = {
        name: ID;
        value: Customer;
        };

      type Item = {
        item_id: ID;
        name: string;
        price: number;
        quantity: number;
      };

      type TrackingItem = {
        customer_id: string
        items: Items[]
        customer: Customer

      };
      
      type TrackingItemsList = {
        name: ID
        value: TrackingItems
      };
      