// ----------------------------------------------------------------------
// Người dùng
// ----------------------------------------------------------------------
// next
import NextLink from 'next/link';
// @mui
import { Box, Link, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// routes
// components
import { CustomAvatar } from '../../../components/custom-avatar';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

export default function NavAccount() {
  const { user } = useAuthContext(); // auth context

  return (
    <Link component={NextLink} href="/" underline="none" color="inherit">
      <StyledRoot>
        <CustomAvatar
          src={user?.imageUrl || '/assets/images/common/user.png'}
          alt={user?.fullName}
          name={user?.fullName}
        />

        <Box sx={{ ml: 2, minWidth: 0 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.profile.fullName}
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
            {user?.role.name}
          </Typography>
        </Box>
      </StyledRoot>
    </Link>
  );
}
