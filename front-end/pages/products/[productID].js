// pages/product/[productSlug].js

import Product from '../../components/Product';
import { useUser} from '../../utils/contexts/userContext';

const { state } = useUser();
export async function getStaticPaths() {
  // Fetch the list of product slugs from your API or data source
  // Replace this with your actual data fetching logic
  const product = await state.product.find(productSlug);

  // Map the product slugs to the `params` object required for the dynamic routes
  const paths = productSlugs.map((slug) => ({
    params: { productSlug: slug },
  }));

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want to use incremental static regeneration
  };
}

export async function getStaticProps({ params }) {
  const productSlug = params.productSlug;
  const product = await state.product.find(productSlug);

  return {
    props: {
      product,
    },
  };
}

const ProductPage = ({ product }) => {
  return <Product product={product} />;
};

export default ProductPage;
