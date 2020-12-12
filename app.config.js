import 'dotenv/config';

export default {
  "extra": {
    "apiUrl": process.env.EXPO_API_URL,
    "imageUrl": process.env.EXPO_IMAGE_URL
  },
  "android": {
    "package": "com.cocktailapp.app"
  }
};