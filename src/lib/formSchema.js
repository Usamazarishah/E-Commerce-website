import * as z from 'zod';

 const schema = z.object({
  productName: z.string().min(3, { message: 'Product name is required' }).max(40),
  productDescription: z.string().min(100, { message: 'productDescription' }).max(500),
  price: z.string().min(1, { message: 'price is required' }).max(1000000),
  stock: z.string().min(1, { message: 'stock is required' }).max(500),
  category: z.string().min(1, { message: 'category is required' }),

});

export default schema;