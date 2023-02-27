import React from 'react';
import ProductCard, { ProductTitle } from '../../src/components';
import renderer from 'react-test-renderer';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('it should render the component correctly with a personalized title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('it should render the component correctly with a personalized title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
