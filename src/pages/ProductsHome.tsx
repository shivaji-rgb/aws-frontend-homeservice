
import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 5.99,
    image: "https://via.placeholder.com/150",
  },
];

export const ProductsHome = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const handleAdd = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
  };

  const handleRemove = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] ?? 0) - 1),
    }));
  };

  const handleDelete = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: 0,
    }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Available Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard
              product={product}
              quantity={quantities[product.id] ?? 0}
              onAdd={() => handleAdd(product.id)}
              onRemove={() => handleRemove(product.id)}
              onDelete={() => handleDelete(product.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
