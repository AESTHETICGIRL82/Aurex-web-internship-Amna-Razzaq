# AUREX Full-Stack Engineering Internship

**Intern Name:** Amna Razzaq  
**Domain:** Full-Stack Web Development  
**GitHub Repository:** [AUREX Internship Repository](https://github.com/AESTHETICGIRL82/Aurex-web-internship-Amna-Razzaq)

---

## About This Repository

This repository contains my progress throughout the AUREX Full-Stack Engineering Internship. It includes my work with semantic HTML, modern CSS layouts, responsive design, Vanilla JavaScript, DOM manipulation, browser storage, React, Vite, and component-based application development.

---

# Month 1 — Frontend Foundation

## Week 1 — Git/GitHub Fundamentals and HTML5 Basics

| Section | Details |
| --- | --- |
| **Task** | Created my first GitHub repository and built a personal portfolio page using semantic HTML5. The main focus was creating a clear and accessible page structure before adding CSS. |
| **Technologies Used** | HTML5, Git, GitHub |
| **How to Run** | Clone the repository using `git clone https://github.com/AESTHETICGIRL82/Aurex-web-internship-Amna-Razzaq.git`, then open the root `index.html` file in a browser. |
| **Key Learnings** | Learned the basics of Git, including `add`, `commit`, `push`, and `pull`. I also practiced semantic HTML, correct heading structure, navigation links, and accessible form fields. |
| **Challenges** | I initially faced push errors because the remote repository contained changes that were not available locally. Learning how to use `git pull` helped me understand how local and remote changes are synchronized. |

---

## Week 2 — CSS3, Flexbox, Grid, and Responsive Design

| Section | Details |
| --- | --- |
| **Task** | Styled the Week 1 portfolio and transformed the plain HTML page into a modern, responsive website using CSS3. |
| **Live Deployment** | [View the Portfolio](https://aestheticgirl82.github.io/Aurex-web-internship-Amna-Razzaq/) |
| **Technologies Used** | HTML5, CSS3, Flexbox, CSS Grid, Git, GitHub, GitHub Pages |
| **Layout and CSS Features** | Used Flexbox for the header, navigation, and mobile menu. Used CSS Grid for the main page layout, skills section, and project cards. Added CSS variables, media queries, spacing, borders, shadows, transitions, hover states, and a sticky header. |
| **Responsive Design** | Added responsive breakpoints for tablet and mobile screens. The navigation changes into a mobile menu, while the content, forms, and cards adjust to different viewport sizes. |
| **Key Learnings** | Learned how Flexbox and CSS Grid work together to create flexible layouts. I also improved my understanding of responsive design and deployed my first website using GitHub Pages. |
| **Challenges** | Building the hamburger menu was the main challenge. I had to adjust its positioning, visibility, overlay behavior, and responsive layout several times. |

---

## Week 3 — Advanced CSS Grid, Animations, and UI Polish

| Section | Details |
| --- | --- |
| **Task** | Improved the portfolio with a responsive project gallery, smooth animations, interactive hover effects, keyboard focus states, and a more polished user interface. |
| **Live Deployment** | [View the Portfolio](https://aestheticgirl82.github.io/Aurex-web-internship-Amna-Razzaq/) |
| **Technologies Used** | HTML5, CSS3, CSS Grid, Flexbox, JavaScript, Git, GitHub, GitHub Pages |
| **Advanced CSS Grid** | Built the project gallery using `repeat(auto-fit, minmax(240px, 1fr))`, allowing project cards to resize and reflow according to the available screen width. |
| **Animations and Interactions** | Added page-load fade-in animations, word-by-word welcome text animation, project-card hover effects, icon movement, button interactions, navigation transitions, and visible keyboard focus states. |
| **JavaScript Features** | Added JavaScript for the responsive mobile navigation menu, including opening and closing the menu, updating `aria-expanded`, closing the menu when a navigation link is clicked, closing it with the Escape key, and closing it when the viewport becomes wider. |
| **Responsive Testing** | Tested the portfolio on desktop, tablet, and mobile screen sizes. The layout adapts correctly, the project grid reflows smoothly, and the page does not create unnecessary horizontal scrolling. |
| **Key Learnings** | Learned how `auto-fit` and `minmax()` create responsive grids with less code. I also gained more experience with CSS keyframes, transitions, hover states, accessibility-focused focus styles, and visual spacing. |
| **Challenges** | Finding the right animation timing required several adjustments. I also fixed layout and spacing issues related to the sticky header, anchor navigation, footer, mobile menu, and project-card alignment. |

---

## Week 4 — JavaScript, DOM Manipulation, Events, and localStorage

| Section | Details |
| --- | --- |
| **Task** | Built TaskFlow, a browser-based task management application using HTML5, CSS3, and Vanilla JavaScript. The application was also linked from the portfolio Projects section. |
| **Live Application** | [Open TaskFlow](https://aestheticgirl82.github.io/Aurex-web-internship-Amna-Razzaq/week%204%20task-manager/) |
| **Portfolio Link** | [View the Main Portfolio](https://aestheticgirl82.github.io/Aurex-web-internship-Amna-Razzaq/) |
| **Technologies Used** | HTML5, CSS3, Vanilla JavaScript, DOM APIs, browser events, `localStorage`, Git, GitHub, GitHub Pages |
| **Features Implemented** | Add tasks, validate task input, edit tasks inline, save or cancel edits, delete tasks, mark tasks as complete, filter tasks by All/Active/Completed, clear completed tasks, display live counters, and show empty-state messages. |
| **DOM and Events** | Used DOM selection, dynamic rendering, event listeners, form submission handling, click events, change events, keyboard events, and class updates to keep the interface synchronized with task data. |
| **localStorage** | Saved tasks using `JSON.stringify()` and restored them using `JSON.parse()` when the application loads. Tasks remain available after refreshing the browser. |
| **Responsive Testing** | Tested the application on desktop, tablet, and mobile screen sizes. The task form, filters, buttons, and task list adapt without unnecessary horizontal scrolling. |
| **Key Learnings** | Learned how to model application data as an array of objects and use one rendering function to keep the interface synchronized with the current state. I also learned how `localStorage` provides simple client-side data persistence without a backend. |
| **Challenges** | Implementing inline editing without losing a task's completion state required careful event handling. Keeping counters, filters, and stored data synchronized after every change required a consistent update and render flow. |

---

# Month 2 — React Fundamentals

## Week 1 — React Fundamentals and Component Architecture

| Section | Details |
| --- | --- |
| **Task** | Rebuilt the task management application as a component-based React application using Vite. |
| **Live Deployment** | To be added after deployment |
| **Project Location** | `week-1-react-task-manager/` |
| **Technologies Used** | React, Vite, JavaScript, JSX, CSS, Git, GitHub |
| **Component Architecture** | Organized the application into reusable `Header`, `TaskForm`, `TaskList`, and `TaskItem` components. |
| **React Concepts Practiced** | JSX, functional components, props, parent-to-child data flow, callback functions, `useState`, `useEffect`, controlled inputs, event handling, list rendering with `key` props, conditional rendering, and `useMemo`. |
| **Features Implemented** | Add tasks, validate empty input, display tasks dynamically, mark tasks as complete, delete tasks, edit tasks inline, save or cancel edits, filter tasks, clear completed tasks, display summary counters, and persist tasks with `localStorage`. |
| **State Management** | Kept the main task array and application state in `App.jsx`. Passed task data and callback functions to child components through props. |
| **Data Persistence** | Used `useEffect()` to save the task list to `localStorage` whenever the state changes. Previously saved tasks are loaded when the application starts. |
| **Key Learnings** | Learned how React re-renders the interface when state changes and how component-based architecture makes UI code easier to organize, maintain, and reuse. |
| **Challenges** | Understanding state flow between parent and child components was the main challenge. Converting DOM-based Vanilla JavaScript logic into React state, props, and event handlers helped me understand declarative UI development. |
| **Build Verification** | Verified the production build using `npm run build`. The Vite production build completed successfully without errors. |

### Running the React Application

```bash
cd week-1-react-task-manager
npm install
npm run dev

**Repository Structure**
Aurex-web-internship-Amna-Razzaq/
├── index.html
├── styles/
│   ├── main.css
│   └── animations.css
├── logo.jpg
├── week 4 task-manager/
│   ├── index.html
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── main.css
├── week-1-react-task-manager/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
└── README.md
