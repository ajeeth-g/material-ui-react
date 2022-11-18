import { Typography } from '@mui/material';
import { ProductActionsWrapper } from '../../styles/product';

export default function ProductMeta({ product, matches }) {
  return (
    <ProductActionsWrapper>
      <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
        {product.name}
      </Typography>
      <Typography variant={matches ? 'caption' : 'body1'}>
        ${product.price}
      </Typography>
    </ProductActionsWrapper>
  );
}
