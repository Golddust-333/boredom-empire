/* =========================================================
   BOREDOM EMPIRE
   PUBLIC V1.0
   ========================================================= */


/* ==================== ACTIVITY DATABASE ==================== */

const activities = [

  {
    id: "click",
    title: "Click the Thing",
    description:
      "Make a completely pointless number go up.",
    icon: "🖱️",
    category: "game",
    tag: "pointless"
  },

  {
    id: "reaction",
    title: "Reaction Test",
    description:
      "Wait for green. Then click as fast as humanly possible.",
    icon: "⚡",
    category: "game",
    tag: "skill"
  },

  {
    id: "higher",
    title: "Higher or Lower",
    description:
      "Predict whether the next number will be higher or lower.",
    icon: "📈",
    category: "game",
    tag: "guessing"
  },

  {
    id: "number",
    title: "Number Guess",
    description:
      "Find the secret number between 1 and 100.",
    icon: "🔢",
    category: "game",
    tag: "brain"
  },

  {
    id: "rps",
    title: "Rock Paper Scissors",
    description:
      "Challenge the computer to the oldest argument on Earth.",
    icon: "✊",
    category: "game",
    tag: "classic"
  },

  {
    id: "typing",
    title: "Type This",
    description:
      "Type the sentence perfectly and see how fast you are.",
    icon: "⌨️",
    category: "game",
    tag: "speed"
  },

  {
    id: "memory",
    title: "Memory Test",
    description:
      "Memorize the numbers before they disappear.",
    icon: "🧠",
    category: "game",
    tag: "memory"
  },

  {
    id: "target",
    title: "Target Clicker",
    description:
      "Click the target as many times as you can.",
    icon: "🎯",
    category: "game",
    tag: "speed"
  },

  {
    id: "fortune",
    title: "Useless Fortune",
    description:
      "Receive extremely questionable wisdom.",
    icon: "🔮",
    category: "weird",
    tag: "weird"
  },

  {
    id: "decision",
    title: "Decision Destroyer",
    description:
      "Can't decide? Let the Empire decide for you.",
    icon: "🎲",
    category: "toy",
    tag: "random"
  },

  {
    id: "compliment",
    title: "Compliment Machine",
    description:
      "Press a button. Receive some deserved appreciation.",
    icon: "✨",
    category: "toy",
    tag: "wholesome"
  },

  {
    id: "counter",
    title: "Pointless Counter",
    description:
      "Count something. Anything. We won't judge.",
    icon: "🧮",
    category: "toy",
    tag: "pointless"
  },

  {
    id: "breath",
    title: "30 Second Reset",
    description:
      "Do absolutely nothing for thirty seconds.",
    icon: "🌊",
    category: "toy",
    tag: "calm"
  },

  {
    id: "spinner",
    title: "Wheel of Nonsense",
    description:
      "Spin for an unnecessarily important mission.",
    icon: "🎡",
    category: "weird",
    tag: "random"
  },

  {
    id: "coin",
    title: "Coin Flip",
    description:
      "Heads or tails. Let destiny handle the difficult stuff.",
    icon: "🪙",
    category: "toy",
    tag: "random"
  },

  {
    id: "dice",
    title: "Roll the Dice",
    description:
      "Roll a six-sided die whenever you feel like it.",
    icon: "🎲",
    category: "toy",
    tag: "random"
  },

  {
    id: "color",
    title: "Color Guess",
    description:
      "Guess which color the Empire secretly picked.",
    icon: "🌈",
    category: "game",
    tag: "guessing"
  },

  {
    id: "odd",
    title: "Odd One Out",
    description:
      "Find the different symbol before your brain gives up.",
    icon: "👀",
    category: "game",
    tag: "visual"
  },

  {
    id: "yesno",
    title: "Yes or No",
    description:
      "Ask yourself a question. The Empire gives you an answer.",
    icon: "❓",
    category: "weird",
    tag: "random"
  },

  {
    id: "insult",
    title: "Friendly Insult",
    description:
      "Receive a completely harmless insult.",
    icon: "😈",
    category: "weird",
    tag: "funny"
  },

  {
    id: "excuse",
    title: "Excuse Generator",
    description:
      "Need an excuse? The Empire has you covered.",
    icon: "🫣",
    category: "weird",
    tag: "generator"
  },

  {
    id: "mission",
    title: "Random Mission",
    description:
      "Get a tiny challenge to complete in real life.",
    icon: "🗺️",
    category: "toy",
    tag: "challenge"
  },

  {
    id: "luck",
    title: "Luck Meter",
    description:
      "Find out how suspiciously lucky you are today.",
    icon: "🍀",
    category: "weird",
    tag: "random"
  },

  {
    id: "percent",
    title: "Completely Accurate Percentage",
    description:
      "Discover a scientifically questionable percentage about yourself.",
    icon: "📊",
    category: "weird",
    tag: "nonsense"
  }

];


