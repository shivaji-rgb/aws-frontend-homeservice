import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
  onDelete: () => void;
}

const ProductCard = ({
  product,
  quantity,
  onAdd,
  onRemove,
  onDelete,
}: ProductCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 280,
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 2,
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "cover",
        }}
      />

      <CardContent>
        {/* Product Name */}
        <Typography
          variant="h6"
          
          noWrap
           sx={{fontWeight: "bold",
            
           }}
        >
          {product.name}
        </Typography>

        {/* Price */}
        <Typography
          variant="h6"
          
          sx={{ mt: 1,fontWeight: "bold",
            
           }}
        >
          ₹{product.price}
        </Typography>

        {/* Quantity + Add */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          {/* Quantity Controls */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <IconButton
              size="small"
              onClick={onRemove}
              disabled={quantity === 0}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>

            <Typography
              sx={{
                minWidth: 25,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {quantity}
            </Typography>

            <IconButton
              size="small"
              onClick={onAdd}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Add Button */}
          <Button
            variant="contained"
            size="small"
            onClick={onAdd}
          >
            Add
          </Button>

          {/* Delete */}
          <IconButton
            color="error"
            onClick={onDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;