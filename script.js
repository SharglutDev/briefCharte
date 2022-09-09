// Random Name Button Logic \\

const studentList = [
    'Paul',
    'Floriane',
    'Matthieu',
    'Theo',
    'Eric',
    'Josselin',
    'Philippe',
    'Johann',
    'Florian',
    'Michael',
    'Safae',
    'Nicolas',
    'Ludovic',
    'Mouss',
    'Rony',
    'Etienne Etourdi',
    'Etienne Entrainant',
    'Soeli'
]

const randomButton = document.querySelector(".btn-random-name")
const studentNumber = studentList.length

const pickRandomStudent = () => {
    const randomStudentNumber = Math.floor(Math.random() * studentNumber)
    randomButton.innerHTML = `${studentList[randomStudentNumber]}`
    setTimeout(() => {
        randomButton.innerHTML = 'Random Apprenant'
    }, 3000)
}

randomButton.addEventListener('click', () => {
    pickRandomStudent()
})

// DROPDOWN BLOCK LOGIC \\

const dropdownButtons = document.querySelectorAll(".dropdown")

const toggleClassActive = (clickedButton) => {
    const parentNodex2 = clickedButton.parentNode.parentNode // selecting the first common parent between the dropdown button and the list
    const childListItems = parentNodex2.querySelector(".list-items")
    childListItems.classList.toggle('active')
}

dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
        toggleClassActive(button)
        button.classList.toggle('rotate') // adding rotate(180deg) to the style worked only for 1 click
    })
})
