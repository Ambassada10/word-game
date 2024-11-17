// script.js

let levels = [
    { words: ["CAT", "ACT", "TAC"], letters: ["C", "A", "T"] },
    { words: ["DOG", "GOD"], letters: ["D", "O", "G"] },
    { words: ["MOON", "NOON", "ON"], letters: ["M", "O", "N"] },
    { words: ["SUN", "UNS"], letters: ["S", "U", "N"] },
    { words: ["SOME", "MORE", "WORDS", "DEMO", "MODE", "SEW", "RODE"], letters: ["S", "O", "M", "E", "W", "R", "D"] },
    { words: ["STAGE", "GATE", "AGE", "TEAS", "SAGE", "EAST", "SET"], letters: ["S", "T", "A", "G", "E"] },
    { words: ["FRONT", "FORT", "TORN", "NOT", "ROT", "FOR", "ON"], letters: ["F", "R", "O", "N", "T"] },
    { words: ["GLARE", "LARGE", "EAR", "RAGE", "ARE", "AGE", "REAL"], letters: ["G", "L", "A", "R", "E"] },
    { words: ["PLANE", "LEAN", "LAP", "PALE", "PLAN", "NAP", "ELAN"], letters: ["P", "L", "A", "N", "E"] },
    { words: ["CHART", "HAT", "ART", "CHAT", "RAT", "CAR", "ARC"], letters: ["C", "H", "A", "R", "T"] },
    { words: ["SHINE", "HEN", "SIN", "HIS", "SHE", "HE", "IN"], letters: ["S", "H", "I", "N", "E"] },
    { words: ["FLOWS", "SLOW", "LOW", "OWL", "FOWLS", "OF", "FLOW"], letters: ["F", "L", "O", "W", "S"] },
    { words: ["CREAM", "ACME", "CAM", "CAR", "EAR", "RACE", "ARE"], letters: ["C", "R", "E", "A", "M"] },
    { words: ["STONE", "NOTE", "ONE", "TONE", "TON"], letters: ["S", "T", "O", "N", "E"] },
    { words: ["LEMON", "MELON", "LONE", "MEN", "ONE"], letters: ["L", "E", "M", "O", "N"] },
    { words: ["GRAPE", "GAPE", "PAGE", "RAG", "PEAR"], letters: ["G", "R", "A", "P", "E"] },
    { words: ["SHINE", "HENS", "HIS", "SHE", "IN"], letters: ["S", "H", "I", "N", "E"] },
    { words: ["CLEAR", "CARE", "RACE", "LACE", "ARC"], letters: ["C", "L", "E", "A", "R"] },
    { words: ["PLANE", "LEAN", "LAP", "NAP", "PAL"], letters: ["P", "L", "A", "N", "E"] },
    { words: ["CLOUD", "LOUD", "COLD", "DOC", "OLD"], letters: ["C", "L", "O", "U", "D"] },
    { words: ["BRAIN", "RAIN", "AIR", "BAR", "BIN"], letters: ["B", "R", "A", "I", "N"] },
    { words: ["SNAKE", "SANE", "SEA", "ASK", "EAT"], letters: ["S", "N", "A", "K", "E"] },       
    { words: ["FLAME", "MALE", "FAME", "ALE", "LAM"], letters: ["F", "L", "A", "M", "E"] },
    { words: ["TRAIL", "TAIL", "RAT", "LIT", "ART"], letters: ["T", "R", "A", "I", "L"] },
    { words: ["HEART", "HEAR", "HAT", "EAR", "ART"], letters: ["H", "E", "A", "R", "T"] },
    { words: ["PEACE", "PACE", "CAP", "APE", "ACE"], letters: ["P", "E", "A", "C", "E"] },
    { words: ["SIGHT", "HIT", "SIT", "ITS", "GIT"], letters: ["S", "I", "G", "H", "T"] },
    { words: ["SPACE", "CAPS", "ACE", "CAP", "SAP"], letters: ["S", "P", "A", "C", "E"] },
    { words: ["MOUNT", "TONE", "NOT", "OUT", "TEN"], letters: ["M", "O", "U", "N", "T"] },
    { words: ["SHIRT", "HITS", "SIR", "HIT", "ITS"], letters: ["S", "H", "I", "R", "T"] },
    { words: ["WATER", "TEAR", "WAR", "RAW", "EAR"], letters: ["W", "A", "T", "E", "R"] },
    { words: ["CROWN", "OWN", "COW", "ROW", "NOW"], letters: ["C", "R", "O", "W", "N"] },
    { words: ["TOUCH", "CUT", "HOT", "HUT", "OUT"], letters: ["T", "O", "U", "C", "H"] },
    { words: ["GLASS", "SAG", "LAG", "GAL", "ASS"], letters: ["G", "L", "A", "S", "S"] },
    { words: ["WORLD", "WORD", "ROW", "OLD", "OWL"], letters: ["W", "O", "R", "L", "D"] },
    { words: ["SHAPE", "HAPS", "SAP", "HAS", "APE"], letters: ["S", "H", "A", "P", "E"] },
    { words: ["SMILE", "LIME", "SLIM", "IS", "MILE"], letters: ["S", "M", "I", "L", "E"] },
    { words: ["SOUND", "SUN", "NOD", "SAD", "DUO"], letters: ["S", "O", "U", "N", "D"] },
    { words: ["FORCE", "CORE", "FOE", "ORE", "OR"], letters: ["F", "O", "R", "C", "E"] },
    { words: ["NIGHT", "HIT", "THIN", "GIT", "TIG"], letters: ["N", "I", "G", "H", "T"] },
    { words: ["TIGER", "GET", "GRIT", "TIE", "RIG"], letters: ["T", "I", "G", "E", "R"] },
    { words: ["PLANT", "PLAN", "PAN", "ANT", "TAN"], letters: ["P", "L", "A", "N", "T"] },
    { words: ["DOUGH", "DOG", "DUO", "GOD", "HUG"], letters: ["D", "O", "U", "G", "H"] },
    { words: ["LIGHT", "HIT", "LIT", "GIT", "TIL"], letters: ["L", "I", "G", "H", "T"] },
    { words: ["CANDY", "CAN", "DAY", "AND", "ANY"], letters: ["C", "A", "N", "D", "Y"] },
    { words: ["GRASS", "SAG", "RAG", "ASS", "GAS"], letters: ["G", "R", "A", "S", "S"] },
    { words: ["PEACH", "HEAP", "ACE", "APE", "CAP"], letters: ["P", "E", "A", "C", "H"] },
    { words: ["WITCH", "ITCH", "WITH", "HIT", "TIC"], letters: ["W", "I", "T", "C", "H"] },
    { words: ["SMART", "STAR", "MAT", "RAT", "ART"], letters: ["S", "M", "A", "R", "T"] },
    { words: ["HOUSE", "USE", "SUE", "SHE", "HUE"], letters: ["H", "O", "U", "S", "E"] },
    { words: ["STONE", "NOTE", "ONE", "TEN", "TON"], letters: ["S", "T", "O", "N", "E"] },
    { words: ["PLAIN", "PLAN", "NAP", "PIN", "LAP"], letters: ["P", "L", "A", "I", "N"] },
    { words: ["THING", "THIN", "HIT", "GIT", "TIN"], letters: ["T", "H", "I", "N", "G"] },
    { words: ["TRUST", "RUST", "TUT", "SUT", "TUR"], letters: ["T", "R", "U", "S", "T"] },
    { words: ["BREAD", "DEAR", "BARE", "READ", "RED"], letters: ["B", "R", "E", "A", "D"] },
    { words: ["GLOVE", "LOVE", "LOG", "GEL", "EGO"], letters: ["G", "L", "O", "V", "E"] },
    { words: ["BLAST", "LAST", "SALT", "SAT", "BAT"], letters: ["B", "L", "A", "S", "T"] },
    { words: ["LEARN", "NEAR", "EAR", "RAN", "LAN"], letters: ["L", "E", "A", "R", "N"] },
    { words: ["PRIDE", "RIDE", "DIE", "PIE", "RED"], letters: ["P", "R", "I", "D", "E"] },
    { words: ["CRISP", "SPIC", "SIP", "RIP", "PIC"], letters: ["C", "R", "I", "S", "P"] },
    { words: ["STING", "SING", "TINS", "ITS", "GIN"], letters: ["S", "T", "I", "N", "G"] },
    { words: ["THUMB", "HUM", "TUB", "BUT", "BUM"], letters: ["T", "H", "U", "M", "B"] },
    { words: ["STONE", "NOTE", "ONE", "TONE", "TON"], letters: ["S", "T", "O", "N", "E"] },
    { words: ["LEMON", "MELON", "LONE", "MEN", "ONE"], letters: ["L", "E", "M", "O", "N"] },
    { words: ["GRAPE", "GAPE", "PAGE", "RAG", "PEAR"], letters: ["G", "R", "A", "P", "E"] },
    { words: ["SHINE", "HENS", "HIS", "SHE", "IN"], letters: ["S", "H", "I", "N", "E"] },
    { words: ["CLEAR", "CARE", "RACE", "LACE", "ARC"], letters: ["C", "L", "E", "A", "R"] },
    { words: ["PLANE", "LEAN", "LAP", "NAP", "PAL"], letters: ["P", "L", "A", "N", "E"] },
    { words: ["CLOUD", "LOUD", "COLD", "DOC", "OLD"], letters: ["C", "L", "O", "U", "D"] },
    { words: ["BRAIN", "RAIN", "AIR", "BAR", "BIN"], letters: ["B", "R", "A", "I", "N"] },
    { words: ["SNAKE", "SANE", "SEA", "ASK", "EAT"], letters: ["S", "N", "A", "K", "E"] },
    { words: ["FLAME", "MALE", "FAME", "ALE", "LAM"], letters: ["F", "L", "A", "M", "E"] },
    { words: ["TRAIL", "TAIL", "RAT", "LIT", "ART"], letters: ["T", "R", "A", "I", "L"] },
    { words: ["HEART", "HEAR", "HAT", "EAR", "ART"], letters: ["H", "E", "A", "R", "T"] },
    { words: ["PEACE", "PACE", "CAP", "APE", "ACE"], letters: ["P", "E", "A", "C", "E"] },
    { words: ["SIGHT", "HIT", "SIT", "ITS", "GIT"], letters: ["S", "I", "G", "H", "T"] },
    { words: ["SPACE", "CAPS", "ACE", "CAP", "SAP"], letters: ["S", "P", "A", "C", "E"] },
    { words: ["MOUNT", "TONE", "NOT", "OUT", "TEN"], letters: ["M", "O", "U", "N", "T"] },
    { words: ["SHIRT", "HITS", "SIR", "HIT", "ITS"], letters: ["S", "H", "I", "R", "T"] },
    { words: ["WATER", "TEAR", "WAR", "RAW", "EAR"], letters: ["W", "A", "T", "E", "R"] },
    { words: ["CROWN", "OWN", "COW", "ROW", "NOW"], letters: ["C", "R", "O", "W", "N"] },
    { words: ["TOUCH", "CUT", "HOT", "HUT", "OUT"], letters: ["T", "O", "U", "C", "H"] },
    { words: ["GLASS", "SAG", "LAG", "GAL", "ASS"], letters: ["G", "L", "A", "S", "S"] },
    { words: ["WORLD", "WORD", "ROW", "OLD", "OWL"], letters: ["W", "O", "R", "L", "D"] },
    { words: ["SHAPE", "HAPS", "SAP", "HAS", "APE"], letters: ["S", "H", "A", "P", "E"] },
    { words: ["SMILE", "LIME", "SLIM", "IS", "MILE"], letters: ["S", "M", "I", "L", "E"] },
    { words: ["SOUND", "SUN", "NOD", "SAD", "DUO"], letters: ["S", "O", "U", "N", "D"] },
    { words: ["FORCE", "CORE", "FOE", "ORE", "OR"], letters: ["F", "O", "R", "C", "E"] },
    { words: ["NIGHT", "HIT", "THIN", "GIT", "TIG"], letters: ["N", "I", "G", "H", "T"] },
    { words: ["TIGER", "GET", "GRIT", "TIE", "RIG"], letters: ["T", "I", "G", "E", "R"] },
    { words: ["PLANT", "PLAN", "PAN", "ANT", "TAN"], letters: ["P", "L", "A", "N", "T"] },
    { words: ["DOUGH", "DOG", "DUO", "GOD", "HUG"], letters: ["D", "O", "U", "G", "H"] },
    { words: ["LIGHT", "HIT", "LIT", "GIT", "TIL"], letters: ["L", "I", "G", "H", "T"] },
    { words: ["CANDY", "CAN", "DAY", "AND", "ANY"], letters: ["C", "A", "N", "D", "Y"] },
    { words: ["GRASS", "SAG", "RAG", "ASS", "GAS"], letters: ["G", "R", "A", "S", "S"] },
    { words: ["PEACH", "HEAP", "ACE", "APE", "CAP"], letters: ["P", "E", "A", "C", "H"] },
    { words: ["WITCH", "ITCH", "WITH", "HIT", "TIC"], letters: ["W", "I", "T", "C", "H"] },
    { words: ["SMART", "STAR", "MAT", "RAT", "ART"], letters: ["S", "M", "A", "R", "T"] },
    { words: ["HOUSE", "USE", "SUE", "SHE", "HUE"], letters: ["H", "O", "U", "S", "E"] },
    { words: ["STONE", "NOTE", "ONE", "TEN", "TON"], letters: ["S", "T", "O", "N", "E"] },
    { words: ["PLAIN", "PLAN", "NAP", "PIN", "LAP"], letters: ["P", "L", "A", "I", "N"] },
    { words: ["THING", "THIN", "HIT", "GIT", "TIN"], letters: ["T", "H", "I", "N", "G"] },        { words: ["TRUST", "RUST", "TUT", "SUT", "TUR"], letters: ["T", "R", "U", "S", "T"] },
    { words: ["BREAD", "DEAR", "BARE", "READ", "RED"], letters: ["B", "R", "E", "A", "D"] },
    { words: ["GLOVE", "LOVE", "LOG", "GEL", "EGO"], letters: ["G", "L", "O", "V", "E"] },
    { words: ["BLAST", "LAST", "SALT", "SAT", "BAT"], letters: ["B", "L", "A", "S", "T"] },
    { words: ["LEARN", "NEAR", "EAR", "RAN", "LAN"], letters: ["L", "E", "A", "R", "N"] },
    { words: ["PRIDE", "RIDE", "DIE", "PIE", "RED"], letters: ["P", "R", "I", "D", "E"] },
    { words: ["CRISP", "SPIC", "SIP", "RIP", "PIC"], letters: ["C", "R", "I", "S", "P"] },
    { words: ["STING", "SING", "TINS", "ITS", "GIN"], letters: ["S", "T", "I", "N", "G"] },
    { words: ["THUMB", "HUM", "TUB", "BUT", "BUM"], letters: ["T", "H", "U", "M", "B"] },
   { words: ["STONE", "TON", "ONE", "NOT", "NET", "TONE", "SET"], letters: ["S", "T", "O", "N", "E"] }
  // ... Continue up to 100 levels in this format
    ];
    
    // ... up to 150 levels

