# GG-Product-Card

This is a test to deploy a NPM package

### Gianluca Galota

## Example 

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'gg-product-card

```

```
  <ProductCard 
    key={product.id}
    product={product}
    initialValues={{
      count: 0,
      maxCount: 10
    }}
  >
    {
      ({reset, handleCounter, maxCount, isMaxCountReached, count}) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons /> 
        </>
      )
    }
  </ProductCard>
```