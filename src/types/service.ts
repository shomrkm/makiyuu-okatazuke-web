export type Service = {
  _id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  details: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: 3;
  };
};

export type ServiceResponse = {
  items: Service[];
};
