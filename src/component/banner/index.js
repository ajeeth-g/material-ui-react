import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from '../../styles/banner';

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer theme={theme}>
      <BannerImage src='/images/banner/banner.png' />
      <BannerContent>
        <Typography variant='h6'>Huge Collection</Typography>
        <BannerTitle variant='h2'>New Bags</BannerTitle>
        <BannerDescription variant='subtitle'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          consectetur debitis? Aspernatur, magni temporibus soluta veniam iure
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