/* ==================== RANDOM DATA ==================== */

const fortunes = [

  "Something mildly interesting will happen soon.",

  "Your next snack will be better than expected.",

  "You are legally allowed to take a break.",

  "A suspiciously specific idea is coming.",

  "Today is a good day to press random buttons.",

  "Someone somewhere is also bored right now.",

  "You already know what you should do.",

  "Your future contains at least one glass of water.",

  "You will probably survive the next five minutes.",

  "A button somewhere is waiting for you."

];


const compliments = [

  "Your curiosity is doing excellent work.",

  "You have elite button-pressing instincts.",

  "You make boredom look productive.",

  "Your timing is suspiciously good.",

  "You are more interesting than you think.",

  "You have survived another day of the internet.",

  "Your taste in websites is impeccable.",

  "You deserve approximately 17 compliments."

];


const decisions = [

  "Make a snack.",

  "Drink some water.",

  "Play something random.",

  "Go outside for three minutes.",

  "Clean one tiny thing.",

  "Draw something terrible.",

  "Learn one useless fact.",

  "Take a dramatic break.",

  "Send someone a nice message.",

  "Do ten jumping jacks.",

  "Organize something for exactly two minutes.",

  "Do absolutely nothing."

];


const insults = [

  "You have the strategic brilliance of a confused potato.",

  "Your Wi-Fi signal has more direction than you do.",

  "You probably lose arguments with automatic doors.",

  "Your brain has entered airplane mode.",

  "You're the human equivalent of a loading screen.",

  "Somewhere, a goldfish is making better decisions.",

  "Your procrastination skills are genuinely impressive."

];


const excuses = [

  "I was going to, but then I remembered I am a person.",

  "Something came up. Unfortunately, I don't know what.",

  "I was waiting for the correct moment. It never arrived.",

  "My brain needed a software update.",

  "I completely forgot because I was thinking about something else.",

  "I had a very important appointment with absolutely nothing.",

  "I was mentally preparing. Very slowly."

];


const missions = [

  "Drink a glass of water.",

  "Stand up and stretch for 20 seconds.",

  "Find something blue.",

  "Look outside for one minute.",

  "Do five squats.",

  "Compliment someone.",

  "Draw a terrible cat.",

  "Put one thing back where it belongs.",

  "Take three deep breaths.",

  "Walk around for one minute.",

  "Learn one random fact.",

  "Make your best dramatic face."

];


/* ==================== STATE ==================== */

const defaultState = {

  plays: 0,

  favorites: [],

  records: {}

};


let state;


try {

  state = JSON.parse(
    localStorage.getItem(
      "boredomEmpireV1"
    )
  );

} catch {

  state = null;

}


if (
  !state
  ||
  typeof state !== "object"
) {

  state = {
    ...defaultState
  };

}


if (!Array.isArray(state.favorites)) {

  state.favorites = [];

}


if (
  typeof state.records !== "object"
  ||
  state.records === null
) {

  state.records = {};

}


/* ==================== DOM ==================== */

const grid =
  document.getElementById(
    "activityGrid"
  );


const emptyState =
  document.getElementById(
    "emptyState"
  );


const modal =
  document.getElementById(
    "gameModal"
  );


const gameContent =
  document.getElementById(
    "gameContent"
  );


const searchInput =
  document.getElementById(
    "searchInput"
  );


let currentFilter = "all";

let currentSearch = "";


/* ==================== SAVE ==================== */

function saveState() {

  localStorage.setItem(
    "boredomEmpireV1",
    JSON.stringify(state)
  );

}


/* ==================== STATS ==================== */

function updateStats() {

  document.getElementById(
    "totalActivities"
  ).textContent =
    activities.length;


  document.getElementById(
    "totalPlays"
  ).textContent =
    state.plays;


  document.getElementById(
    "totalFavorites"
  ).textContent =
    state.favorites.length;


  document.getElementById(
    "favoriteCount"
  ).textContent =
    state.favorites.length;

}


/* ==================== FILTERING ==================== */

