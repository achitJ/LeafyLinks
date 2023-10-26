# LeafyLinks
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Welcome to the LeafyLinks repository!

## Pages
This project is a web application that provides a News Feed and Profile section for viewing and interacting with photos. Below you will find information on how to use the application, its features, and the folder structure.
- **News Feed**: Fetches 10 random photos with infinite scroll. The API response contains user details, photo URLs for different resolutions, location, number of likes, and other useful data points about a feed.
- **Profile Section**: Clicking on the User Info section redirects to the respective user's profile page. The application fetches user details based on the username from the provided API and displays all the photos added by the user along with photo descriptions in a grid structure view. It also provides an option to switch to the list view using the component created for the news feed to show the list view of the selected image.

## How to run locally
To use this project, follow these steps:
- Clone the repository
```bash 
git clone https://github.com/achitJ/LeafyLinks.git
cd social-seedlings
```
- Create an API Key on [Unsplash](https://unsplash.com/developers)
-  Add the keys to environment variables:
>.env.local
```env
UNSPLASH_ACCESS_KEY=your_access_key
UNSPLASH_SECRET_KEY=your_secret_key
UNSPLASH_API_URL=https://api.unsplash.com
```
- Install dependencies and run the server
```bash
npm install
npm run dev
```
- Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Features
- **Dynamic Routing**: The application's routing is dynamically configured, allowing smooth navigation between different sections.
- **Zustand for State Management**: Zustand is used as the state management library to efficiently manage and share states across components.
- **API Response Caching**: The application caches the API response for a certain amount of time after the initial load, enhancing performance and reducing unnecessary API calls.
- **Loading/Empty/Error States**: All loading, empty, and error states are properly handled for all cases, providing a seamless user experience.
- **Responsive and Mobile Friendly**: The UI is designed to be responsive and mobile-friendly, ensuring a great user experience across different devices. 
- **Native CSS**: The project does not rely on any UI libraries like Tailwind or Bootstrap; instead, it uses native CSS for styling.

### Additional Features
- **Lazy Loading of Images**: All images outside of the viewport are lazy-loaded, optimizing the page load time.
- **Blurhash Placeholder Technique**: The application uses the Blurhash technique for images, providing a placeholder that is displayed while the actual image is loading. This improves perceived performance and enhances user experience.
- **Dark/Light Mode**: The application supports both dark and light modes, allowing users to switch between themes according to their preference.
- **Scroll to Top Button**: A scroll-to-top button is implemented to allow users to easily return to the top of the page with a single click.
- **Custom Hook for Infinite Scroll**: The project includes a custom hook for infinite scroll functionality, ensuring a smooth and efficient scrolling experience while browsing the News Feed.
