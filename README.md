# React Podcast App

## Description
The **React Podcast App** is a feature-rich podcast discovery platform built with React. It allows users to browse, search, filter, and explore podcasts with ease. Each podcast has detailed information, including seasons, episodes, descriptions, and audio playback. The app provides a responsive and user-friendly interface with a light-themed design.

Key features:
- Browse a list of podcasts.
- View detailed podcast information.
- Expand seasons to see all episodes.
- Listen to episodes directly in the browser.
- Clean, responsive, light-themed design.
- Unique key handling to prevent React warnings.
- Error handling and loading states.

---

## Technologies Used
- **Frontend:** React, React Router DOM, Vite
- **Languages:** JavaScript, HTML, CSS
- **Styling:** CSS Modules
- **API:** [Podcast API](https://podcast-api.netlify.app/)
- **Package Manager:** npm

---

## Project Structure
project-root/
│
├─ src/
│ ├─ components/
│ │ ├─ ShowDetails.jsx
│ │ └─ ...
│ ├─ css/
│ │ └─ ShowDetails.module.css
│ └─ App.jsx
│
├─ public/
│ └─ index.html
│
├─ package.json
└─ README.md


### Key Components
- **ShowDetails.jsx**: Displays detailed information for a single podcast, including seasons and episodes. Handles API fetching, loading, and error states.
- **CSS Modules**: Provides scoped styling, ensuring no style clashes.

---

## Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd react-podcast-app
Install dependencies

bash
Copy code
npm install
Start the development server

bash
Copy code
npm run dev
Open the app in your browser (usually at http://localhost:5173).

Usage
Home Page: Browse the list of podcasts.

Podcast Details: Click a podcast to view its details.

Seasons Section: Expand/collapse seasons to see episodes.

Audio Playback: Play episodes directly in the browser.

Navigation: Use the "Back" button to return to the main list.

Features
Dynamic Podcast Loading: Fetches podcast details based on selected podcast ID.

Expandable Seasons: Each season can be expanded to reveal episodes.

Episode Playback: Built-in HTML5 audio controls.

Responsive Design: Layout adjusts for mobile and desktop.

Light Theme: White cards, soft shadows, and readable typography.

Error Handling: Friendly error messages when API fails or data is unavailable.

Styling
Light Colors: White backgrounds for cards, soft gray and purple accents for readability.

Season Layout: Images on the left, text content on the right, episodes listed below.

Hover Effects: Cards slightly lift and cast subtle shadows on hover.

Responsive: Flex layout wraps on smaller screens.

API Reference
The app uses the Podcast API hosted at https://podcast-api.netlify.app/.

Endpoint to fetch podcast by ID:

bash
Copy code
GET https://podcast-api.netlify.app/id/:id
Data includes:

title

description

image

updated date

seasons (array)

episodes (array inside seasons)

#Contributing
Fork the repository.

Create a new branch for your feature/fix.

Commit your changes with descriptive messages.

Push your branch and create a Pull Request.

License
This project is licensed under the CodeSpace License.


#Author
Jay-Dee Daniels