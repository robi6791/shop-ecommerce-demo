// const delay = (ms) => new Promise((resolve) => {
//   setTimeout(resolve, ms);
// })
// const HomePage = async () => {
//   await delay(2000);
//   return (
//     <div>shop</div>
//   )
// };
// export default HomePage;

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={6} />
    </div>
  );
};
export default HomePage;