let currentLevel = JSON.parse(localStorage.getItem("currentLevel")) || 0;
let selectedLetters = [];
let score = 0;

const levelDisplay = document.getElementById("levelDisplay");
const wordDisplay = document.getElementById("wordDisplay");
const letterContainer = document.getElementById("letterContainer");
const scoreDisplay = document.getElementById("score");
const gameContainer = document.getElementById("gameContainer");

// Initialize the game at the stored or first level
function initGame() {
    levelDisplay.textContent = currentLevel + 1;
    wordDisplay.innerHTML = levels[currentLevel].words.map(word => "_ ".repeat(word.length)).join("<br>");
    renderLetters();
}

// Start a new level or reset current level
function startLevel() {
    gameContainer.style.display = "block";
    selectedLetters = [];
    score = 0;
    scoreDisplay.textContent = score;
    initGame();
}

// Render the letters for the current level
function renderLetters() {
    letterContainer.innerHTML = "";
    levels[currentLevel].letters.forEach(letter => {
        const letterElem = document.createElement("div");
        letterElem.classList.add("letter");
        letterElem.textContent = letter;
        letterElem.onclick = () => selectLetter(letter);
        letterContainer.appendChild(letterElem);
    });
}

// Select a letter and check the formed word
function selectLetter(letter) {
    selectedLetters.push(letter);
    checkWord();
}

