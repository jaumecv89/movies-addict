<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://jaumecv89.github.io/movies-addict">
    <img src="https://jaumecv89.github.io/movies-addict/logo.a2c5d2b15f16e9de.png" alt="Movies Addict">
  </a>

  <h3 align="center">Movies Addict Project</h3>

  <p align="center">
    A movies and tv shows project using The Movie Database API (https://developers.themoviedb.org/)
    <br />
    <a href="https://jaumecv89.github.io/movies-addict/movies">View Demo</a>
    ·
    <a href="https://github.com/jaumecv89/movies-addict/issues">Report Bug</a>
    ·
    <a href="https://github.com/jaumecv89/movies-addict/issues">Request Feature</a>
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#usage">Development server</a></li>
        <li><a href="#usage">Manual build</a></li>
        <li><a href="#usage">CI build</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project

[![Product Name Screen Shot][product-screenshot]](https://jaumecv89.github.io/movies-addict)

[![Details Product Name Screen Shot][datails-product-screenshot]](https://jaumecv89.github.io/movies-addict)

This project was created for Angular / HTML / CSS testing. It uses the free Movies and TV Shows described before.

The features of this initial project are:
- List the first page returned by the API of top rated movies. It'll only show one of the results at a time. It has a navigation option to see all the results.
- List the first page returned by the API of the top rated TV shows. It'll only show one of the results at a time. It has a navigation option to see all the results.
- When clicking in the More details button in a result, it'll open a new Details view with more information of the movie / show.
- In the Details view, it'll show three similar movies/shows.
- When clicking in one of the similar movie/show, it'll open a new view with the details of the clicked entity.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Angular](https://angular.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Install Node.js [https://nodejs.org/en/](https://nodejs.org/en/)
2. Install Angular
   ```sh
   npm install -g @angular/cli
   ```

### Installation

1. Get a free API Key at [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)
2. Clone the repo
   ```sh
   git clone https://github.com/jaumecv89/movies-addict
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API key in `environment.ts`
   ```js
   API_KEY = 'ENTER YOUR API KEY';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



## Usage

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Manual build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/movies-addict` directory.

### CI build

CI has been integrated with gh-pages. Check the new `deploy` script in `package.json`. The build and deploy on the server are done automatically when merging into master branch. For the configuration and more information go to `movies-addict/actions` and check `build-deploy.yml`.

<p align="right">(<a href="#top">back to top</a>)</p>



## Roadmap

- [x] Create initial project
- [x] Create components and services
- [X] Create movies and tv shows functionalities
- [x] Style the components
- [x] Create details component
- [X] Style details component
- [x] Create similars functionality

<p align="right">(<a href="#top">back to top</a>)</p>



## Contact

Jaume Campderrós - [linkedin.com/in/jcvila](https://www.linkedin.com/in/jcvila/) - jaume.cvila@gmail.com

Project Link: [https://github.com/jaumecv89/movies-addict](https://github.com/jaumecv89/movies-addict)

<p align="right">(<a href="#top">back to top</a>)</p>



## Acknowledgments

* [The Movie Database API](https://www.themoviedb.org/documentation/api)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [Material Icons](https://material.angular.io/components/icon/overview)

<p align="right">(<a href="#top">back to top</a>)</p>



[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/jaumecv89/movies-addict/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jcvila
[product-screenshot]: images/main_screenshot.png
[datails-product-screenshot]: images/details_screenshot.png
