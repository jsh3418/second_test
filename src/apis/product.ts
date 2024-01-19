import { Product } from "@/types/product";
import { fetcher } from "./fetcher";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetcher("/items");

  return response.json();
};
