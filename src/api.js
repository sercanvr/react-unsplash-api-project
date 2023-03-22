import axios from 'axios';
const searchImages = async term => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
        Authorization: 'Client-ID QxiHTpqlRb701EMMUvfy4vLeDoVIwB-L59pn8f6XIq0',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;