function getVisibleActivities() {

  return activities.filter(
    activity => {

      let matchesFilter = true;


      if (
        currentFilter === "favorites"
      ) {

        matchesFilter =
          state.favorites.includes(
            activity.id
          );

      } else if (
        currentFilter !== "all"
      ) {

        matchesFilter =
          activity.category
          ===
          currentFilter;

      }


      const searchableText =
        (
          activity.title
          + " "
          + activity.description
          + " "
          + activity.tag
        ).toLowerCase();


      const matchesSearch =
        searchableText.includes(
          currentSearch.toLowerCase()
        );


      return (
        matchesFilter
        &&
        matchesSearch
      );

    }
  );

}


/* ==================== RENDER ==================== */

function renderActivities() {

  const visible =
    getVisibleActivities();


  grid.innerHTML = "";


  emptyState.classList.toggle(
    "hidden",
    visible.length !== 0
  );


  visible.forEach(
    activity => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "activity-card";


      const favorite =
        state.favorites.includes(
          activity.id
        );


      card.innerHTML = `

        <div class="activity-icon">
          ${activity.icon}
        </div>

        <h3>
          ${activity.title}
        </h3>

        <p>
          ${activity.description}
        </p>

        <div class="activity-tag">
          ${activity.tag}
        </div>

        <button
          class="activity-favorite ${favorite ? "active" : ""}"
          aria-label="Favorite"
        >
          ${favorite ? "★" : "☆"}
        </button>

        <button
          class="activity-open"
          aria-label="Open ${activity.title}"
        ></button>

      `;


      const favoriteButton =
        card.querySelector(
          ".activity-favorite"
        );


      favoriteButton.onclick =
        event => {

          event.stopPropagation();


          toggleFavorite(
            activity.id
          );

        };


      card.querySelector(
        ".activity-open"
      ).onclick =
        () => {

          openActivity(
            activity.id
          );

        };


      grid.appendChild(card);

    }
  );

}


/* ==================== FAVORITES ==================== */

function toggleFavorite(id) {

  if (
    state.favorites.includes(id)
  ) {

    state.favorites =
      state.favorites.filter(
        item => item !== id
      );

  } else {

    state.favorites.push(id);

  }


  saveState();

  updateStats();

  renderActivities();

}


/* ==================== PLAY COUNT ==================== */

function recordPlay(id) {

  state.plays++;


  if (
    !state.records[id]
  ) {

    state.records[id] = {};

  }


  state.records[id].plays =
    (
      state.records[id].plays
      ||
      0
    ) + 1;


  saveState();

  updateStats();

}


/* ==================== MODAL ==================== */

function openModal() {

  modal.classList.remove(
    "hidden"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}


function closeModal() {

  modal.classList.add(
    "hidden"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


document.getElementById(
  "closeModal"
).onclick =
  closeModal;


document.querySelector(
  "[data-close-modal]"
).onclick =
  closeModal;


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
      &&
      !modal.classList.contains(
        "hidden"
      )
    ) {

      closeModal();

    }

  }
);


/* ==================== OPEN ACTIVITY ==================== */

function openActivity(id) {

  const activity =
    activities.find(
      item => item.id === id
    );


  if (!activity) return;


  recordPlay(id);

  openModal();


  gameContent.innerHTML = `

    <h2 class="game-title">
      ${activity.icon}
      ${activity.title}
    </h2>

    <p class="game-description">
      ${activity.description}
    </p>

    <div
      class="game-area"
      id="gameArea"
    ></div>

  `;


  const game =
    gameFunctions[id];


  if (game) {

    game();

  }

}


/* ==================== RANDOM ACTIVITY ==================== */

function openRandomActivity() {

  const random =
    activities[
      Math.floor(
        Math.random()
        *
        activities.length
      )
    ];


  openActivity(
    random.id
  );

}


document.getElementById(
  "randomButton"
).onclick =
  openRandomActivity;


document.getElementById(
  "heroRandomButton"
).onclick =
  openRandomActivity;


/* ==================== NAVIGATION ==================== */

document.querySelectorAll(
  ".nav-button"
).forEach(
  button => {

    button.onclick = () => {

      document
        .querySelectorAll(
          ".nav-button"
        )
        .forEach(
          item =>
            item.classList.remove(
              "active"
            )
        );


      button.classList.add(
        "active"
      );


      currentFilter =
        button.dataset.filter;


      renderActivities();

    };

  }
);


/* ==================== FAVORITES FILTER ==================== */

document.getElementById(
  "favoritesButton"
).onclick =
  () => {

    currentFilter =
      "favorites";


    document
      .querySelectorAll(
        ".nav-button"
      )
      .forEach(
        button =>
          button.classList.remove(
            "active"
          )
      );


    renderActivities();


    document.getElementById(
      "sectionTitle"
    ).textContent =
      "Favorites";

  };


