// export const generageCoordinates = () => {
//   let arr = [];
//   arr[0] = {
//     name: "home",
//     lat: Math.random() * (24 - 21) + 21,
//     lng: Math.random() * (84 - 81) + 81,
//   };
//   for (let i = 0; i < 3; i++) {
//     arr[i + 1] = {
//       name: i + 1,
//       lat: Math.random() * (24 - 21) + 21,
//       lng: Math.random() * (84 - 81) + 81,
//     };
//   }
//   arr.push(arr[0]);
//   return arr;
// };

// utils/generateRandomCoordinates.ts
export const generateRandomCoordinates = () => {
  let arr = [];
  arr[0] = {
    name: "home",
    lat: Math.random() * (24 - 21) + 21,
    lng: Math.random() * (84 - 81) + 81,
  };
  for (let i = 0; i < 3; i++) {
    arr[i + 1] = {
      name: i + 1,
      lat: Math.random() * (24 - 21) + 21,
      lng: Math.random() * (84 - 81) + 81,
    };
  }
  arr.push(arr[0]);
  return arr;
};
// export const generateRandomCoordinates = (
//   center: { lat: number; lng: number },
//   range: number
// ) => {
//   const randomLat = center.lat + (Math.random() - 0.5) * range;
//   const randomLng = center.lng + (Math.random() - 0.5) * range;
//   return { lat: randomLat, lng: randomLng };
// };
