import useAddToCart from "@/hooks/useAddToCart";
import useWishlist from "../hooks/useWishlist";

import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
  const { data, toggelWishlist, wishlistProductId } = useWishlist();
  const { addToCart, addToCartId } = useAddToCart();
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data?.map((product) => (
            <WishlistCard 
              key={product.id} 
              product={product} 
              toggelWishlist={toggelWishlist} 
              addToCart={addToCart} 
              addToCartId={addToCartId as string} 
              wishlistProductId={wishlistProductId as string} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Wishlist;