/* ==================== SEARCH ==================== */

searchInput.oninput =
  event => {

    currentSearch =
      event.target.value;


    renderActivities();

  };


/* ==================== HOME ==================== */

document.getElementById(
  "homeButton"
).onclick =
  event => {

    event.preventDefault();


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


    currentFilter =
      "all";


    currentSearch =
      "";


    searchInput.value =
      "";


    document
      .querySelectorAll(
        ".nav-button"
      )
      .forEach(
        button => {

          button.classList.toggle(
            "active",
            button.dataset.filter
            ===
            "all"
          );

        }
      );


    document.getElementById(
      "sectionTitle"
    ).textContent =
      "Everything";


    renderActivities();

  };


/* ==================== GAME FUNCTIONS ==================== */

const gameFunctions = {


  /* ---------- CLICK ---------- */

  click() {

    let number = 0;


    const area =
      document.getElementById(
        "gameArea"
      );


    area.innerHTML = `

      <div class="game-center">

        <div
          class="big-number"
          id="clickNumber"
        >
          0
        </div>

        <button
          class="game-button"
          id="clickButton"
        >
          MAKE NUMBER GO UP
        </button>

        <p class="game-small">
          There is no prize.
          That is the prize.
        </p>

      </div>

    `;


    document.getElementById(
      "clickButton"
    ).onclick =
      () => {

        number++;


        document.getElementById(
          "clickNumber"
        ).textContent =
          number;

      };

  },


  /* ---------- REACTION ---------- */

  reaction() {

    const area =
      document.getElementById(
        "gameArea"
      );


    area.innerHTML = `

      <div class="game-center">

        <p id="reactionMessage">
          Press START, then wait.
        </p>

        <button
          class="game-button"
          id="reactionButton"
        >
          START
        </button>

        <p
          class="game-result"
          id="reactionResult"
        ></p>

      </div>

    `;


    const button =
      document.getElementById(
        "reactionButton"
      );


    const result =
      document.getElementById(
        "reactionResult"
      );


    let ready = false;

    let startTime = 0;

    let timeout;


    button.onclick = () => {

      if (ready) {

        const time =
          Math.round(
            performance.now()
            -
            startTime
          );


        ready = false;


        result.textContent =
          `${time} ms — ${
            time < 200
              ? "ABSURDLY FAST."
              : time < 300
                ? "Very fast."
                : time < 500
                  ? "Not bad."
                  : "The Empire recommends coffee."
          }`;


        button.textContent =
          "AGAIN";


        return;

      }


      button.disabled =
        true;


      button.textContent =
        "WAIT...";


      const delay =
        1000
        +
        Math.random()
        *
        3500;


      timeout =
        setTimeout(
          () => {

            ready = true;

            startTime =
              performance.now();

            button.disabled =
              false;

            button.textContent =
              "CLICK!";

            button.style.background =
              "#16803c";

          },
          delay
        );

    };

  },


  /* ---------- HIGHER / LOWER ---------- */

  higher() {

    let number =
      Math.floor(
        Math.random()
        *
        100
      ) + 1;


    let streak = 0;


    const area =
      document.getElementById(
        "gameArea"
      );


    area.innerHTML = `

      <div class="game-center">

        <p>
          Will the next number be
          higher or lower?
        </p>

        <div
          class="big-number"
          id="higherNumber"
        >
          ${number}
        </div>

        <div class="choice-row">

          <button
            class="choice-button"
            id="higherButton"
          >
            Higher ↑
          </button>

          <button
            class="choice-button"
            id="lowerButton"
          >
            Lower ↓
          </button>

        </div>

        <p
          class="game-result"
          id="higherResult"
        >
          Streak: 0
        </p>

      </div>

    `;


    function guess(direction) {

      const next =
        Math.floor(
          Math.random()
          *
          100
        ) + 1;


      const correct =
        direction === "higher"
          ? next > number
          : next < number;


      if (correct) {

        streak++;

      } else {

        streak = 0;

      }


      document.getElementById(
        "higherNumber"
      ).textContent =
        next;


      document.getElementById(
        "higherResult"
      ).textContent =
        correct
          ? `Correct! Streak: ${streak}`
          : `Wrong! The number was ${next}. Streak reset.`;


      number = next;

    }


    document.getElementById(
      "higherButton"
    ).onclick =
      () => guess("higher");


    document.getElementById(
      "lowerButton"
    ).onclick =
      () => guess("lower");

  },


  /* ---------- NUMBER GUESS ---------- */

  number() {

    const secret =
      Math.floor(
        Math.random()
        *
        100
      ) + 1;


    let tries = 0;


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <p>
          I'm thinking of a number
          from 1 to 100.
        </p>

        <input
          class="game-input"
          id="numberInput"
          type="number"
          min="1"
          max="100"
          placeholder="Your guess"
        >

        <br><br>

        <button
          class="game-button"
          id="numberButton"
        >
          GUESS
        </button>

        <p
          class="game-result"
          id="numberResult"
        ></p>

      </div>

    `;


    const input =
      document.getElementById(
        "numberInput"
      );


    const result =
      document.getElementById(
        "numberResult"
      );


    document.getElementById(
      "numberButton"
    ).onclick =
      () => {

        const guess =
          Number(
            input.value
          );


        if (
          guess < 1
          ||
          guess > 100
        ) {

          result.textContent =
            "Enter a number from 1 to 100.";

          return;

        }


        tries++;


        if (
          guess === secret
        ) {

          result.textContent =
            `🎉 Correct! You got it in ${tries} ${tries === 1 ? "try" : "tries"}.`;

        } else if (
          guess < secret
        ) {

          result.textContent =
            "Too low.";

        } else {

          result.textContent =
            "Too high.";

        }

      };

  },


  /* ---------- ROCK PAPER SCISSORS ---------- */

  rps() {

    const choices = [
      "Rock",
      "Paper",
      "Scissors"
    ];


    let wins = 0;


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="choice-row">

          ${choices
            .map(
              choice => `
                <button
                  class="choice-button rps-choice"
                >
                  ${choice}
                </button>
              `
            )
            .join("")
          }

        </div>

        <p
          class="game-result"
          id="rpsResult"
        >
          Wins: 0
        </p>

      </div>

    `;


    document
      .querySelectorAll(
        ".rps-choice"
      )
      .forEach(
        button => {

          button.onclick =
            () => {

              const player =
                button.textContent.trim();


              const computer =
                choices[
                  Math.floor(
                    Math.random()
                    *
                    choices.length
                  )
                ];


              let outcome;


              if (
                player === computer
              ) {

                outcome =
                  "Draw!";

              } else if (

                (
                  player === "Rock"
                  &&
                  computer === "Scissors"
                )

                ||

                (
                  player === "Paper"
                  &&
                  computer === "Rock"
                )

                ||

                (
                  player === "Scissors"
                  &&
                  computer === "Paper"
                )

              ) {

                outcome =
                  "You win!";

                wins++;

              } else {

                outcome =
                  "You lose!";

              }


              document.getElementById(
                "rpsResult"
              ).textContent =
                `Computer chose ${computer}. ${outcome} Wins: ${wins}`;

            };

        }
      );

  },


  /* ---------- TYPING ---------- */

  typing() {

    const sentence =
      "I am defeating boredom one keystroke at a time.";


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div>

        <p>
          Type this exactly:
        </p>

        <strong>
          ${sentence}
        </strong>

        <br><br>

        <input
          class="game-input"
          id="typingInput"
          placeholder="Start typing..."
          autocomplete="off"
        >

        <p
          class="game-result"
          id="typingResult"
        ></p>

      </div>

    `;


    const input =
      document.getElementById(
        "typingInput"
      );


    let start = 0;


    input.oninput =
      () => {

        if (!start) {

          start =
            performance.now();

        }


        if (
          input.value === sentence
        ) {

          const seconds =
            (
              performance.now()
              -
              start
            )
            /
            1000;


          document.getElementById(
            "typingResult"
          ).textContent =
            `Finished in ${seconds.toFixed(2)} seconds!`;

        }

      };

  },


  /* ---------- MEMORY ---------- */

  memory() {

    let sequence = "";


    for (
      let i = 0;
      i < 6;
      i++
    ) {

      sequence +=
        Math.floor(
          Math.random()
          *
          10
        );

    }


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <p>
          Memorize this number.
        </p>

        <div
          class="big-number"
          id="memoryNumber"
        >
          ${sequence}
        </div>

        <button
          class="game-button"
          id="memoryHide"
        >
          HIDE IT
        </button>

        <div
          id="memoryAnswer"
          class="hidden"
        >

          <br>

          <input
            class="game-input"
            id="memoryInput"
            placeholder="Enter the number"
            inputmode="numeric"
          >

          <br><br>

          <button
            class="game-button"
            id="memoryCheck"
          >
            CHECK
          </button>

          <p
            class="game-result"
            id="memoryResult"
          ></p>

        </div>

      </div>

    `;


    document.getElementById(
      "memoryHide"
    ).onclick =
      () => {

        document.getElementById(
          "memoryNumber"
        ).textContent =
          "??????";


        document.getElementById(
          "memoryAnswer"
        ).classList.remove(
          "hidden"
        );

      };


    document.getElementById(
      "memoryCheck"
    ).onclick =
      () => {

        const answer =
          document.getElementById(
            "memoryInput"
          ).value;


        document.getElementById(
          "memoryResult"
        ).textContent =
          answer === sequence
            ? "🧠 Correct! Your memory is working."
            : `Wrong! It was ${sequence}.`;

      };

  },


  /* ---------- TARGET ---------- */

  target() {

    let score = 0;

    let time = 15;

    let running = false;

    let interval;


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <p id="targetTimer">
          15 seconds
        </p>

        <button
          class="game-button"
          id="targetStart"
        >
          START
        </button>

        <p
          class="game-result"
          id="targetScore"
        >
          Score: 0
        </p>

        <div
          id="targetZone"
          style="
            position:relative;
            height:180px;
            margin-top:20px;
            border:1px solid #ddd;
            border-radius:14px;
            background:white;
          "
        ></div>

      </div>

    `;


    const zone =
      document.getElementById(
        "targetZone"
      );


    const start =
      document.getElementById(
        "targetStart"
      );


    start.onclick =
      () => {

        if (running) return;


        running = true;

        score = 0;

        time = 15;


        start.textContent =
          "RUNNING...";


        spawn();


        interval =
          setInterval(
            () => {

              time--;


              document.getElementById(
                "targetTimer"
              ).textContent =
                `${time} seconds`;


              if (
                time <= 0
              ) {

                clearInterval(
                  interval
                );


                running =
                  false;


                zone.innerHTML =
                  "";


                start.textContent =
                  "PLAY AGAIN";


                document.getElementById(
                  "targetTimer"
                ).textContent =
                  "Time's up!";


              }

            },
            1000
          );

      };


    function spawn() {

      if (!running) return;


      zone.innerHTML = `

        <button
          id="target"
          style="
            position:absolute;
            left:${10 + Math.random() * 75}%;
            top:${10 + Math.random() * 65}%;
            width:42px;
            height:42px;
            border:0;
            border-radius:50%;
            background:#111;
            color:#fff;
            font-weight:900;
          "
        >
          +
        </button>

      `;


      document.getElementById(
        "target"
      ).onclick =
        () => {

          score++;


          document.getElementById(
            "targetScore"
          ).textContent =
            `Score: ${score}`;


          spawn();

        };

    }

  },


  /* ---------- FORTUNE ---------- */

  fortune() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="big-number">
          🔮
        </div>

        <button
          class="game-button"
          id="fortuneButton"
        >
          REVEAL MY FATE
        </button>

        <p
          class="game-result"
          id="fortuneResult"
        ></p>

      </div>

    `;


    document.getElementById(
      "fortuneButton"
    ).onclick =
      () => {

        document.getElementById(
          "fortuneResult"
        ).textContent =
          fortunes[
            Math.floor(
              Math.random()
              *
              fortunes.length
            )
          ];

      };

  },


  /* ---------- DECISION ---------- */

  decision() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <p>
          Don't think. Just press it.
        </p>

        <button
          class="game-button"
          id="decisionButton"
        >
          DECIDE FOR ME
        </button>

        <p
          class="game-result"
          id="decisionResult"
        ></p>

      </div>

    `;


    document.getElementById(
      "decisionButton"
    ).onclick =
      () => {

        document.getElementById(
          "decisionResult"
        ).textContent =
          decisions[
            Math.floor(
              Math.random()
              *
              decisions.length
            )
          ];

      };

  },


  /* ---------- COMPLIMENT ---------- */

  compliment() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="big-number">
          ✨
        </div>

        <button
          class="game-button"
          id="complimentButton"
        >
          COMPLIMENT ME
        </button>

        <p
          class="game-result"
          id="complimentResult"
        ></p>

      </div>

    `;


    document.getElementById(
      "complimentButton"
    ).onclick =
      () => {

        document.getElementById(
          "complimentResult"
        ).textContent =
          compliments[
            Math.floor(
              Math.random()
              *
              compliments.length
            )
          ];

      };

  },


  /* ---------- COUNTER ---------- */

  counter() {

    let count = 0;


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div
          class="big-number"
          id="counterNumber"
        >
          0
        </div>

        <button
          class="game-button"
          id="counterButton"
        >
          +1
        </button>

        <button
          class="choice-button"
          id="counterReset"
        >
          RESET
        </button>

      </div>

    `;


    document.getElementById(
      "counterButton"
    ).onclick =
      () => {

        count++;


        document.getElementById(
          "counterNumber"
        ).textContent =
          count;

      };


    document.getElementById(
      "counterReset"
    ).onclick =
      () => {

        count = 0;


        document.getElementById(
          "counterNumber"
        ).textContent =
          0;

      };

  },


  /* ---------- BREATH ---------- */

  breath() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <p id="breathText">
          Ready?
        </p>

        <div class="progress-track">

          <div
            class="progress-bar"
            id="breathProgress"
          ></div>

        </div>

        <br>

        <button
          class="game-button"
          id="breathButton"
        >
          START 30s
        </button>

      </div>

    `;


    let seconds = 30;

    let timer = null;


    document.getElementById(
      "breathButton"
    ).onclick =
      () => {

        seconds = 30;


        const button =
          document.getElementById(
            "breathButton"
          );


        button.disabled =
          true;


        button.textContent =
          "RUNNING...";


        timer =
          setInterval(
            () => {

              seconds--;


              document.getElementById(
                "breathText"
              ).textContent =
                seconds > 0
                  ? `Do nothing. ${seconds}s remaining.`
                  : "You successfully did nothing.";


              document.getElementById(
                "breathProgress"
              ).style.width =
                `${((30 - seconds) / 30) * 100}%`;


              if (
                seconds <= 0
              ) {

                clearInterval(
                  timer
                );


                button.disabled =
                  false;


                button.textContent =
                  "AGAIN";

              }

            },
            1000
          );

      };

  },


  /* ---------- SPINNER ---------- */

  spinner() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="big-number">
          🎡
        </div>

        <button
          class="game-button"
          id="spinnerButton"
        >
          SPIN
        </button>

        <p
          class="game-result"
          id="spinnerResult"
        ></p>

      </div>

    `;


    document.getElementById(
      "spinnerButton"
    ).onclick =
      () => {

        document.getElementById(
          "spinnerResult"
        ).textContent =
          decisions[
            Math.floor(
              Math.random()
              *
              decisions.length
            )
          ];

      };

  },


  /* ---------- COIN ---------- */

  coin() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div
          class="big-number"
          id="coinResult"
        >
          🪙
        </div>

        <button
          class="game-button"
          id="coinButton"
        >
          FLIP
        </button>

      </div>

    `;


    document.getElementById(
      "coinButton"
    ).onclick =
      () => {

        document.getElementById(
          "coinResult"
        ).textContent =
          Math.random() < 0.5
            ? "HEADS"
            : "TAILS";

      };

  },


  /* ---------- DICE ---------- */

  dice() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div
          class="big-number"
          id="diceResult"
        >
          🎲
        </div>

        <button
          class="game-button"
          id="diceButton"
        >
          ROLL
        </button>

      </div>

    `;


    document.getElementById(
      "diceButton"
    ).onclick =
      () => {

        document.getElementById(
          "diceResult"
        ).textContent =
          Math.floor(
            Math.random()
            *
            6
          ) + 1;

      };

  },


  /* ---------- COLOR ---------- */

  color() {

    const colors = [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple"
    ];


    const secret =
      colors[
        Math.floor(
          Math.random()
          *
          colors.length
        )
      ];


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <p>
          Guess the secret color.
        </p>

        <div class="choice-row">

          ${colors
            .map(
              color => `
                <button
                  class="choice-button color-choice"
                >
                  ${color}
                </button>
              `
            )
            .join("")
          }

        </div>

        <p
          class="game-result"
          id="colorResult"
        ></p>

      </div>

    `;


    document
      .querySelectorAll(
        ".color-choice"
      )
      .forEach(
        button => {

          button.onclick =
            () => {

              const guess =
                button.textContent.trim();


              document.getElementById(
                "colorResult"
              ).textContent =
                guess === secret
                  ? "🌈 Correct!"
                  : `Nope! It was ${secret}.`;

            };

        }
      );

  },


  /* ---------- ODD ONE OUT ---------- */

  odd() {

    let size = 9;

    const normal = "●";

    const different = "○";

    const oddPosition =
      Math.floor(
        Math.random()
        *
        size
      );


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <p>
          Find the different symbol.
        </p>

        <div
          id="oddGrid"
          style="
            display:grid;
            grid-template-columns:repeat(3,60px);
            gap:10px;
            justify-content:center;
            margin:20px 0;
          "
        ></div>

        <p
          class="game-result"
          id="oddResult"
        ></p>

      </div>

    `;


    const grid =
      document.getElementById(
        "oddGrid"
      );


    for (
      let i = 0;
      i < size;
      i++
    ) {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "choice-button";


      button.style.fontSize =
        "28px";


      button.textContent =
        i === oddPosition
          ? different
          : normal;


      button.onclick =
        () => {

          document.getElementById(
            "oddResult"
          ).textContent =
            i === oddPosition
              ? "👀 Correct!"
              : "Nope! Try again.";

        };


      grid.appendChild(
        button
      );

    }

  },


  /* ---------- YES / NO ---------- */

  yesno() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <p>
          Think of a yes/no question.
        </p>

        <button
          class="game-button"
          id="yesNoButton"
        >
          ANSWER ME
        </button>

        <p
          class="game-result"
          id="yesNoResult"
        ></p>

      </div>

    `;


    document.getElementById(
      "yesNoButton"
    ).onclick =
      () => {

        const answers = [
          "YES.",
          "NO.",
          "Probably.",
          "Absolutely.",
          "Definitely not.",
          "Ask again later.",
          "The Empire refuses to comment.",
          "You already know the answer."
        ];


        document.getElementById(
          "yesNoResult"
        ).textContent =
          answers[
            Math.floor(
              Math.random()
              *
              answers.length
            )
          ];

      };

  },


  /* ---------- INSULT ---------- */

  insult() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="big-number">
          😈
        </div>

        <button
          class="game-button"
          id="insultButton"
        >
          INSULT ME
        </button>

        <p
          class="game-result"
          id="insultResult"
        ></p>

      </div>

    `;


    document.getElementById(
      "insultButton"
    ).onclick =
      () => {

        document.getElementById(
          "insultResult"
        ).textContent =
          insults[
            Math.floor(
              Math.random()
              *
              insults.length
            )
          ];

      };

  },


  /* ---------- EXCUSE ---------- */

  excuse() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="big-number">
          🫣
        </div>

        <button
          class="game-button"
          id="excuseButton"
        >
          GENERATE EXCUSE
        </button>

        <p
          class="game-result"
          id="excuseResult"
        ></p>

      </div>

    `;


    document.getElementById(
      "excuseButton"
    ).onclick =
      () => {

        document.getElementById(
          "excuseResult"
        ).textContent =
          excuses[
            Math.floor(
              Math.random()
              *
              excuses.length
            )
          ];

      };

  },


  /* ---------- MISSION ---------- */

  mission() {

    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="big-number">
          🗺️
        </div>

        <button
          class="game-button"
          id="missionButton"
        >
          GIVE ME A MISSION
        </button>

        <p
          class="game-result"
          id="missionResult"
        ></p>

      </div>

    `;


    document.getElementById(
      "missionButton"
    ).onclick =
      () => {

        document.getElementById(
          "missionResult"
        ).textContent =
          missions[
            Math.floor(
              Math.random()
              *
              missions.length
            )
          ];

      };

  },


  /* ---------- LUCK ---------- */

  luck() {

    const number =
      Math.floor(
        Math.random()
        *
        101
      );


    let message;


    if (number >= 90) {

      message =
        "ABSURDLY LUCKY 🍀";

    } else if (
      number >= 70
    ) {

      message =
        "Pretty lucky.";

    } else if (
      number >= 40
    ) {

      message =
        "Average human luck.";

    } else {

      message =
        "Maybe don't gamble today.";

    }


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="big-number">
          ${number}%
        </div>

        <p class="game-result">
          ${message}
        </p>

        <button
          class="game-button"
          id="luckAgain"
        >
          TRY AGAIN
        </button>

      </div>

    `;


    document.getElementById(
      "luckAgain"
    ).onclick =
      () => {

        closeModal();

        setTimeout(
          () => openActivity("luck"),
          100
        );

      };

  },


  /* ---------- PERCENTAGE ---------- */

  percent() {

    const percentage =
      Math.floor(
        Math.random()
        *
        101
      );


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
        Math.floor(
          Math.random()
          *
          statements.length
        )
      ];


    document.getElementById(
      "gameArea"
    ).innerHTML = `

      <div class="game-center">

        <div class="big-number">
          ${percentage}%
        </div>

        <p class="game-result">
          ${statement}
        </p>

        <button
          class="game-button"
          id="percentAgain"
        >
          AGAIN
        </button>

      </div>

    `;


    document.getElementById(
      "percentAgain"
    ).onclick =
      () => {

        closeModal();

        setTimeout(
          () => openActivity("percent"),
          100
        );

      };

  }

};


/* ==================== INITIALIZE ==================== */

updateStats();

renderActivities();