// Check if the selected letters form a valid word
function checkWord() {
    const word = selectedLetters.join("");
    if (levels[currentLevel].words.includes(word)) {
        updateScore();
        revealWord(word);
        resetSelection();
        
        // Check if all words in the level are found
        if (levels[currentLevel].words.every(w => wordDisplay.innerHTML.includes(w))) {
            nextLevel();
        }
    } else if (word.length >= 3) {
        resetSelection(); // Reset if selection is too long and incorrect
    }
}

// Reveal found word in display
function revealWord(word) {
    wordDisplay.innerHTML = levels[currentLevel].words
        .map(w => (w === word ? word : "_ ".repeat(w.length)))
        .join("<br>");
}

// Update the score
function updateScore() {
    score += 10;
    scoreDisplay.textContent = score;
}

// Reset selected letters
function resetSelection() {
    selectedLetters = [];
}

// Shuffle the letters array and re-render
function shuffleLetters() {
    levels[currentLevel].letters.sort(() => Math.random() - 0.5);
    renderLetters();
}

// Show a hint for the first missing word
function showHint() {
    const missingWord = levels[currentLevel].words.find(word => !wordDisplay.innerHTML.includes(word));
    if (missingWord) alert(`Hint: The word starts with '${missingWord[0]}'`);
}

// Progress to the next level, if available
function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        localStorage.setItem("currentLevel", JSON.stringify(currentLevel));
        alert("Level Complete! Proceeding to the next level.");
        startLevel();
    } else {
        alert("Congratulations! You've completed all levels.");
        localStorage.removeItem("currentLevel"); // Clear progress after finishing
    }
}

// Initialize the game at the stored level
window.onload = () => {
    startLevel();
};
