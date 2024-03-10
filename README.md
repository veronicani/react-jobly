<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT LOGO -->
<h1 align="center">🧑🏾‍🚀👩🏻‍🍳 Jobly 👨🏽‍🏫👩🏼‍🏭</h1>
<br />
<div align="center">
  <!-- To start a screen record on Mac: Shift + Cmd + 5 -->
  <a href="https://github.com/veronicani/react-jobly">
    <img src="/public/jobly-demo.gif" alt="Demo recording">
  </a>
  
  <br />
  
  <p align="center">
    Heads up world, there's a new job board in town! Connecting eager, strapping, young & old folks to their dream careers, one gig at a time. The hustle is on 💼!
  </p>
  <p>
    <a href="https://jobly.veronicani.dev">View Demo ▶️</a>
    ·
    <a href="https://github.com/veronicani/react-jobly/issues">Report Bug 🐛</a>
    ·
    <a href="https://github.com/veronicani/react-jobly/issues">Request Feature 🙏</a>
  </p>
</div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align="center">

![Top Languages](https://img.shields.io/github/languages/top/veronicani/react-jobly)
![GitHub repo size](https://img.shields.io/github/repo-size/veronicani/react-jobly)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/veronicani/react-jobly)
![Contributors](https://img.shields.io/github/contributors/veronicani/react-jobly)
![GitHub last commit](https://img.shields.io/github/last-commit/veronicani/react-jobly)

</div>
<!-- TABLE OF CONTENTS -->
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Jobly is a job board site where users can sign up, log in, browse companies, and apply to jobs. Company accounts are able to post new jobs.

This is the frontend application, bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [Bootstrap](https://getbootstrap.com/) for styling, and is deployed through [Render](https://render.com/).

It includes a RESTful API to interface with an Express [Jobly Backend](https://github.com/veronicani/express-jobly).

Features to the frontend and backend were implemented as a project in the [Rithm School](https://www.rithmschool.com/) curriculum.

### Project Architecture & Tooling
![Component diagram](/public/component-diagram.png?raw=true)

Topics explored in this project:

Backend:
- Building authentication & authorization routes for anon, users, and admin
- Creating JWT tokens, and validating incoming requests via tokens
- Authorization via middleware
- Creating full test suite with Jest w/ 99% coverage
- Understanding database schema and model design
- Writing database queries within models
- RESTful API design

Frontend:
- React component design and state management
- Separation of components based on logic and display functionalities
- React Router
- Token retrieval via AJAX and local storage

This project a WIP -- Please refer to the [roadmap](#roadmap) for the list of features we plan to add in the future.

<!-- 
To avoid retyping too much info. Do a search and replace with your text editor for the following: `veronicani`, `react-jobly`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

Front-end:
* ![React][React]
* ![Bootstrap][Bootstrap]
* ![Render][Render]

Back-end:
* ![Node.js][Node.js]
* ![Express][Express]
* ![PostgreSQL][PostgreSQL]
* ![SQLAlchemy][SQLAlchemy]
* ![ElephantSQL][ElephantSQL]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, please follow these steps.

1. Follow the instructions for cloning and setting up the [backend repo](https://github.com/veronicani/jobly-flask).
2. In a new terminal, clone the frontend repo.
   ```sh
   git clone https://github.com/veronicani/react-jobly.git
   ```
3. Install frontend dependencies.
    ```sh
    npm install
    ```
4. Run the app in the development mode.
    ```sh
    npm start
    ```
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Finish implementing local token storage
- [ ] Add testing for local token storage
- [ ] More as needed

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Veronica Ni - [veronicani.dev](https://veronicani.dev) - hello.veronicani@gmail.com

[![LinkedIn][linkedin-shield]][linkedin-url] - [linkedin.com/in/veronicani][linkedin-url]

Project Front End Link: [https://github.com/veronicani/react-jobly](https://github.com/veronicani/react-jobly)

Project Back End Link: [https://github.com/veronicani/jobly-flask](https://github.com/veronicani/jobly-flask)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This is a project I completed with Carl Molina and Crystal Tran at Rithm School. Many thanks to the staff team for their excellent curriculum and support!

* Frontend co-authored with: [Carl Molina](https://github.com/carl-molina)
* Backend co-authored with: [Crystal Tran](https://github.com/crystal-tran)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Img-shields](https://shields.io)
* [simpleicons](https://simpleicons.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/veronicani

[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white  
[JQuery]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[Render]: https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[SQLAlchemy]: https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white
[ElephantSQL]: https://img.shields.io/badge/ElephantSQL-96D3F4?style=for-the-badge&logo=elephantsql&logoColor=white
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
