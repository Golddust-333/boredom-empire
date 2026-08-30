const SITE_URL = "https://golddust-333.github.io/boredom-empire/";
const STORAGE_KEY = "boredomEmpireV2";

const activities = [
  { id:"click", title:"Click the Thing", description:"Make a completely pointless number go up.", icon:"🖱️", category:"game", tag:"pointless" },
  { id:"reaction", title:"Reaction Test", description:"Test how fast you can react when the button turns green.", icon:"⚡", category:"game", tag:"speed" },
  { id:"higher", title:"Higher or Lower", description:"Guess whether the next random number will be higher or lower.", icon:"📈", category:"game", tag:"guessing" },
  { id:"number", title:"Number Guess", description:"Find the secret number between 1 and 100.", icon:"🔢", category:"game", tag:"brain" },
  { id:"rps", title:"Rock Paper Scissors", description:"Challenge the computer to the classic game.", icon:"✊", category:"game", tag:"classic" },
  { id:"typing", title:"Type This", description:"Type a sentence as quickly and accurately as possible.", icon:"⌨️", category:"game", tag:"speed" },
  { id:"memory", title:"Memory Test", description:"Memorize the number before it disappears.", icon:"🧠", category:"game", tag:"memory" },
  { id:"target", title:"Target Clicker", description:"Click moving targets before the timer reaches zero.", icon:"🎯", category:"game", tag:"speed" },
  { id:"fortune", title:"Useless Fortune", description:"Receive extremely questionable wisdom from the internet.", icon:"🔮", category:"weird", tag:"random" },
  { id:"decision", title:"Decision Destroyer", description:"Let randomness make your next difficult decision.", icon:"🎲", category:"toy", tag:"random" },
  { id:"compliment", title:"Compliment Machine", description:"Press a button and receive some deserved appreciation.", icon:"✨", category:"toy", tag:"fun" },
  { id:"counter", title:"Pointless Counter", description:"Count something. Anything. There is absolutely no reason.", icon:"🧮", category:"toy", tag:"pointless" },
  { id:"breath", title:"30 Second Reset", description:"Take thirty seconds to do absolutely nothing.", icon:"🌊", category:"toy", tag:"calm" },
  { id:"spinner", title:"Wheel of Nonsense", description:"Spin for an unnecessarily important random mission.", icon:"🎡", category:"weird", tag:"random" },
  { id:"coin", title:"Coin Flip", description:"Flip a virtual coin and let chance decide.", icon:"🪙", category:"toy", tag:"random" },
  { id:"dice", title:"Roll the Dice", description:"Roll a six-sided die instantly in your browser.", icon:"🎲", category:"toy", tag:"random" },
  { id:"color", title:"Color Guess", description:"Try to guess the secret color.", icon:"🌈", category:"game", tag:"guessing" },
  { id:"odd", title:"Odd One Out", description:"Find the different symbol hidden in the grid.", icon:"👀", category:"game", tag:"visual" },
  { id:"yesno", title:"Yes or No", description:"Think of a question and let randomness answer.", icon:"❓", category:"weird", tag:"generator" },
  { id:"insult", title:"Friendly Insult", description:"Receive a completely harmless internet insult.", icon:"😈", category:"weird", tag:"funny" },
  { id:"excuse", title:"Excuse Generator", description:"Generate a ridiculous excuse for almost anything.", icon:"🫣", category:"weird", tag:"generator" },
  { id:"mission", title:"Random Mission", description:"Get a tiny random challenge to complete.", icon:"🗺️", category:"toy", tag:"challenge" },
  { id:"luck", title:"Luck Meter", description:"Find out how lucky the internet thinks you are.", icon:"🍀", category:"weird", tag:"random" },
  { id:"percent", title:"Completely Accurate Percentage", description:"Discover a scientifically questionable fact about yourself.", icon:"📊", category:"weird", tag:"nonsense" }
];

