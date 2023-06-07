import axios from 'axios';

export const getImages = async (searchValue, page, KEY_API) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
