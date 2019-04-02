import axios from 'axios';

const KEY = 'AIzaSyBTn0zLoOj1PG826BvDcWeKvlxOnV1u6Wk';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

