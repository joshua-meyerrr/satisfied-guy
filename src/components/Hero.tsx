import React from 'react';
import { StyledHero, ImageLeft, ImageRight, Grid } from './styles/Hero.styled';

export default function Hero(): JSX.Element {
  return (
    <StyledHero>
      <Grid>
        <ImageLeft src="images/calligraphy.png" alt="" />
        <ImageRight src="images/hero_face.png" alt="" />
      </Grid>
    </StyledHero>
  );
}
