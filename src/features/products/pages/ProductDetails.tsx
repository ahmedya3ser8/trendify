import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

import { BreadCrumb, getAllProducts } from "@/features/main";
import { DetailsInfo, SimilarProducts } from "@/features/products";
import type { IProduct } from "../models/iproduct";

const ProductDetails = () => {
  const product = useLoaderData() as IProduct;
  const { data: products } = useQuery({
    queryKey: ['similarProdutcs', product.id],
    queryFn: () => getAllProducts(4, product.category._id),
    select: (data) => data.data
  })
  return (
    <>
      <BreadCrumb items={[
          {label: 'Home', path: '/'}, 
          {label: 'Category', path: '/products'}, 
          {label: product.category.name}, 
          {label: product.slug}
        ]} 
      />
      <DetailsInfo product={product} />
      <SimilarProducts products={products as IProduct[]} />
    </>
  )
}

export default ProductDetails;
