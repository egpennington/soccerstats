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

// Team 2 ====================================== 
let saveEl2 = document.getElementById("save-el2")
let countEl2 = document.getElementById("count-el2")
let count2 = 0

let totalEl2 = document.getElementById("total-el2")
let goalEl2 = document.getElementById("goal-el2")
let goal2 = 0


// Shots taken
function increment2() {
    count2 += 1
    countEl2.textContent = count2
}

function save2() {
    let countStr2 = count2 + " - "
    saveEl2.textContent += countStr2
    countEl2.textContent = 0
    count2 = 0
}

// Goals scored
function score2() {
    goal2 += 1
    goalEl2.textContent = goal2
}

function total2() {
    let countStr2 = goal2 + " - "
    totalEl2.textContent += countStr2
    goalEl2.textContent = 0
    goal2 = 0
}
