const projects = [
  {
    name: "Find me Food!",
    url: "https://ericrisher.github.io/find-me-food/",
    tech: "HTML, CSS, JavaScript, jQuery, Google Maps API",
    class: "find-me-food",
    img: "./Assets/find-me-food.png",
  },
  {
    name: "Password Generator",
    url: "https://ericrisher.github.io/password-generator/",
    tech: "JavaScript / CSS / HTML",
    class: "password-generator",
    img: "./Assets/password-generator.png",
  },
  {
    name: "Coding Quiz Challenge",
    url: "https://ericrisher.github.io/code-quiz/",
    tech: "JavaScript / CSS / HTML",
    class: "coding-quiz-challenge",
    img: "./Assets/coding-quiz-challenge.png",
  },
  {
    name: "Work Day Scheduler",
    url: "https://ericrisher.github.io/work-day-scheduler/",
    tech: "JavaScript / Third Party API",
    class: "work-day-scheduler",
    img: "./Assets/work-day-scheduler.png",
  },
  {
    name: "Note Taker",
    url: "https://github.com/EricRisher/notetaker",
    tech: "Express / MySQL2 / Sequelize / CRUD",
    class: "note-taker",
    img: "./Assets/note-taker.png",
  },
  {
    name: "README Generator",
    url: "https://github.com/EricRisher/professional-readme-generator",
    tech: "JavaScript / Inquirer / Node",
    class: "readme-generator",
    img: "./Assets/readme-generator.png",
  },
  {
    name: "Picky Paws",
    url: "https://ericrisher.github.io/picky-paws/",
    tech: "Handlebars / Express / Firebase / Sequelize / Heroku / CRUD",
    class: "picky-paws",
    img: "./Assets/pickypaws.png",
  },
  {
    name: "SVG Logo Generator",
    url: "https://github.com/EricRisher/svglogomaker",
    tech: "Inquirer / Jest / JavaScript",
    class: "svg-logo",
    img: "./Assets/svg-logo-maker.png",
  },
  {
    name: "Employee Tracker",
    url: "https://github.com/EricRisher/employee-tracker",
    tech: "Inquirer / Jest / MySQL2 / Sequelize / CRUD",
    class: "employee-tracker",
    img: "./Assets/employee-tracker.png",
  },
  {
    name: "Weather Dashboard",
    url: "https://github.com/EricRisher/weather-dashboard",
    tech: "Inquirer / Jest / MySQL2 / Sequelize",
    class: "weather-dashboard",
    img: "./Assets/weather-dashboard.png",
  },
];

const education = [
  {
    name: "UC Berkeley Full Stack Web Development Bootcamp",
    dates: "July 2023 - January 2024",
    desc: "The Berkeley Coding Boot Camp transformed me, imparting essential skills for today's tech job market. The part-time format offered flexibility without compromising support, creating a dynamic learning environment. Led by skilled instructors, the program prioritized real-world projects, ensuring immediate applicability. From JavaScript to databases, the curriculum covered in-demand web development skills, enhancing my coding abilities. Additionally, I earned a Certificate of Completion from UC Berkeley Extension, solidifying my readiness for a successful web development career.",
  },
  {
    name: "Computer Science, Saddleback College",
    dates: "August 2022 - June 2023",
    desc: "Computer science student with a strong academic focus on algorithms, database management, and software development. My coursework equipped me with both theoretical knowledge and hands-on programming skills. Eager to apply my expertise to real-world projects, combining academic excellence with practical problem-solving. Passionate about contributing innovative solutions to tech challenges.",
  },
];

const workDiv = projects
  .map((project) => {
    return `
    <div class="work-item ${project.class}" style="background-image: url('${project.img}'); background-size: contain; background-repeat: no-repeat; position: relative;">
      <p>
        <a href="${project.url}">${project.name}<br />
          <font size="-0.5">${project.tech}</font>
        </a>
      </p>
    </div>
  `;
  })
  .join("");

document.querySelector(".work-div").innerHTML = workDiv;

document.querySelector(".work-div").innerHTML = workDiv;

const educationDiv = education
  .map((school) => {
    return `
    <div class="education">
      <p>
        <b>${school.name}</b><br />
        ${school.dates}<br />
        ${school.desc}
      </p>
    </div>
  `;
  })
  .join("");

document.querySelector(".education-div").innerHTML = educationDiv;