const fortunes = [
  "Something mildly interesting will happen soon.",
  "Your next snack will be better than expected.",
  "You are legally allowed to take a break.",
  "Someone somewhere is also bored right now.",
  "You already know what you should do.",
  "Your future contains at least one glass of water."
];
const compliments = [
  "Your curiosity is doing excellent work.",
  "You have elite button-pressing instincts.",
  "You make boredom look productive.",
  "Your timing is suspiciously good.",
  "You are more interesting than you think."
];
const decisions = [
  "Make a snack.", "Drink some water.", "Play something random.", "Go outside for three minutes.",
  "Clean one tiny thing.", "Draw something terrible.", "Learn one useless fact.", "Do absolutely nothing."
];
const insults = [
  "You have the strategic brilliance of a confused potato.",
  "Your Wi-Fi signal has more direction than you do.",
  "Your brain has entered airplane mode.",
  "You're the human equivalent of a loading screen.",
  "Somewhere, a goldfish is making better decisions."
];
const excuses = [
  "My brain needed a software update.",
  "I was mentally preparing. Very slowly.",
  "Something came up. I still don't know what.",
  "I had an important appointment with absolutely nothing.",
  "I was waiting for the correct moment."
];
const missions = [
  "Drink a glass of water.", "Stand up and stretch for 20 seconds.", "Find something blue.",
  "Look outside for one minute.", "Do five squats.", "Compliment someone.",
  "Draw a terrible cat.", "Take three deep breaths."
];
const dailyChallenges = [
  ["Click the Thing", "Make the pointless number reach 50."],
  ["Reaction Test", "Try to get a reaction time under 350 ms."],
  ["Memory Test", "Memorize the number without peeking after hiding it."],
  ["Rock Paper Scissors", "Win three rounds against the computer."],
  ["Odd One Out", "Find the different symbol on your first attempt."],
  ["Random Mission", "Complete whatever tiny mission the Empire gives you."],
  ["Wheel of Nonsense", "Accept the first ridiculous mission you receive."]
];

const defaultState = { plays: 0, favorites: [], records: {} };
let state = loadState();
let currentFilter = "all";
let currentSearch = "";
let activeTimer = null;

const grid = document.getElementById("activityGrid");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("gameModal");
const gameContent = document.getElementById("gameContent");
const searchInput = document.getElementById("searchInput");
const sectionTitle = document.getElementById("sectionTitle");
const resultCount = document.getElementById("resultCount");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      return {
        plays: Number.isFinite(saved.plays) ? saved.plays : 0,
        favorites: Array.isArray(saved.favorites) ? saved.favorites : [],
        records: saved.records && typeof saved.records === "object" ? saved.records : {}
      };
    }
  } catch (error) {
    console.warn("Boredom Empire storage could not be read.", error);
  }
  return { ...defaultState, favorites: [], records: {} };
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { console.warn("Boredom Empire storage could not be saved.", error); }
}

function updateStats() {
  document.getElementById("totalActivities").textContent = activities.length;
  document.getElementById("totalPlays").textContent = state.plays;
  document.getElementById("totalFavorites").textContent = state.favorites.length;
  document.getElementById("favoriteCount").textContent = state.favorites.length;
}

function visibleActivities() {
  const query = currentSearch.trim().toLowerCase();
  return activities.filter(activity => {
    const filterMatch = currentFilter === "all"
      ? true
      : currentFilter === "favorites"
        ? state.favorites.includes(activity.id)
        : activity.category === currentFilter;
    const text = `${activity.title} ${activity.description} ${activity.tag}`.toLowerCase();
    return filterMatch && text.includes(query);
  });
}

function renderActivities() {
  const items = visibleActivities();
  grid.innerHTML = "";
  emptyState.classList.toggle("hidden", items.length !== 0);
  resultCount.textContent = `${items.length} ${items.length === 1 ? "activity" : "activities"}`;

  items.forEach(activity => {
    const card = document.createElement("article");
    const favorite = state.favorites.includes(activity.id);
    card.className = "activity-card";
    card.innerHTML = `
      <div class="activity-icon" aria-hidden="true">${activity.icon}</div>
      <h3>${escapeHTML(activity.title)}</h3>
      <p>${escapeHTML(activity.description)}</p>
      <div class="activity-tag">${escapeHTML(activity.tag)}</div>
      <button class="activity-favorite ${favorite ? "active" : ""}" aria-label="${favorite ? "Remove from favorites" : "Add to favorites"}" aria-pressed="${favorite}">${favorite ? "★" : "☆"}</button>
      <button class="activity-open" aria-label="Open ${escapeHTML(activity.title)}"></button>
    `;
    card.querySelector(".activity-favorite").onclick = event => {
      event.stopPropagation();
      toggleFavorite(activity.id);
    };
    card.querySelector(".activity-open").onclick = () => openActivity(activity.id);
    grid.appendChild(card);
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[char]));
}

