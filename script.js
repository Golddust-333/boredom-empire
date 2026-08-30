const SITE_URL =
  "https://golddust-333.github.io/boredom-empire/";


const activities = [
  {
    id: "click",
    title: "Click the Thing",
    description: "Make a completely pointless number go up.",
    icon: "🖱️",
    category: "game",
    tag: "pointless"
  },
  {
    id: "reaction",
    title: "Reaction Test",
    description: "Test how fast you can react when the button turns green.",
    icon: "⚡",
    category: "game",
    tag: "speed"
  },
  {
    id: "higher",
    title: "Higher or Lower",
    description: "Guess whether the next random number will be higher or lower.",
    icon: "📈",
    category: "game",
    tag: "guessing"
  },
  {
    id: "number",
    title: "Number Guess",
    description: "Find the secret number between 1 and 100.",
    icon: "🔢",
    category: "game",
    tag: "brain"
  },
  {
    id: "rps",
    title: "Rock Paper Scissors",
    description: "Challenge the computer to the classic game.",
    icon: "✊",
    category: "game",
    tag: "classic"
  },
  {
    id: "typing",
    title: "Type This",
    description: "Type a sentence as quickly and accurately as possible.",
    icon: "⌨️",
    category: "game",
    tag: "speed"
  },
  {
    id: "memory",
    title: "Memory Test",
    description: "Memorize the number before it disappears.",
    icon: "🧠",
    category: "game",
    tag: "memory"
  },
  {
    id: "target",
    title: "Target Clicker",
    description: "Click moving targets before the timer reaches zero.",
    icon: "🎯",
    category: "game",
    tag: "speed"
  },
  {
    id: "fortune",
    title: "Useless Fortune",
    description: "Receive extremely questionable wisdom from the internet.",
    icon: "🔮",
    category: "weird",
    tag: "random"
  },
  {
    id: "decision",
    title: "Decision Destroyer",
    description: "Let randomness make your next difficult decision.",
    icon: "🎲",
    category: "toy",
    tag: "random"
  },
  {
    id: "compliment",
    title: "Compliment Machine",
    description: "Press a button and receive some deserved appreciation.",
    icon: "✨",
    category: "toy",
    tag: "fun"
  },
  {
    id: "counter",
    title: "Pointless Counter",
    description: "Count something. Anything. There is absolutely no reason.",
    icon: "🧮",
    category: "toy",
    tag: "pointless"
  },
  {
    id: "breath",
    title: "30 Second Reset",
    description: "Take thirty seconds to do absolutely nothing.",
    icon: "🌊",
    category: "toy",
    tag: "calm"
  },
  {
    id: "spinner",
    title: "Wheel of Nonsense",
    description: "Spin for an unnecessarily important random mission.",
    icon: "🎡",
    category: "weird",
    tag: "random"
  },
  {
    id: "coin",
    title: "Coin Flip",
    description: "Flip a virtual coin and let chance decide.",
    icon: "🪙",
    category: "toy",
    tag: "random"
  },
  {
    id: "dice",
    title: "Roll the Dice",
    description: "Roll a six-sided die instantly in your browser.",
    icon: "🎲",
    category: "toy",
    tag: "random"
  },
  {
    id: "color",
    title: "Color Guess",
    description: "Try to guess the secret color.",
    icon: "🌈",
    category: "game",
    tag: "guessing"
  },
  {
    id: "odd",
    title: "Odd One Out",
    description: "Find the different symbol hidden in the grid.",
    icon: "👀",
    category: "game",
    tag: "visual"
  },
  {
    id: "yesno",
    title: "Yes or No",
    description: "Think of a question and let randomness answer.",
    icon: "❓",
    category: "weird",
    tag: "generator"
  },
  {
    id: "insult",
    title: "Friendly Insult",
    description: "Receive a completely harmless internet insult.",
    icon: "😈",
    category: "weird",
    tag: "funny"
  },
  {
    id: "excuse",
    title: "Excuse Generator",
    description: "Generate a ridiculous excuse for almost anything.",
    icon: "🫣",
    category: "weird",
    tag: "generator"
  },
  {
    id: "mission",
    title: "Random Mission",
    description: "Get a tiny random challenge to complete.",
    icon: "🗺️",
    category: "toy",
    tag: "challenge"
  },
  {
    id: "luck",
    title: "Luck Meter",
    description: "Find out how lucky the internet thinks you are.",
    icon: "🍀",
    category: "weird",
    tag: "random"
  },
  {
    id: "percent",
    title: "Completely Accurate Percentage",
    description: "Discover a scientifically questionable fact about yourself.",
    icon: "📊",
    category: "weird",
    tag: "nonsense"
  }
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
  "Make a snack.",
  "Drink some water.",
  "Play something random.",
  "Go outside for three minutes.",
  "Clean one tiny thing.",
  "Draw something terrible.",
  "Learn one useless fact.",
  "Do absolutely nothing."
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
  "Drink a glass of water.",
  "Stand up and stretch for 20 seconds.",
  "Find something blue.",
  "Look outside for one minute.",
  "Do five squats.",
  "Compliment someone.",
  "Draw a terrible cat.",
  "Take three deep breaths."
];


