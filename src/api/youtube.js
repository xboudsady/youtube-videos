import axios from 'axios';
import config from './config';

const KEY = config.access_key;

// Make a preconfigured instance of axios, that has base url, and default params loaded
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  // Contains our query string paramter added to request, get from YouTube API documentation
  // Header Object
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
    safeSearch: 'strict'
  }
});