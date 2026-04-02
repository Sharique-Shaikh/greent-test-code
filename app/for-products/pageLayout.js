'use client';

import ForProductsComp from '../../components/ForProducts';
import ProductExecution from '../../components/ProductExecution';
import ProductGoToMarket from '../../components/ProductGoToMarket';
import ProductPartner from '../../components/ProductPartner';
import ProductSales from '../../components/ProductSales';
import ProductSuccessStories from '../../components/ProductSuccessStories';
import ProductsWhatWeDo from '../../components/ProductsWhatWeDo';
import SolutionCountries from '../../components/SolutionCountries';

export default function ForProductsLayout() {
  return (
    <>
      <ForProductsComp />
      <ProductsWhatWeDo />
      <ProductPartner />
      <ProductGoToMarket />
      <ProductExecution />
      <SolutionCountries mb={'10rem'} />
      {/* <ProductSuccessStories /> */}
      <ProductSales />
    </>
  );
}