const defaultState = {
  plays: 0,
  favorites: [],
  records: {}
};

let state;

try {
  state = JSON.parse(
    localStorage.getItem("boredomEmpireV1")
  );
} catch {
  state = null;
}

if (!state || typeof state !== "object") {
  state = { ...defaultState };
}

if (!Array.isArray(state.favorites)) {
  state.favorites = [];
}

if (!state.records || typeof state.records !== "object") {
  state.records = {};
}


const grid = document.getElementById("activityGrid");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("gameModal");
const gameContent = document.getElementById("gameContent");
const searchInput = document.getElementById("searchInput");
const sectionTitle = document.getElementById("sectionTitle");

let currentFilter = "all";
let currentSearch = "";


function saveState() {
  localStorage.setItem(
    "boredomEmpireV1",
    JSON.stringify(state)
  );
}


function updateStats() {
  document.getElementById("totalActivities").textContent =
    activities.length;

  document.getElementById("totalPlays").textContent =
    state.plays;

  document.getElementById("totalFavorites").textContent =
    state.favorites.length;

  document.getElementById("favoriteCount").textContent =
    state.favorites.length;
}


function visibleActivities() {
  return activities.filter((activity) => {
    const filterMatch =
      currentFilter === "all" ||
      (
        currentFilter === "favorites"
          ? state.favorites.includes(activity.id)
          : activity.category === currentFilter
      );

    const text =
      `${activity.title} ${activity.description} ${activity.tag}`
        .toLowerCase();

    return (
      filterMatch &&
      text.includes(currentSearch.toLowerCase())
    );
  });
}


function renderActivities() {
  const items = visibleActivities();

  grid.innerHTML = "";

  emptyState.classList.toggle(
    "hidden",
    items.length !== 0
  );

  items.forEach((activity) => {
    const card = document.createElement("article");
    const favorite =
      state.favorites.includes(activity.id);

    card.className = "activity-card";

    card.innerHTML = `
      <div class="activity-icon">${activity.icon}</div>
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <div class="activity-tag">${activity.tag}</div>

      <button
        class="activity-favorite ${favorite ? "active" : ""}"
        aria-label="Toggle favorite"
      >
        ${favorite ? "★" : "☆"}
      </button>

      <button
        class="activity-open"
        aria-label="Open ${activity.title}"
      ></button>
    `;

    card.querySelector(".activity-favorite").onclick =
      (event) => {
        event.stopPropagation();
        toggleFavorite(activity.id);
      };

    card.querySelector(".activity-open").onclick =
      () => openActivity(activity.id);

    grid.appendChild(card);
  });
}


function renderPopularLinks() {
  const container =
    document.getElementById("popularLinks");

  if (!container) return;

  const popular = [
    "reaction",
    "coin",
    "memory",
    "decision",
    "luck",
    "yesno"
  ];

  container.innerHTML = "";

  popular.forEach((id) => {
    const activity =
      activities.find((item) => item.id === id);

    if (!activity) return;

    const button = document.createElement("button");

    button.className = "popular-link";

    button.textContent =
      `${activity.icon} ${activity.title}`;

    button.onclick =
      () => openActivity(id);

    container.appendChild(button);
  });
}


function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites =
      state.favorites.filter(
        (favorite) => favorite !== id
      );
  } else {
    state.favorites.push(id);
  }

  saveState();
  updateStats();
  renderActivities();
}


function recordPlay(id) {
  state.plays++;

  if (!state.records[id]) {
    state.records[id] = {};
  }

  state.records[id].plays =
    (state.records[id].plays || 0) + 1;

  saveState();
  updateStats();
}


function openModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}


function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (window.location.hash.startsWith("#play-")) {
    history.replaceState(
      null,
      "",
      window.location.pathname
    );
  }
}


