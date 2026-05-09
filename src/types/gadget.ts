export interface Gadget {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  purchaseYear: number;
}

export interface NewGadget {
  name: string;
  brand: string;
  category: string;
  price: number | undefined;
  purchaseYear: number | undefined;
}