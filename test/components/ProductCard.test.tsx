import React from 'react';
import ProductCard from '../../src/components';
import renderer from 'react-test-renderer';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('it should render the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('it should increase the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, handleCounter }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => handleCounter(1)}>+</button>
          </>
        )}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
