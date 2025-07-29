# Oldagram

## Project Overview & Purpose
"Oldagram" is a front-end web development project that aims to create a simplified, static clone of the Instagram user interface. The primary goal of this project is educational: to practice fundamental web development skills, including HTML for structure, CSS (specifically Tailwind CSS) for styling, and JavaScript for dynamic content rendering from a predefined data set. The application will display a feed of posts from historical art figures, complete with their avatars, locations, images, comments, and like counts.

## Key Features & Functionality
Based on the provided code, the application has the following core features:

- Header/Navigation Bar: A sticky header containing the "Oldagram" logo and a user avatar.
- Post Feed: The main content area dynamically populated with posts.
- Individual Post Structure: Each post in the feed includes:
- Post Header: User's avatar, name, and location.
- Post Image: The main image of the post.
- Action Icons: Icons for "like," "comment," and "direct message." (Note: These are currently not functional).
- Like Counter: Displays the total number of likes for the post.
- Caption: The post's comment/caption, including the username.

## Technical Implementation
The project is built using the following technologies and structure:

### index.html (Structure):
- Provides the basic skeleton of the web page.
- Includes a <nav> for the header and a <main> section with a <div> (id="contents") that serves as the container for the posts.
- Links to the index.css stylesheet and the index.js script.
- Integrates Tailwind CSS via a CDN script for utility-first styling.

### index.css (Styling):
- Currently, its primary function is to import the Tailwind CSS library. All styling is handled directly in the HTML via Tailwind classes.

### index.js (Logic & Content):
- Data: Contains a hardcoded array of JavaScript objects called posts. Each object represents a single post and contains properties like name, username, location, avatar, post (image), comment, and likes.

### Rendering:

- A render() function iterates through the posts array.
For each post object, it dynamically generates an HTML string representing the post's structure.
This HTML is then appended to the contentsEl element in the DOM, effectively building the post feed on the page.

## Potential Next Steps & Improvements
This project provides a solid foundation. Here are some suggestions for future development:

- Interactive Likes: Implement functionality so that clicking the heart icon increments the like count for that specific post.
- Dynamic Data: Instead of a hardcoded array, fetch post data from a mock API or a JSON file.
- User Comments: Add an input field to allow users to add their own comments to a post.
- Responsive Design Polish: While Tailwind CSS is used, further refinement could improve the layout on a wider range of screen sizes.
- Component-Based Structure: Refactor the JavaScript to use functions or classes to create post components, making the code more modular and reusable.
