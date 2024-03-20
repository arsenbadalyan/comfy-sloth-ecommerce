import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'products',
    url: '/products',
  },
  {
    id: 3,
    text: 'about',
    url: '/about',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'At Comfy Sloth, our mission is simple: to redefine comfort in every home. We strive to curate a collection of furniture and decor that inspires relaxation and tranquility, creating spaces where people can unwind, recharge, and truly feel at ease.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Our vision at Comfy Sloth is to be the ultimate destination for those seeking comfort and style for their homes. We aim to continuously innovate and expand our collection, offering a diverse range of high-quality products that cater to every taste and need.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Comfy Sloth started with a passion for creating cozy spaces that feel like home. Founded [insert year], our journey began with a desire to provide people with the furniture and decor they need to design their perfect comfort zone. Since then, we\'ve grown into a trusted source for quality, style, and comfort in homes across the globe',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
