export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  imglink: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 11 128Gb Slim Box',
    price: 650,
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    imglink: 'https://avatars.mds.yandex.net/i?id=c4c91641b911084a43ac6e8e733c8cbe1281b080-7765566-images-thumbs&n=13',
    rating: 8.9,
  },
  {
    id: 2,
    name: 'Samsung S23',
    price: 809,
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-podarok-108714425/?c=750000000#!/item',
    imglink: 'https://i.ytimg.com/vi/1A4-WVhDFzc/maxresdefault.jpg',
    rating: 9.2,
  },
  {
    id: 3,
    name: 'OPPO A17',
    price: 299,
    description: '',
    link: 'https://kaspi.kz/shop/p/oppo-a17-4-gb-64-gb-chernyi-107420168/?c=750000000#!/item',
    imglink: 'https://www.mobihall.com/data/mobile/2018/11/Oppo%20RX17%20Neo_dd56.jpg',
    rating: 7.3,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
