let idCounter = 1;

export const generateData = (
  name,
  description,
  sqM,
  rooms,
  bathrooms,
  price
) => {
  return {
    id: idCounter++,
    name: name,
    image: "casaImagen.jpg",
    description: description,
    sqM: sqM,
    rooms: rooms,
    bathrooms: bathrooms,
    price: price,
  };
};
