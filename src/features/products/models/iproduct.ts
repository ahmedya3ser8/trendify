import type { IBrand } from "@/features/main/models/ibrand"; 

export interface IProductResponse {
  results: number;
  metadata: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
  };
  data: IProduct[];
}

export interface IProduct {
  id: string;
  description: string;
  createdAt: string;
  imageCover: string;
  images: string[];
  price: number;
  quantity: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  slug: string;
  sold: number;
  title: string;
  updatedAt: string;
  _id: string;
  subcategory: ISubCategory[];
  category: ICategory;
  brand: IBrand;
}

interface ICategory {
  image: string;
  name: string;
  slug: string;
  _id: string;
}

interface ISubCategory {
  category: string;
  name: string;
  slug: string;
  _id: string;
}