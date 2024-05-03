import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import SearchSample from "../images/NavBar/SearchSample.png";
import QRCode from "qrcode.react"; // install with `npm install qrcode.react`

// Define the type for your items
type Item = {
  image: string;
  title: string;
  price: number;
  description: string;
};

// Sample data
const data: Item[] = [
  {
    image: SearchSample,
    title: "Bahrain National Museum",
    price: 100,
    description: "Offer: 10% off Tickets",
  },
  {
    image: SearchSample,
    title: "Cineco Cinema",
    price: 200,
    description: "Offer: 25% off Popcorn and Drinks",
  },
  {
    image: SearchSample,
    title: "Bahrain International Circuit",
    price: 300,
    description: "Offer: 30% off on Karting",
  },
  {
    image: SearchSample,
    title: "Qalat al-Bahrain",
    price: 150,
    description: "Offer: 50% Off on Entry Ticket",
  },
  {
    image: SearchSample,
    title: "Bahrain City Centre Mall",
    price: 250,
    description: "Offer: 5 BD gift Card at applicabile stores",
  },
  {
    image: SearchSample,
    title: "Delmon Paradise Waterpark",
    price: 220,
    description: "Offer: 50% off on Entry Ticket.",
  },
  {
    image: SearchSample,
    title: "Bahrain National Theatre",
    price: 180,
    description: "Offer: 50% Off on Entry Ticket.",
  },
  {
    image: SearchSample,
    title: "Arad Fort",
    price: 130,
    description: "Offer: Free Entry Ticket.",
  },
  // Add more items as needed
];

const PointsStore: React.FC = () => {
  // State for tracking quantities of each item
  const [quantities, setQuantities] = useState(Array(data.length).fill(0));
  // State for tracking the currently selected tab
  const [tabValue, setTabValue] = useState(0);
  // State for tracking purchased vouchers
  const [purchasedVouchers, setPurchasedVouchers] = useState<Item[]>([]);
  // State for tracking the currently selected voucher
  const [selectedVoucher, setSelectedVoucher] = useState<Item | null>(null);

  // Function for handling changes in item quantities
  const handleQuantityChange = (index: number, delta: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(0, newQuantities[index] + delta);
      return newQuantities;
    });
  };

  // Function for handling tab changes
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  // Function for handling voucher purchases
  const handlePurchase = (index: number) => {
    setPurchasedVouchers((prevVouchers) => [...prevVouchers, data[index]]);
  };

  // Function for handling voucher selection
  const handleVoucherClick = (voucher: Item) => {
    setSelectedVoucher(voucher);
  };

  return (
    <>
      <Box sx={{ mb: 20, maxWidth: 1280, margin: "auto" }}>
        <NavBar textColor="rgb(0,0,0)" />
      </Box>
      <Container maxWidth="md">
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Store" />
          <Tab label="My Vouchers" />
        </Tabs>
        {tabValue === 0 && (
          <Box sx={{ flexGrow: 1, m: 2 }}>
            <Typography variant="h4" component="div" gutterBottom>
              Store
            </Typography>
            <Grid container spacing={2}>
              {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ maxWidth: 512, maxHeight: 512, borderRadius: 4 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <IconButton
                          onClick={() => handleQuantityChange(index, -1)}
                          disabled={quantities[index] <= 1}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{quantities[index]}</Typography>
                        <IconButton
                          onClick={() => handleQuantityChange(index, 1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => handlePurchase(index)}
                      >
                        {item.price} points
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        {tabValue === 1 && (
          <Box sx={{ flexGrow: 1, m: 2 }}>
            {purchasedVouchers.map((voucher, index) => (
              <Card
                sx={{ maxWidth: 512, maxHeight: 512, mb: 2 }}
                key={index}
                onClick={() => handleVoucherClick(voucher)}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {voucher.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {voucher.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
            {selectedVoucher && (
              <Dialog open onClose={() => setSelectedVoucher(null)}>
                <DialogTitle>{selectedVoucher.title}</DialogTitle>
                <DialogContent>
                  <QRCode value={selectedVoucher.title} />
                </DialogContent>
              </Dialog>
            )}
          </Box>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default PointsStore;
