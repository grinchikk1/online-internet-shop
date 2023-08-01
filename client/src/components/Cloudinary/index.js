import cloudinary from "cloudinary-core";

// Функція отримання URL картинок з хмари

export function getImageUrls(names) {
  const ml = new cloudinary.Cloudinary({
    cloud_name: "ddh4awlkr",
    secure: true,
  });
  return names.map((name) =>
    ml.url(`v1689947205/online-internet-shop/${name}.png`)
  );
}

// назви всіх картинок з хмари

// const names = [
//   "brasellete_1",
//   "brasellete_2",
//   "brasellete_3",
//   "brasellete_4",
//   "brasellete_5",
//   "brasellete_7",
//   "brasellete_8",
//   "brasellete_9",
//   "chain_1",
//   "chain_10",
//   "chain_12",
//   "chain_2",
//   "chain_3",
//   "chain_4",
//   "chain_5",
//   "chain_6",
//   "chain_7",
//   "chain_8",
//   "chain_9",
//   "earrings_10",
//   "earrings_11",
//   "earrings_12",
//   "earrings_2",
//   "earrings_3",
//   "earrings_4",
//   "earrings_5",
//   "earrings_7",
//   "earrings_8",
//   "earrings_9",
//   "hairpin_1",
//   "hairpin_2",
//   "hairpin_3",
//   "main_picture",
//   "ring_1",
//   "ring_2",
//   "ring_4",
//   "ring_5",
//   "charm",
//   "mystery",
//   "main_2",
//   "main_3",
// ];

// приклад виклику

// const urls = getImageUrls(names);
// console.log(urls);

// URL всіх картинок з хмари

// const URLS = [
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/brasellete_1.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/brasellete_2.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/brasellete_3.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/brasellete_4.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/brasellete_5.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/brasellete_7.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/brasellete_8.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/brasellete_9.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_1.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_10.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_12.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_2.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_3.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_4.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_5.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_6.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_7.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_8.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/chain_9.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_10.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_11.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_12.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_2.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_3.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_4.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_5.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_7.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_8.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/earrings_9.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/hairpin_1.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/hairpin_2.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/hairpin_3.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/main_picture.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/ring_1.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/ring_2.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/ring_4.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/ring_5.png",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1690390156/online-internet-shop/main_3.jpg",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1690390156/online-internet-shop/main_2.jpg",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1690390156/online-internet-shop/mystery.jpg",
//   "https://res.cloudinary.com/ddh4awlkr/image/upload/v1690390156/online-internet-shop/charm.jpg",
// ];
