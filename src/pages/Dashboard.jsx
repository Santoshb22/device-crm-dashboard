import { useSelector } from 'react-redux';
import { Typography, Container } from '@mui/material';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 5 }}>
        Welcome, {user?.role.toUpperCase()} 👋
      </Typography>
    </Container>
  );
};

export default Dashboard;
