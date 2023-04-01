<!-- Markdown syntax here: https://www.markdownguide.org/basic-syntax/ -->
<a id="readme-top"></a>
<br />

<div align="center">
  <a href="https://guyrimel.github.io/Portfolio-Site/index.html">
    <img src="img/RLogoNoName.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Nofomo</h3>

  <p align="center">
    "FOMO" is the "Fear of Missing Out". Nofomo is an Progressive Web App (PWA offering offline usability) created with React that utilizes serverless functions through Amazon Web Services (AWS) and the Google Calendar API. The app shows information about upcoming events by city. Never miss out on a concert, or teaching seminar, or lame t-shirt giveaway in a city near you with this colorful light-weight React app.
  </p>
  <p>
    Currently, Nofomo only displays events from the CareerFoundry (online programming academy) Google calendar.
  </p>
</div>
<br />

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#deployments">Deployments</a></li>
        <li><a href="#dev-notes">Dev Notes</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#quick-start">Quick Start</a></li>
        <li><a href="#ux-notes">UX Notes</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- SCREENSHOT -->

<img
  alt="Primary Screenshot"
  src="img/screenshots/screenshot00.png"
  style="height: 16rem; width: auto;"
/>

[Nofomo Repository](https://github.com/GuyRimel/nofomo)

<!-- KEY FEATURES -->

### Key Features

1. OAuth login with an existing Google account

2. Serverless functions with Amazon Web Services

3. Offline usablitiy as a Progressive Web App

4. Data visualization with animated event graphs

<!-- BUILT WITH -->

### Built With

- HTML, CSS, JavaScript

- React

- Amazon Web Services serverless functions

- Google Calendar API

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOYMENTS -->
## Deployments

Nofomo is currently deployed with GitHub Pages.

- [Nofomo](https://guyrimel.github.io/nofomo/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEV NOTES -->

## Dev Notes

- A theme color value is stored in localStorage. Since this is purely functional, not utilizing user sensitive info and not a cookie, no cookies permissions prompt was necessary.

- [Nofomo Features, Scenarios, and User Stories]('Features_and_Stories')

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<!-- PREREQUISITES -->

### Prerequisites

1. Git installed globally

2. Node Version Manager (NVM) *and* Node.js installed globally


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTALLATION -->

### Installation

1. In the terminal, navigate to the desired directory and clone the repo.

   ```sh
   git clone https://github.com/GuyRimel/nofomo.git
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- QUICK START -->

### Quick Start

After installation...

1. Still in the terminal, run the following:

   ```sh
   npm install
   ```

2. Compile and run a local server with Parcel by running the following:

   ```sh
   npm run start
   ```

The app will then automatically open in a new browser window.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- UX NOTES -->

## UX Notes

- No account creation necessary! Login with an existing Google account.

- Filter events by city in the navbar

- Toggle between the "Events by Topic" and "Events by City" animated graphs.

- *OBVIOUS SECRET* 🤐 Change the app color theme by clicking the "up arrow" button to the right of the main top title.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SCREENSHOTS -->
## Screenshots

<img
  src="img/screenshots/screenshot00.png"
  alt="screenshot"
  style="height: 24rem; width: auto;"
/>

<img
  src="img/screenshots/screenshot01.png"
  alt="screenshot"
  style="height: 24rem; width: auto;"
/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See <a href="LICENSE.txt" target="_blank">`LICENSE.txt`</a> for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
