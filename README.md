# Movie Locker
Movie Locker is a modern movie discovery application built with React, React Router, and The Movie Database (TMDB) API. 
It provides a clean, cinematic browsing experience with search, genre filtering, pagination, and detailed movie information displayed in a modal. 
The UI is styled using CSS Modules and includes polished visual effects such as blurred backgrounds, glass overlays, hover animations, and skeleton loading states.

## Features
### Movie Browsing
Browse top‑rated movies fetched from the TMDB API. 
Each movie is displayed as a custom card with a blurred poster background, glass overlay, hover zoom effect, and smooth fade‑in animation.
### Search
Search for movies by title. Search queries update the URL using React Router search parameters, making the state shareable and bookmarkable.
### Genre Filtering
Filter movies by genre using a dynamic list fetched from the TMDB API. 
Genre selection also updates the URL for consistent navigation.
### Pagination
Navigate through multiple pages of results. Pagination is fully integrated with the URL state.
### Movie Details Modal
Clicking a movie opens a detailed modal built with React Portals. 
The modal displays the movie overview, release date, rating, and cast information.
### Skeleton Loading
While data is loading, the UI displays skeleton shimmer placeholders to maintain a smooth and polished experience.
### Responsive Design
The layout adapts cleanly to different screen sizes, ensuring a consistent experience across devices.

### Technologies Used
- React
- React Router
- CSS Modules
- Vite
- TMDB API
- JavaScript (ES6+)

## Project Structure
```
src/
  api/
    tmdb.js
  components/
    MovieCard/
    MovieList/
    MovieDetailsModal/
    Pagination/
    SearchBar/
    GenreFilter/
  pages/
    HomePage/
  App.jsx
  main.jsx
```

This structure keeps the project modular, scalable, and easy to maintain.

### Environment Variables
Create a .env file in the project root:
```
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

Restart the development server after adding or modifying environment variables.

## Getting Started
Install dependencies:
```
npm install
```

Run the development server:
```
npm run dev
```

Build for production:
```
npm run build
```


## API Reference
This project uses The Movie Database (TMDB) API.
You can create an account and generate an API key at:
https://www.themoviedb.org/



### License
This project is for educational and portfolio purposes.
