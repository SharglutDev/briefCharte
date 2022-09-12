// Random Name Button Logic \\

const studentList = [
  "Paul",
  "Floriane",
  "Matthieu",
  "Theo",
  "Eric",
  "Josselin",
  "Philippe",
  "Johann",
  "Florian",
  "Michael",
  "Safae",
  "Nicolas",
  "Ludovic",
  "Mouss",
  "Rony",
  "Etienne Etourdi",
  "Etienne Entrainant",
  "Soeli",
];

const randomButton = document.querySelector(".btn-random-name");
const studentNumber = studentList.length;

const pickRandomStudent = () => {
  const randomStudentNumber = Math.floor(Math.random() * studentNumber);
  randomButton.innerHTML = `${studentList[randomStudentNumber]}`;
  randomButton.setAttribute("disabled", "");
  setTimeout(() => {
    randomButton.innerHTML = "Random Apprenant";
    randomButton.removeAttribute("disabled");
  }, 3000);
};

randomButton.addEventListener("click", () => {
  pickRandomStudent();
});

// DROPDOWN BLOCK LOGIC \\

const dropdownButtons = document.querySelectorAll(".dropdown");

const toggleClassActive = (clickedButton) => {
  const commonParentNode = clickedButton.closest(".section-container"); // selecting the first common parent between the dropdown button and the list
  const childListItems = commonParentNode.querySelector(".list-items");
  childListItems.classList.toggle("active");
};

dropdownButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // const closestList = e.target
    //   .closest(".section-container")
    //   .querySelector(".list-items");
    // closestList.classList.toggle("active"); Autre manière avec e.target
    toggleClassActive(button);
    button.classList.toggle("rotate");
  });
});