function renderPopularLinks() {
  const container = document.getElementById("popularLinks");
  const popular = ["reaction", "coin", "memory", "decision", "luck", "yesno"];
  container.innerHTML = "";
  popular.forEach(id => {
    const activity = activities.find(item => item.id === id);
    if (!activity) return;
    const button = document.createElement("button");
    button.className = "popular-link";
    button.textContent = `${activity.icon} ${activity.title}`;
    button.onclick = () => openActivity(id);
    container.appendChild(button);
  });
}

function renderDailyChallenge() {
  const start = new Date(2026, 0, 1);
  const today = new Date();
  const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const dayNumber = Math.floor((utcToday - start.getTime()) / 86400000);
  const challenge = dailyChallenges[Math.abs(dayNumber) % dailyChallenges.length];
  const activity = activities.find(item => item.title === challenge[0]);
  document.getElementById("dailyTitle").textContent = challenge[0];
  document.getElementById("dailyText").textContent = challenge[1];
  document.getElementById("dailyButton").onclick = () => activity && openActivity(activity.id);
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) state.favorites = state.favorites.filter(item => item !== id);
  else state.favorites.push(id);
  saveState();
  updateStats();
  renderActivities();
}

function recordPlay(id) {
  state.plays += 1;
  if (!state.records[id]) state.records[id] = {};
  state.records[id].plays = (state.records[id].plays || 0) + 1;
  saveState();
  updateStats();
}

function openModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("closeModal").focus();
}

function closeModal() {
  if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  gameContent.innerHTML = "";
  document.title = "Boredom Empire | Free Games, Random Fun & Things To Do When Bored";
  if (window.location.hash.startsWith("#play-")) history.replaceState(null, "", window.location.pathname);
}

function openActivity(id) {
  const activity = activities.find(item => item.id === id);
  if (!activity) return;
  recordPlay(id);
  if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
  history.replaceState(null, "", `#play-${id}`);
  document.title = `${activity.title} | Boredom Empire`;
  gameContent.innerHTML = `
    <h2 class="game-title">${activity.icon} ${escapeHTML(activity.title)}</h2>
    <p class="game-description">${escapeHTML(activity.description)}</p>
    <div class="game-area" id="gameArea"></div>
  `;
  openModal();
  if (typeof gameFunctions[id] === "function") gameFunctions[id]();
}

function randomActivity() {
  const pool = visibleActivities().length ? visibleActivities() : activities;
  openActivity(pool[Math.floor(Math.random() * pool.length)].id);
}

function setFilter(filter) {
  currentFilter = filter;
  currentSearch = "";
  searchInput.value = "";
  sectionTitle.textContent = filter === "all" ? "Everything" : filter === "favorites" ? "Favorites" : filter.charAt(0).toUpperCase() + filter.slice(1);
  document.querySelectorAll(".nav-button").forEach(button => button.classList.toggle("active", button.dataset.filter === filter));
  renderActivities();
  document.getElementById("activities").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".nav-button[data-filter]").forEach(button => button.onclick = () => setFilter(button.dataset.filter));
document.getElementById("favoritesButton").onclick = () => setFilter("favorites");
searchInput.oninput = event => { currentSearch = event.target.value; renderActivities(); };
document.getElementById("clearSearchButton").onclick = () => { currentSearch = ""; searchInput.value = ""; renderActivities(); searchInput.focus(); };
document.getElementById("heroRandomButton").onclick = randomActivity;
document.getElementById("footerRandomButton").onclick = randomActivity;
document.getElementById("homeButton").onclick = event => { event.preventDefault(); setFilter("all"); window.scrollTo({ top: 0, behavior: "smooth" }); };
document.getElementById("closeModal").onclick = closeModal;
document.querySelector("[data-close-modal]").onclick = closeModal;
document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.classList.contains("hidden")) closeModal(); });

