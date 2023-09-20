import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';


export default function GalleryOfMe() {
    return (
        <Box>
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
        </Box>
    );
  }
  
  const itemData = [
    {
        img: 'me/knight.png',
        title: 'knight',
    },
    {
      img: 'me/rainer.jpg',
      title: 'SolarStrike',
    },
    {
        img: 'me/books.jpg',
        title: 'Endevrian',
    },
    {
      img: 'me/east.jpg',
      title: 'Kanban',
    },
    {
        img: 'me/cosmicRolling.jpg',
        title: 'Honey',
    },
    {
        img: 'me/seattle.jpg',
        title: 'Me But cool',
    },
  ];