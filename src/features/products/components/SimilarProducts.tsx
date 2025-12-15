import type { IProduct } from "../models/iproduct";
import {ProductCard } from "@/features/products";

const SimilarProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-4xl text-secondary font-semibold mb-8">Similar products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimilarProducts;