function openActivity(id) {
  const activity =
    activities.find((item) => item.id === id);

  if (!activity) return;

  recordPlay(id);

  history.replaceState(
    null,
    "",
    `#play-${id}`
  );

  document.title =
    `${activity.title} | Boredom Empire`;

  openModal();

  gameContent.innerHTML = `
    <h2 class="game-title">
      ${activity.icon} ${activity.title}
    </h2>

    <p class="game-description">
      ${activity.description}
    </p>

    <div
      class="game-area"
      id="gameArea"
    ></div>
  `;

  if (typeof gameFunctions[id] === "function") {
    gameFunctions[id]();
  }
}


function randomActivity() {
  const activity =
    activities[
      Math.floor(Math.random() * activities.length)
    ];

  openActivity(activity.id);
}


function setFilter(filter) {
  currentFilter = filter;
  currentSearch = "";

  searchInput.value = "";

  sectionTitle.textContent =
    filter === "all"
      ? "Everything"
      : filter === "favorites"
        ? "Favorites"
        : filter.charAt(0).toUpperCase() +
          filter.slice(1);

  document
    .querySelectorAll(".nav-button")
    .forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.filter === filter
      );
    });

  renderActivities();
}


document
  .querySelectorAll(".nav-button[data-filter]")
  .forEach((button) => {
    button.onclick =
      () => setFilter(button.dataset.filter);
  });


document.getElementById("favoritesButton").onclick =
  () => setFilter("favorites");


searchInput.oninput =
  (event) => {
    currentSearch = event.target.value;
    renderActivities();
  };


document.getElementById("heroRandomButton").onclick =
  randomActivity;

document.getElementById("footerRandomButton").onclick =
  randomActivity;

document.getElementById("homeButton").onclick =
  () => {
    setFilter("all");
  };


document.getElementById("closeModal").onclick =
  closeModal;

document
  .querySelector("[data-close-modal]")
  .onclick = closeModal;


document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !modal.classList.contains("hidden")
  ) {
    closeModal();
  }
});


