'use client'

import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

export default function LoginCarousel ({ data }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(data)
  }, [data])

  console.log(items)

  return (
    <Carousel
      navButtonsAlwaysInvisible
      indicators={false}
      nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      {items?.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          <img
            className='login_image'
            width='100%'
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.url}`}
            alt={"login"}
          />
        </Box>
      ))}
    </Carousel>
  )
}
