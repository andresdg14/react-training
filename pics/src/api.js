import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID ax1wy08hQWYtMWSs2ll74oluRTlqGz3TP-0wB2LrV_M',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
