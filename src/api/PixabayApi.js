import axios from 'axios';

const KEY_API = '35544273-b6528e3c4aa6f18d7727a7eb2';

export const getImages = async (searchValue, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
