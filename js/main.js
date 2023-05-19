let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

let totalEl = document.getElementById("total-el")
let goalEl = document.getElementById("goal-el")
let goal = 0


// Shots taken
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// Goals scored
function score() {
    goal += 1
    goalEl.textContent = goal
}

function total() {
    let countStr = goal + " - "
    totalEl.textContent += countStr
    goalEl.textContent = 0
    goal = 0
}