const gameFunctions = {
  click() {
    let count = 0;
    const area = document.getElementById("gameArea");
    area.innerHTML = `<div class="game-center"><div class="big-number" id="clickNumber">0</div><button class="game-button" id="clickButton">MAKE NUMBER GO UP</button><p class="game-small">There is no prize. That is the prize.</p></div>`;
    document.getElementById("clickButton").onclick = () => { count += 1; document.getElementById("clickNumber").textContent = count; };
  },
  reaction() {
    const area = document.getElementById("gameArea");
    area.innerHTML = `<div class="game-center"><p id="reactionMessage">Press START and wait.</p><button class="game-button" id="reactionButton">START</button><p class="game-result" id="reactionResult"></p></div>`;
    const button = document.getElementById("reactionButton");
    let ready = false;
    let startTime = 0;
    let timeoutId = null;
    button.onclick = () => {
      if (ready) {
        const time = Math.round(performance.now() - startTime);
        ready = false;
        document.getElementById("reactionResult").textContent = `${time} ms — ${time < 200 ? "ABSURDLY FAST." : time < 300 ? "Very fast." : time < 500 ? "Not bad." : "The Empire recommends coffee."}`;
        button.textContent = "AGAIN";
        button.style.background = "";
        return;
      }
      button.disabled = true;
      button.textContent = "WAIT...";
      timeoutId = setTimeout(() => {
        ready = true; startTime = performance.now(); button.disabled = false; button.textContent = "CLICK!"; button.style.background = "var(--success)";
      }, 1000 + Math.random() * 3000);
    };
    activeTimer = null;
  },
  higher() {
    let number = Math.floor(Math.random() * 100) + 1;
    let streak = 0;
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><p>Will the next number be higher or lower?</p><div class="big-number" id="higherNumber">${number}</div><div class="choice-row"><button class="choice-button" id="higherButton">Higher ↑</button><button class="choice-button" id="lowerButton">Lower ↓</button></div><p class="game-result" id="higherResult">Streak: 0</p></div>`;
    function guess(direction) {
      const next = Math.floor(Math.random() * 100) + 1;
      const correct = direction === "higher" ? next > number : next < number;
      streak = correct ? streak + 1 : 0;
      document.getElementById("higherNumber").textContent = next;
      document.getElementById("higherResult").textContent = correct ? `Correct! Streak: ${streak}` : "Wrong! Streak reset.";
      number = next;
    }
    document.getElementById("higherButton").onclick = () => guess("higher");
    document.getElementById("lowerButton").onclick = () => guess("lower");
  },
  number() {
    const secret = Math.floor(Math.random() * 100) + 1;
    let tries = 0;
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><p>I'm thinking of a number from 1 to 100.</p><input class="game-input" id="numberInput" type="number" min="1" max="100" placeholder="Your guess"><br><br><button class="game-button" id="numberButton">GUESS</button><p class="game-result" id="numberResult"></p></div>`;
    const submit = () => {
      const input = document.getElementById("numberInput");
      const guess = Number(input.value);
      const result = document.getElementById("numberResult");
      if (!Number.isInteger(guess) || guess < 1 || guess > 100) { result.textContent = "Enter a whole number from 1 to 100."; return; }
      tries += 1;
      if (guess === secret) result.textContent = `🎉 Correct! ${tries} ${tries === 1 ? "try" : "tries"}.`;
      else result.textContent = guess < secret ? "Too low." : "Too high.";
    };
    document.getElementById("numberButton").onclick = submit;
    document.getElementById("numberInput").onkeydown = event => { if (event.key === "Enter") submit(); };
  },
  rps() {
    const choices = ["Rock", "Paper", "Scissors"];
    let wins = 0;
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><div class="choice-row">${choices.map(choice => `<button class="choice-button rps-choice">${choice}</button>`).join("")}</div><p class="game-result" id="rpsResult">Wins: 0</p></div>`;
    document.querySelectorAll(".rps-choice").forEach(button => button.onclick = () => {
      const player = button.textContent.trim();
      const computer = choices[Math.floor(Math.random() * choices.length)];
      let result;
      if (player === computer) result = "Draw!";
      else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) { wins += 1; result = "You win!"; }
      else result = "You lose!";
      document.getElementById("rpsResult").textContent = `Computer chose ${computer}. ${result} Wins: ${wins}`;
    });
  },
  typing() {
    const sentence = "I am defeating boredom one keystroke at a time.";
    let start = null;
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><p>Type this exactly:</p><strong>${sentence}</strong><br><br><input class="game-input" id="typingInput" placeholder="Start typing..." autocomplete="off"><p class="game-result" id="typingResult"></p></div>`;
    const input = document.getElementById("typingInput");
    input.oninput = () => {
      if (!start && input.value.length) start = performance.now();
      if (input.value === sentence) {
        const seconds = (performance.now() - start) / 1000;
        document.getElementById("typingResult").textContent = `Finished in ${seconds.toFixed(2)} seconds!`;
      } else if (input.value && !sentence.startsWith(input.value)) document.getElementById("typingResult").textContent = "Not quite — check the text above.";
      else document.getElementById("typingResult").textContent = "";
    };
    input.focus();
  },
  memory() {
    let sequence = "";
    for (let i = 0; i < 6; i += 1) sequence += Math.floor(Math.random() * 10);
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><p>Memorize this number.</p><div class="big-number" id="memoryNumber">${sequence}</div><button class="game-button" id="memoryHide">HIDE IT</button><div id="memoryAnswer" class="hidden"><br><input class="game-input" id="memoryInput" inputmode="numeric" maxlength="6" placeholder="Enter the number"><br><br><button class="game-button" id="memoryCheck">CHECK</button><p class="game-result" id="memoryResult"></p></div></div>`;
    document.getElementById("memoryHide").onclick = () => { document.getElementById("memoryNumber").textContent = "??????"; document.getElementById("memoryAnswer").classList.remove("hidden"); document.getElementById("memoryInput").focus(); };
    document.getElementById("memoryCheck").onclick = () => { const answer = document.getElementById("memoryInput").value; document.getElementById("memoryResult").textContent = answer === sequence ? "🧠 Correct!" : `Wrong! It was ${sequence}.`; };
  },
  target() {
    let score = 0, time = 15, running = false, timer = null;
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><p id="targetTimer">15 seconds</p><button class="game-button" id="targetStart">START</button><p class="game-result" id="targetScore">Score: 0</p><div id="targetZone" class="target-zone"></div></div>`;
    const zone = document.getElementById("targetZone");
    function spawn() {
      if (!running) return;
      zone.innerHTML = `<button id="target" class="target-button" style="left:${Math.random()*85}%;top:${Math.random()*78}%">+</button>`;
      document.getElementById("target").onclick = () => { score += 1; document.getElementById("targetScore").textContent = `Score: ${score}`; spawn(); };
    }
    document.getElementById("targetStart").onclick = () => {
      if (running) return;
      running = true; score = 0; time = 15; spawn();
      timer = setInterval(() => {
        time -= 1; document.getElementById("targetTimer").textContent = `${time} seconds`;
        if (time <= 0) { clearInterval(timer); timer = null; running = false; zone.innerHTML = ""; document.getElementById("targetTimer").textContent = `Time's up! Final score: ${score}`; }
      }, 1000);
      activeTimer = timer;
    };
  },
  fortune() { simpleRandomGame("fortuneButton","fortuneResult","REVEAL MY FATE",fortunes); },
  decision() { simpleRandomGame("decisionButton","decisionResult","DECIDE FOR ME",decisions); },
  compliment() { simpleRandomGame("complimentButton","complimentResult","COMPLIMENT ME",compliments); },
  counter() {
    let count = 0;
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><div class="big-number" id="counterNumber">0</div><div class="choice-row"><button class="game-button" id="counterButton">+1</button><button class="choice-button" id="counterReset">RESET</button></div></div>`;
    document.getElementById("counterButton").onclick = () => { count += 1; document.getElementById("counterNumber").textContent = count; };
    document.getElementById("counterReset").onclick = () => { count = 0; document.getElementById("counterNumber").textContent = count; };
  },
  breath() {
    let seconds = 30;
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><p id="breathText">Ready?</p><div class="progress-track"><div class="progress-bar" id="breathProgress"></div></div><br><button class="game-button" id="breathButton">START 30s</button></div>`;
    document.getElementById("breathButton").onclick = () => {
      seconds = 30; const button = document.getElementById("breathButton"); button.disabled = true; button.textContent = "RUNNING...";
      activeTimer = setInterval(() => {
        seconds -= 1;
        document.getElementById("breathText").textContent = seconds > 0 ? `Do nothing. ${seconds}s remaining.` : "You successfully did nothing.";
        document.getElementById("breathProgress").style.width = `${((30-seconds)/30)*100}%`;
        if (seconds <= 0) { clearInterval(activeTimer); activeTimer = null; button.disabled = false; button.textContent = "AGAIN"; }
      }, 1000);
    };
  },
  spinner() { simpleRandomGame("spinnerButton","spinnerResult","SPIN",missions); },
  coin() {
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><div class="big-number" id="coinResult">🪙</div><button class="game-button" id="coinButton">FLIP</button></div>`;
    document.getElementById("coinButton").onclick = () => { document.getElementById("coinResult").textContent = Math.random() < .5 ? "HEADS" : "TAILS"; };
  },
  dice() {
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><div class="big-number" id="diceResult">🎲</div><button class="game-button" id="diceButton">ROLL</button></div>`;
    document.getElementById("diceButton").onclick = () => { document.getElementById("diceResult").textContent = Math.floor(Math.random()*6)+1; };
  },
  color() {
    const colors = ["Red","Blue","Green","Yellow","Purple"];
    const secret = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><p>Guess the secret color.</p><div class="choice-row">${colors.map(color => `<button class="choice-button color-choice">${color}</button>`).join("")}</div><p class="game-result" id="colorResult"></p></div>`;
    document.querySelectorAll(".color-choice").forEach(button => button.onclick = () => { document.getElementById("colorResult").textContent = button.textContent.trim() === secret ? "🌈 Correct!" : `Nope! It was ${secret}.`; });
  },
  odd() {
    const size = 9;
    const oddPosition = Math.floor(Math.random()*size);
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><p>Find the different symbol.</p><div id="oddGrid" class="odd-grid"></div><p class="game-result" id="oddResult"></p></div>`;
    const oddGrid = document.getElementById("oddGrid");
    for (let i=0; i<size; i+=1) {
      const button = document.createElement("button"); button.className = "choice-button"; button.textContent = i === oddPosition ? "○" : "●";
      button.onclick = () => { document.getElementById("oddResult").textContent = i === oddPosition ? "👀 Correct!" : "Nope! Try again."; };
      oddGrid.appendChild(button);
    }
  },
  yesno() { simpleRandomGame("yesNoButton","yesNoResult","ANSWER ME",["YES.","NO.","Probably.","Absolutely.","Definitely not.","Ask again later.","You already know the answer."]); },
  insult() { simpleRandomGame("insultButton","insultResult","INSULT ME",insults); },
  excuse() { simpleRandomGame("excuseButton","excuseResult","GENERATE EXCUSE",excuses); },
  mission() { simpleRandomGame("missionButton","missionResult","GIVE ME A MISSION",missions); },
  luck() {
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><div class="big-number" id="luckNumber">0%</div><p class="game-result" id="luckMessage"></p><button class="game-button" id="luckAgain">TRY AGAIN</button></div>`;
    function roll() { const luck = Math.floor(Math.random()*101); document.getElementById("luckNumber").textContent = `${luck}%`; document.getElementById("luckMessage").textContent = luck>=90 ? "ABSURDLY LUCKY 🍀" : luck>=70 ? "Pretty lucky." : luck>=40 ? "Average human luck." : "Maybe don't gamble today."; }
    document.getElementById("luckAgain").onclick = roll; roll();
  },
  percent() {
    document.getElementById("gameArea").innerHTML = `<div class="game-center"><div class="big-number" id="percentNumber">0%</div><p class="game-result" id="percentResult"></p><button class="game-button" id="percentAgain">AGAIN</button></div>`;
    const statements = ["You are this percentage likely to survive a zombie apocalypse.","You are this percentage qualified to run the Empire.","You are this percentage suspicious.","You are this percentage ready for absolutely anything.","You are this percentage bored right now.","You are this percentage awesome."];
    function roll() { const percentage = Math.floor(Math.random()*101); document.getElementById("percentNumber").textContent = `${percentage}%`; document.getElementById("percentResult").textContent = statements[Math.floor(Math.random()*statements.length)]; }
    document.getElementById("percentAgain").onclick = roll; roll();
  }
};

function simpleRandomGame(buttonId, resultId, buttonText, options) {
  document.getElementById("gameArea").innerHTML = `<div class="game-center"><button class="game-button" id="${buttonId}">${buttonText}</button><p class="game-result" id="${resultId}"></p></div>`;
  document.getElementById(buttonId).onclick = () => { document.getElementById(resultId).textContent = options[Math.floor(Math.random()*options.length)]; };
}

function openActivityFromHash() {
  const hash = window.location.hash;
  if (!hash.startsWith("#play-")) return;
  const id = hash.slice(6);
  if (activities.some(activity => activity.id === id)) openActivity(id);
}

updateStats();
renderActivities();
renderPopularLinks();
renderDailyChallenge();
setTimeout(openActivityFromHash, 100);
