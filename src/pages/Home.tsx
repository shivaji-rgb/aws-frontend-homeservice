import { ArrowForward, LocalShipping, PeopleAlt, WaterDrop } from '@mui/icons-material'
import { Box, Button, Chip, Container, CssBaseline, Dialog, Paper, Stack, ThemeProvider, Typography, createTheme } from '@mui/material'
import ServiceReachCard from '../util/dashboard/ServiceReachCard'
import StatCard, { type StatCardData } from '../util/dashboard/StatCard'
import WeeklyDeliveryCard, { type DeliveryPoint } from '../util/dashboard/WeeklyDeliveryCard'
import LoginLoader from '../loaders/LoginLoader';
import RegisterLoader from '../loaders/RegisterLoader';
import { useState } from 'react';


const theme = createTheme({
  palette: { primary: { main: '#238dcc' }, secondary: { main: '#69c2eb' }, background: { default: '#eef8fd', paper: '#ffffff' }, text: { primary: '#12344a', secondary: '#5b7484' } },
  typography: { fontFamily: '"DM Sans", "Segoe UI", sans-serif', h1: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 }, h2: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 } },
  shape: { borderRadius: 14 },
})

const stats: StatCardData[] = [
  { label: 'Customers reached', value: '1,284', change: '+12.8%', icon: <PeopleAlt />, color: '#238dcc' },
  { label: 'Litres delivered this week', value: '8,640 L', change: '+8.4%', icon: <WaterDrop />, color: '#45acd9' },
  { label: 'Active delivery routes', value: '24', change: '+3 routes', icon: <LocalShipping />, color: '#1674ad' },
]

const weeklyDelivery: DeliveryPoint[] = [
  { day: 'Mon', litres: 980 }, { day: 'Tue', litres: 1240 }, { day: 'Wed', litres: 1120 },
  { day: 'Thu', litres: 1380 }, { day: 'Fri', litres: 1560 }, { day: 'Sat', litres: 1420 }, { day: 'Sun', litres: 940 },
]

function Home() {

  const[loginLoder, setLoginLoader] = useState(false);
  const[registerLoader, setRegisterLoader] = useState(false);

  const handleLoginClick = () => {
    setLoginLoader(true);
  };

  const handleCloseLogin = () => {
    setLoginLoader(false);
  };

  const handleCloseRegister = () => {
    setRegisterLoader(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="home-page">
        <Container maxWidth="lg">
          <Box component="header" className="topbar">
            <Stack direction="row" spacing={1.5} className="stack-center">
              <Box className="brand-mark"><WaterDrop fontSize="small" /></Box>
              <Typography className="brand-name">AquaReach</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" color="primary" sx={{ borderRadius: 2, px: 2 }} onClick={() => setRegisterLoader(true)}>
                Register
              </Button>
              <Button variant="contained" color="primary" startIcon={<PeopleAlt />} sx={{ borderRadius: 2, px: 2.5 }} onClick={handleLoginClick}>
                Login
              </Button>
            </Stack>
          </Box>

          <Box component="main" className="page-content">
            <Stack spacing={1} className="intro">
              <Chip label="WEEKLY OPERATIONS" size="small" className="eyebrow" />
              <Typography variant="h1" component="h1">Making every drop count.</Typography>
              <Typography variant="body1" color="text.secondary" className="intro-copy">A clear view of the people reached and water delivered by your community service team.</Typography>
            </Stack>

            <Box className="stats-grid">
              {stats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
            </Box>

            <Box className="dashboard-grid">
              <WeeklyDeliveryCard data={weeklyDelivery} />
              <ServiceReachCard reached={1284} goal={1500} breakdown={[{ label: 'Households', value: 762 }, { label: 'Community centres', value: 318 }, { label: 'Small businesses', value: 204 }]} />
            </Box>

            <Paper className="activity-banner" elevation={0}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="banner-row">
                <Stack direction="row" spacing={2} className="stack-center"><Box className="banner-icon"><LocalShipping /></Box><Box><Typography className="strong-text">Next dispatch window</Typography><Typography variant="body2" color="text.secondary">24 routes are scheduled for tomorrow morning.</Typography></Box></Stack>
                <Button color="primary" endIcon={<ArrowForward />}>View routes</Button>
              </Stack>
            </Paper>
          </Box>
         <Dialog
  open={loginLoder}
  onClose={handleCloseLogin}
>
  <LoginLoader />
</Dialog>
         <Dialog
           open={registerLoader}
           onClose={handleCloseRegister}
         >
           <RegisterLoader onComplete={handleCloseRegister} />
         </Dialog>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Home