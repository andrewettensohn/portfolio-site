import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function ProjectList() {
    return (
      <ImageList cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  const itemData = [
    {
        img: 'felldeeds/CoverImage.PNG',
        title: 'Camera',
    },
    {
      img: 'solarstrike/splashscreen.png',
      title: 'SolarStrike',
    },
    {
        img: 'endevrian/desktop-end-home.png',
        title: 'Endevrian',
    },
    {
      img: 'wrathandglory/PromoImage2.png',
      title: 'WrathAndGlory',
    },
    {
      img: 'kanbanlite/PromoImageKanban.png',
      title: 'Kanban',
    },
    {
      img: 'blazornews/desktop-hnb-light.png',
      title: 'Honey',
    },
  ];