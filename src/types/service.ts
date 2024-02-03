
export type Service = {
  _id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  detail: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: 3,
  }
}
