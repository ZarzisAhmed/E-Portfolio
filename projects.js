/* =========================================================
   PROJECT DATA
   Every project card and the detail page (project.html?id=...)
   read from this one list. Edit the text here to update both.
========================================================= */
const PROJECTS = [
  {
    id: "fitlog",
    name: "FitLog",
    tagline: "A dark, no-nonsense gym companion for your workouts.",
    image: "images/projects/fitlog.png",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Context",
      "React Icons",
      "React Toastify",
      "Vercel",
    ],
    description:
      "FitLog is a workout library web app. Visitors browse twelve lifts that cover every major muscle group, open a detail page for each one (duration, calories, equipment and rating), add exercises to today's plan and save the ones they like. Plan and Saved counters in the header update as you go, and the whole interface uses a dark, gym-style look that stays readable on phones and desktops.",
    live: "https://fitlog-rosy-eta.vercel.app/",
    repo: "https://github.com/ZarzisAhmed/fitlog",
    challenges: [
      "Sharing the plan and saved lists between the library, the detail pages and the My Plan page, so the header counters always stay in sync.",
      "Building dynamic routes (/details/[id]) for twelve exercises while keeping the exercise data in one consistent shape.",
      "Keeping a card-heavy dark layout readable and responsive from small phones to wide desktops using Tailwind CSS and DaisyUI.",
      "Giving clear feedback when exercises are added or removed from the plan without cluttering the interface.",
    ],
    improvements: [
      "Persist the plan and saved lists in localStorage first, then in a database so they survive across devices.",
      "Add user accounts so every person has their own plan and history.",
      "Let users log sets, reps and weights, and show progress charts over time.",
      "Add search and filters by muscle group and equipment, plus a weekly planner view.",
    ],
  },
  {
    id: "dice-roller",
    name: "Simple Dice Roller",
    tagline: "A one-click dice roller built with plain HTML, CSS and JavaScript.",
    image: "images/projects/dice-roller.png",
    stack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    description:
      "A simple dice roller program built with HTML, CSS and JavaScript. Press the button and the page gives you a random roll instantly. I built it to practise DOM manipulation, event handling and working with randomness without any frameworks.",
    live: "https://zarzisahmed.github.io/Dice-Roller/",
    repo: "https://github.com/ZarzisAhmed/Dice-Roller",
    challenges: [
      "Generating a fair random number and mapping it to the correct dice face every time.",
      "Updating the page smoothly after each click using only vanilla JavaScript and the DOM.",
      "Keeping the layout centred and usable on both small and large screens.",
    ],
    improvements: [
      "Roll more than one die at a time and show the total.",
      "Add a roll animation and sound effects.",
      "Keep a roll history and support other dice such as d12 and d20.",
    ],
  },
  {
    id: "landing-page",
    name: "Tech Conference Landing Page",
    tagline: "A professional landing page designed in Figma and built with HTML and CSS.",
    image: "images/projects/landing-page.png",
    stack: ["HTML5", "CSS3", "Figma", "GitHub Pages"],
    description:
      "A professional landing page for a website hosting a tech conference. I first designed the page in Figma and then turned the design into a responsive page using only HTML and CSS, focusing on clear sections, strong typography and a call to action that stands out.",
    live: "https://zarzisahmed.github.io/assignment-1/",
    repo: "https://github.com/ZarzisAhmed/assignment-1",
    challenges: [
      "Translating the Figma design into HTML and CSS while keeping spacing, colours and typography accurate.",
      "Making every section reflow cleanly for tablets and phones without losing the design's look.",
      "Structuring the CSS so sections stayed consistent and easy to change.",
    ],
    improvements: [
      "Add JavaScript for a countdown timer and an interactive speaker schedule.",
      "Include a working registration form with validation.",
      "Improve accessibility and add subtle scroll animations.",
    ],
  },
];
