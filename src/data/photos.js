const base = import.meta.env.BASE_URL;

export const photos = Array.from({ length: 54 }, (_, index) => {
  const number = String(index + 1).padStart(3, "0");

  return {
    id: `photo-${number}`,
    title: `PHOTO ${number}`,
    alt: `卒業アルバムの写真 ${number}`,
    image: `${base}images/photos/${number}.webp`
  };
});
