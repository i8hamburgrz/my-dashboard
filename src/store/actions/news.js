import request from '../request';

const GNEWS_TOKEN = 'dac4753d4c9b91b189bf0686059a3ae1';
export const ADD_NEWS = 'ADD_NEWS';

function addNews(news) {
  return {
    type: ADD_NEWS,
    news
  }
}

export const getAllNews = () => {
  return (dispatch) => {
    const query = 'los+angeles+ca';
    const url = `https://gnews.io/api/v3/search?q=${query}&token=${GNEWS_TOKEN}`;
  
		return request(url)
      .then((news) =>  {
        dispatch(addNews(news))
      })
      .catch(err => {
        console.log(err);
      });
  };
}
