import Product from '../../pages/product';
import ProductFetcher from '../../utils/product-fetcher';

export async function getStaticProps({ params }) {
  const productSlug = params.productSlug;
  const product = await ProductFetcher(productSlug);

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
