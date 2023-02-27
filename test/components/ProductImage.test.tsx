import React from 'react';
import ProductCard, { ProductImage } from '../../src/components';
import renderer from 'react-test-renderer';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  // test('it should render the component correctly with a personalized title', () => {
  //   const wrapper = renderer.create(
  //     <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
  //   );
  //   expect(wrapper.toJSON()).toMatchInlineSnapshot(`
  //     <div
  //       className="productCard undefined"
  //     >
  //       <img
  //         alt="coffee mug"
  //         className="productImg undefined"
  //         src="./coffee-mug.png"
  //       />
  //     </div>
  //   `);

  test('it should render the component correctly with a personalized image', () => {
    const wrapper = renderer.create(<ProductImage image="https://hello.com" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('it should render the component correctly with a personalized title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <img
          alt="coffee mug"
          className="productImg undefined"
          src="./coffee-mug.png"
        />
      </div>
    `);
  });
});
