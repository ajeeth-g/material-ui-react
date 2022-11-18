import { Menu, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';
import Actions from './actions';

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <AppbarHeader textAlign={'center'} variant='h4'>
        My Bags
      </AppbarHeader>
      <IconButton>
        <Search />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
