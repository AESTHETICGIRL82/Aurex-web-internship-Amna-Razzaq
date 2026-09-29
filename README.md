# AUREX Full-Stack Engineering Internship

**Intern Name:** Amna Razzaq  
**Domain:** Full-Stack Web Development

---

## Week 1 — Git/GitHub Fundamentals and HTML5 Basics

| Section | Details |
| --- | --- |
| **Task** | Created my first GitHub repository and built a personal portfolio page using semantic HTML5. At this stage, I focused on creating a clear page structure without using CSS. |
| **Technologies Used** | HTML5, Git, GitHub |
| **How to Run** | Clone the repository using `git clone https://github.com/AESTHETICGIRL82/Aurex-web-internship-Amna-Razzaq.git`, then open the `index.html` file in a web browser. |
| **Key Learnings** | Learned the basics of Git, including `add`, `commit`, `push`, and `pull`. I also practiced using semantic HTML elements, organizing headings correctly, and creating accessible form fields. |
| **Challenges** | I initially faced push errors because the remote repository contained changes that were not available locally. After learning how to use `git pull`, I understood how local and remote changes are synchronized. |

---

## Week 2 — CSS3, Flexbox, Grid, and Responsive Design

| Section | Details |
| --- | --- |
| **Task** | Styled the Week 1 HTML portfolio and transformed it into a modern, responsive website using CSS3. |
| **Live Deployment** | [View the live portfolio](https://aestheticgirl82.github.io/Aurex-web-internship-Amna-Razzaq/) |
| **Technologies Used** | HTML5, CSS3, Flexbox, CSS Grid, Git, GitHub, GitHub Pages |
| **Layout and CSS Features** | Used Flexbox for the header, navigation, and mobile menu layout. Used CSS Grid for the main page structure and skills section. Added CSS variables, media queries, spacing, colors, borders, shadows, transitions, hover states, and a sticky header. |
| **Responsive Design** | Added breakpoints for tablet and mobile screens. The navigation changes into a mobile menu on smaller devices, while the content and cards adjust to fit different screen sizes. |
| **Key Learnings** | Learned how Flexbox and CSS Grid can work together to create flexible layouts. I also improved my understanding of responsive design and deployed my first website using GitHub Pages. |
| **Challenges** | Building the hamburger menu was the main challenge. I had to adjust the layout and visibility rules several times to make the menu work properly on both desktop and mobile screens. |

---

## Week 3 — Advanced CSS Grid, Animations, and UI Polish

| Section | Details |
| --- | --- |
| **Task** | Improved the portfolio with a responsive project gallery, smooth animations, interactive hover effects, and a more polished user interface. |
| **Live Deployment** | [View the live portfolio](https://aestheticgirl82.github.io/Aurex-web-internship-Amna-Razzaq/) |
| **Technologies Used** | HTML5, CSS3, CSS Grid, Flexbox, JavaScript, Git, GitHub, GitHub Pages |
| **Advanced CSS Grid** | Built the project gallery using `repeat(auto-fit, minmax(240px, 1fr))`. This allows project cards to automatically resize and reflow according to the available screen width. |
| **Animations and Interactions** | Added page-load fade-in animations, word-by-word animation for the welcome message, project-card hover effects, icon movement, button interactions, navigation transitions, and visible keyboard focus states. |
| **JavaScript Features** | Added JavaScript for the responsive mobile navigation menu, including opening and closing the menu, updating `aria-expanded`, closing the menu when a navigation link is clicked, and closing it with the Escape key. |
| **Responsive Testing** | Tested the portfolio on desktop, tablet, and mobile screen sizes. The layout adapts correctly, the project grid reflows smoothly, and the page does not create unnecessary horizontal scrolling. |
| **Key Learnings** | Learned how `auto-fit` and `minmax()` can create responsive grids with less code. I also gained more experience with CSS keyframes, transitions, hover states, accessibility-focused focus styles, and small UI details that improve the overall experience. |
| **Challenges** | Finding the right animation timing required several adjustments. I also fixed layout and spacing issues related to the sticky header, anchor navigation, footer, and mobile responsiveness. |

---

## Week 4 — JavaScript Fundamentals, DOM Manipulation, and localStorage

| Section | Details |
| --- | --- |
| **Task** | Built TaskFlow, a task management application using HTML5, CSS3, and vanilla JavaScript, then linked it from the main portfolio's Projects section. |
| **Live Deployment** | [View the live portfolio](https://aestheticgirl82.github.io/Aurex-web-internship-Amna-Razzaq/) · [Open TaskFlow directly](https://aestheticgirl82.github.io/Aurex-web-internship-Amna-Razzaq/week%204%20task-manager/) |
| **Technologies Used** | HTML5, CSS3, JavaScript (DOM, Events, localStorage), Git, GitHub, GitHub Pages |
| **Features Implemented** | Adding tasks through a controlled form, editing a task inline, deleting tasks, marking tasks as complete, filtering by All/Active/Completed, clearing completed tasks, live task counters, and an empty-state message when no tasks match the current filter. |
| **JavaScript Concepts Practiced** | Variables (`let`, `const`), conditionals, loops and array methods, functions, arrays and objects (each task modeled as an object inside a tasks array), DOM selection and manipulation, event listeners (`click`, `submit`), and form validation to prevent empty tasks. |
| **localStorage** | Tasks are saved using `JSON.stringify()` on every change and restored using `JSON.parse()` when the page loads, so the task list persists across page refreshes. |
| **Responsive Testing** | Tested on a real mobile device as well as tablet and desktop widths. The task list, filters, and form all adapt cleanly with no horizontal scrolling. |
| **Key Learnings** | Learned how to model application data as an array of objects and keep the interface in sync by re-rendering from that single source of truth. Also learned how localStorage and JSON serialization allow data to persist in the browser without a backend. |
| **Challenges** | Implementing inline editing without losing a task's completed state took some adjustment. Keeping the counters and filtered view accurate after every add, edit, or delete required consolidating updates into a single render function instead of updating the DOM in multiple places. |

---

## Project Structure

```text
aurex-web-internship-Amna-Razzaq/
├── index.html
├── script.js
├── styles/
│   ├── main.css
│   └── animations.css
├── week 4 task-manager/
│   ├── index.html
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── main.css
├── logo.jpg
└── README.md
```