const gameFunctions = {

  click() {
    let count = 0;

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <div class="big-number" id="clickNumber">0</div>
        <button class="game-button" id="clickButton">
          MAKE NUMBER GO UP
        </button>
        <p class="game-small">
          There is no prize. That is the prize.
        </p>
      </div>
    `;

    document.getElementById("clickButton").onclick =
      () => {
        count++;
        document.getElementById("clickNumber").textContent =
          count;
      };
  },


  reaction() {
    const area =
      document.getElementById("gameArea");

    area.innerHTML = `
      <div class="game-center">
        <p id="reactionMessage">
          Press START and wait.
        </p>
        <button class="game-button" id="reactionButton">
          START
        </button>
        <p class="game-result" id="reactionResult"></p>
      </div>
    `;

    const button =
      document.getElementById("reactionButton");

    let ready = false;
    let startTime = 0;

    button.onclick = () => {
      if (ready) {
        const time = Math.round(
          performance.now() - startTime
        );

        ready = false;

        document.getElementById("reactionResult").textContent =
          `${time} ms — ${
            time < 200
              ? "ABSURDLY FAST."
              : time < 300
                ? "Very fast."
                : time < 500
                  ? "Not bad."
                  : "The Empire recommends coffee."
          }`;

        button.textContent = "AGAIN";
        button.style.background = "";
        return;
      }

      button.disabled = true;
      button.textContent = "WAIT...";

      setTimeout(() => {
        ready = true;
        startTime = performance.now();
        button.disabled = false;
        button.textContent = "CLICK!";
        button.style.background = "#16803c";
      }, 1000 + Math.random() * 3000);
    };
  },


  higher() {
    let number =
      Math.floor(Math.random() * 100) + 1;

    let streak = 0;

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <p>Will the next number be higher or lower?</p>
        <div class="big-number" id="higherNumber">
          ${number}
        </div>
        <div class="choice-row">
          <button class="choice-button" id="higherButton">
            Higher ↑
          </button>
          <button class="choice-button" id="lowerButton">
            Lower ↓
          </button>
        </div>
        <p class="game-result" id="higherResult">
          Streak: 0
        </p>
      </div>
    `;

    function guess(direction) {
      const next =
        Math.floor(Math.random() * 100) + 1;

      const correct =
        direction === "higher"
          ? next > number
          : next < number;

      streak = correct ? streak + 1 : 0;

      document.getElementById("higherNumber").textContent =
        next;

      document.getElementById("higherResult").textContent =
        correct
          ? `Correct! Streak: ${streak}`
          : `Wrong! Streak reset.`;

      number = next;
    }

    document.getElementById("higherButton").onclick =
      () => guess("higher");

    document.getElementById("lowerButton").onclick =
      () => guess("lower");
  },


  number() {
    const secret =
      Math.floor(Math.random() * 100) + 1;

    let tries = 0;

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <p>I'm thinking of a number from 1 to 100.</p>
        <input
          class="game-input"
          id="numberInput"
          type="number"
          min="1"
          max="100"
          placeholder="Your guess"
        >
        <br><br>
        <button class="game-button" id="numberButton">
          GUESS
        </button>
        <p class="game-result" id="numberResult"></p>
      </div>
    `;

    document.getElementById("numberButton").onclick =
      () => {
        const guess =
          Number(
            document.getElementById("numberInput").value
          );

        const result =
          document.getElementById("numberResult");

        if (guess < 1 || guess > 100) {
          result.textContent =
            "Enter a number from 1 to 100.";
          return;
        }

        tries++;

        if (guess === secret) {
          result.textContent =
            `🎉 Correct! ${tries} tries.`;
        } else {
          result.textContent =
            guess < secret
              ? "Too low."
              : "Too high.";
        }
      };
  },


  rps() {
    const choices =
      ["Rock", "Paper", "Scissors"];

    let wins = 0;

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <div class="choice-row">
          ${choices.map((choice) => `
            <button class="choice-button rps-choice">
              ${choice}
            </button>
          `).join("")}
        </div>
        <p class="game-result" id="rpsResult">
          Wins: 0
        </p>
      </div>
    `;

    document
      .querySelectorAll(".rps-choice")
      .forEach((button) => {
        button.onclick = () => {
          const player =
            button.textContent.trim();

          const computer =
            choices[
              Math.floor(Math.random() * choices.length)
            ];

          let result;

          if (player === computer) {
            result = "Draw!";
          } else if (
            (player === "Rock" && computer === "Scissors") ||
            (player === "Paper" && computer === "Rock") ||
            (player === "Scissors" && computer === "Paper")
          ) {
            wins++;
            result = "You win!";
          } else {
            result = "You lose!";
          }

          document.getElementById("rpsResult").textContent =
            `Computer chose ${computer}. ${result} Wins: ${wins}`;
        };
      });
  },


  typing() {
    const sentence =
      "I am defeating boredom one keystroke at a time.";

    let start = null;

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <p>Type this exactly:</p>
        <strong>${sentence}</strong>
        <br><br>
        <input
          class="game-input"
          id="typingInput"
          placeholder="Start typing..."
        >
        <p class="game-result" id="typingResult"></p>
      </div>
    `;

    const input =
      document.getElementById("typingInput");

    input.oninput = () => {
      if (!start) start = performance.now();

      if (input.value === sentence) {
        const seconds =
          (performance.now() - start) / 1000;

        document.getElementById("typingResult").textContent =
          `Finished in ${seconds.toFixed(2)} seconds!`;
      }
    };
  },


  memory() {
    let sequence = "";

    for (let i = 0; i < 6; i++) {
      sequence +=
        Math.floor(Math.random() * 10);
    }

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <p>Memorize this number.</p>
        <div class="big-number" id="memoryNumber">
          ${sequence}
        </div>
        <button class="game-button" id="memoryHide">
          HIDE IT
        </button>
        <div id="memoryAnswer" class="hidden">
          <br>
          <input
            class="game-input"
            id="memoryInput"
            placeholder="Enter the number"
          >
          <br><br>
          <button class="game-button" id="memoryCheck">
            CHECK
          </button>
          <p class="game-result" id="memoryResult"></p>
        </div>
      </div>
    `;

    document.getElementById("memoryHide").onclick =
      () => {
        document.getElementById("memoryNumber").textContent =
          "??????";

        document
          .getElementById("memoryAnswer")
          .classList.remove("hidden");
      };

    document.getElementById("memoryCheck").onclick =
      () => {
        const answer =
          document.getElementById("memoryInput").value;

        document.getElementById("memoryResult").textContent =
          answer === sequence
            ? "🧠 Correct!"
            : `Wrong! It was ${sequence}.`;
      };
  },


  target() {
    let score = 0;
    let time = 15;
    let running = false;
    let timer;

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <p id="targetTimer">15 seconds</p>
        <button class="game-button" id="targetStart">
          START
        </button>
        <p class="game-result" id="targetScore">
          Score: 0
        </p>
        <div
          id="targetZone"
          style="
            position:relative;
            height:220px;
            margin-top:20px;
            border:1px solid #ded9cf;
            border-radius:16px;
          "
        ></div>
      </div>
    `;

    const zone =
      document.getElementById("targetZone");

    function spawn() {
      if (!running) return;

      zone.innerHTML = `
        <button
          id="target"
          style="
            position:absolute;
            left:${Math.random() * 80}%;
            top:${Math.random() * 70}%;
            width:45px;
            height:45px;
            border:0;
            border-radius:50%;
            background:#171717;
            color:white;
            font-size:20px;
          "
        >
          +
        </button>
      `;

      document.getElementById("target").onclick =
        () => {
          score++;
          document.getElementById("targetScore").textContent =
            `Score: ${score}`;
          spawn();
        };
    }

    document.getElementById("targetStart").onclick =
      () => {
        if (running) return;

        running = true;
        score = 0;
        time = 15;

        spawn();

        timer = setInterval(() => {
          time--;

          document.getElementById("targetTimer").textContent =
            `${time} seconds`;

          if (time <= 0) {
            clearInterval(timer);
            running = false;
            zone.innerHTML = "";
            document.getElementById("targetTimer").textContent =
              `Time's up! Final score: ${score}`;
          }
        }, 1000);
      };
  },


  fortune() {
    simpleRandomGame(
      "fortuneButton",
      "fortuneResult",
      "REVEAL MY FATE",
      fortunes
    );
  },


  decision() {
    simpleRandomGame(
      "decisionButton",
      "decisionResult",
      "DECIDE FOR ME",
      decisions
    );
  },


  compliment() {
    simpleRandomGame(
      "complimentButton",
      "complimentResult",
      "COMPLIMENT ME",
      compliments
    );
  },


  counter() {
    let count = 0;

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <div class="big-number" id="counterNumber">0</div>
        <button class="game-button" id="counterButton">+1</button>
        <button class="choice-button" id="counterReset">
          RESET
        </button>
      </div>
    `;

    document.getElementById("counterButton").onclick =
      () => {
        count++;
        document.getElementById("counterNumber").textContent =
          count;
      };

    document.getElementById("counterReset").onclick =
      () => {
        count = 0;
        document.getElementById("counterNumber").textContent =
          count;
      };
  },


  breath() {
    let seconds = 30;
    let timer;

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <p id="breathText">Ready?</p>
        <div class="progress-track">
          <div class="progress-bar" id="breathProgress"></div>
        </div>
        <br>
        <button class="game-button" id="breathButton">
          START 30s
        </button>
      </div>
    `;

    document.getElementById("breathButton").onclick =
      () => {
        seconds = 30;

        const button =
          document.getElementById("breathButton");

        button.disabled = true;

        timer = setInterval(() => {
          seconds--;

          document.getElementById("breathText").textContent =
            seconds > 0
              ? `Do nothing. ${seconds}s remaining.`
              : "You successfully did nothing.";

          document.getElementById("breathProgress").style.width =
            `${((30 - seconds) / 30) * 100}%`;

          if (seconds <= 0) {
            clearInterval(timer);
            button.disabled = false;
            button.textContent = "AGAIN";
          }
        }, 1000);
      };
  },


  spinner() {
    simpleRandomGame(
      "spinnerButton",
      "spinnerResult",
      "SPIN",
      decisions
    );
  },


  coin() {
    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <div class="big-number" id="coinResult">🪙</div>
        <button class="game-button" id="coinButton">
          FLIP
        </button>
      </div>
    `;

    document.getElementById("coinButton").onclick =
      () => {
        document.getElementById("coinResult").textContent =
          Math.random() < 0.5
            ? "HEADS"
            : "TAILS";
      };
  },


  dice() {
    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <div class="big-number" id="diceResult">🎲</div>
        <button class="game-button" id="diceButton">
          ROLL
        </button>
      </div>
    `;

    document.getElementById("diceButton").onclick =
      () => {
        document.getElementById("diceResult").textContent =
          Math.floor(Math.random() * 6) + 1;
      };
  },


  color() {
    const colors =
      ["Red", "Blue", "Green", "Yellow", "Purple"];

    const secret =
      colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <p>Guess the secret color.</p>
        <div class="choice-row">
          ${colors.map((color) => `
            <button class="choice-button color-choice">
              ${color}
            </button>
          `).join("")}
        </div>
        <p class="game-result" id="colorResult"></p>
      </div>
    `;

    document
      .querySelectorAll(".color-choice")
      .forEach((button) => {
        button.onclick = () => {
          document.getElementById("colorResult").textContent =
            button.textContent.trim() === secret
              ? "🌈 Correct!"
              : `Nope! It was ${secret}.`;
        };
      });
  },


  odd() {
    const size = 9;
    const oddPosition =
      Math.floor(Math.random() * size);

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <p>Find the different symbol.</p>
        <div
          id="oddGrid"
          style="
            display:grid;
            grid-template-columns:repeat(3,70px);
            gap:10px;
            justify-content:center;
          "
        ></div>
        <p class="game-result" id="oddResult"></p>
      </div>
    `;

    const grid =
      document.getElementById("oddGrid");

    for (let i = 0; i < size; i++) {
      const button =
        document.createElement("button");

      button.className = "choice-button";
      button.textContent =
        i === oddPosition ? "○" : "●";

      button.onclick = () => {
        document.getElementById("oddResult").textContent =
          i === oddPosition
            ? "👀 Correct!"
            : "Nope! Try again.";
      };

      grid.appendChild(button);
    }
  },


  yesno() {
    const answers = [
      "YES.",
      "NO.",
      "Probably.",
      "Absolutely.",
      "Definitely not.",
      "Ask again later.",
      "You already know the answer."
    ];

    simpleRandomGame(
      "yesNoButton",
      "yesNoResult",
      "ANSWER ME",
      answers
    );
  },


  insult() {
    simpleRandomGame(
      "insultButton",
      "insultResult",
      "INSULT ME",
      insults
    );
  },


  excuse() {
    simpleRandomGame(
      "excuseButton",
      "excuseResult",
      "GENERATE EXCUSE",
      excuses
    );
  },


  mission() {
    simpleRandomGame(
      "missionButton",
      "missionResult",
      "GIVE ME A MISSION",
      missions
    );
  },


  luck() {
    const luck =
      Math.floor(Math.random() * 101);

    const message =
      luck >= 90
        ? "ABSURDLY LUCKY 🍀"
        : luck >= 70
          ? "Pretty lucky."
          : luck >= 40
            ? "Average human luck."
            : "Maybe don't gamble today.";

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <div class="big-number">${luck}%</div>
        <p class="game-result">${message}</p>
        <button class="game-button" id="luckAgain">
          TRY AGAIN
        </button>
      </div>
    `;

    document.getElementById("luckAgain").onclick =
      () => openActivity("luck");
  },


  percent() {
    const percentage =
      Math.floor(Math.random() * 101);

    const statements = [
      "You are this percentage likely to survive a zombie apocalypse.",
      "You are this percentage qualified to run the Empire.",
      "You are this percentage suspicious.",
      "You are this percentage ready for absolutely anything.",
      "You are this percentage bored right now.",
      "You are this percentage awesome."
    ];

    const statement =
      statements[
        Math.floor(Math.random() * statements.length)
      ];

    document.getElementById("gameArea").innerHTML = `
      <div class="game-center">
        <div class="big-number">${percentage}%</div>
        <p class="game-result">${statement}</p>
        <button class="game-button" id="percentAgain">
          AGAIN
        </button>
      </div>
    `;

    document.getElementById("percentAgain").onclick =
      () => openActivity("percent");
  }
};


function simpleRandomGame(
  buttonId,
  resultId,
  buttonText,
  options
) {
  document.getElementById("gameArea").innerHTML = `
    <div class="game-center">
      <button class="game-button" id="${buttonId}">
        ${buttonText}
      </button>
      <p class="game-result" id="${resultId}"></p>
    </div>
  `;

  document.getElementById(buttonId).onclick =
    () => {
      document.getElementById(resultId).textContent =
        options[
          Math.floor(Math.random() * options.length)
        ];
    };
}


function openActivityFromHash() {
  const hash =
    window.location.hash;

  if (!hash.startsWith("#play-")) return;

  const id =
    hash.replace("#play-", "");

  const exists =
    activities.some(
      (activity) => activity.id === id
    );

  if (exists) {
    openActivity(id);
  }
}


updateStats();
renderActivities();
renderPopularLinks();

setTimeout(
  openActivityFromHash,
  100
);