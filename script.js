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

