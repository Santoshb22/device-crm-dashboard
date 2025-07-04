import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, Container, Typography } from '@mui/material';
import { login } from '../store/authSlice';
import { useEffect } from 'react';

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    console.log(role);
    dispatch(login({ role }));
    navigate(`/${role}/dashboard`);
  };

  useEffect(() => { 
    if(user) navigate(`/${user.role}/dashboard`);
  }, [user, navigate])

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 5, mb: 3 }}>Login as:</Typography>
      <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={() => handleLogin('admin')}>
        Admin
      </Button>
      <Button variant="contained" color="secondary" onClick={() => handleLogin('technician')}>
        Technician
      </Button>
    </Container>
  );
};

export default Login;
