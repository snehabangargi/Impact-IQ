let selectedRole = null;
let currentRoom = 1;
let selectedOption = null;

const resultToneMap = {
  excellent: "excellent",
  average: "average",
  "needs-improvement": "needs-improvement"
};

const resultBadgeMap = {
  excellent: "Excellent Approach",
  average: "Average Approach",
  "needs-improvement": "Could Be Better"
};

const heroRoleList = document.getElementById("heroRoleList");
const aboutCardsEl = document.getElementById("aboutCards");
const stepsGridEl = document.getElementById("stepsGrid");
const learningCardsEl = document.getElementById("learningCards");
const rolesGridEl = document.getElementById("rolesGrid");
const roleGridEl = document.getElementById("roleGrid");

const disclaimerModal = document.getElementById("disclaimerModal");
const roleModal = document.getElementById("roleModal");
const simulationModal = document.getElementById("simulationModal");

const selectedRoleChip = document.getElementById("selectedRoleChip");
const acknowledgeCheckbox = document.getElementById("acknowledgeCheckbox");
const proceedDisclaimer = document.getElementById("proceedDisclaimer");

const selectedRoleTitle = document.getElementById("selectedRoleTitle");
const selectedRoleNote = document.getElementById("selectedRoleNote");
const startSimulationBtn = document.getElementById("startSimulationBtn");

const roomHeading = document.getElementById("roomHeading");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const roomProgressFill = document.getElementById("roomProgressFill");
const missionTitle = document.getElementById("missionTitle");
const roomChip = document.getElementById("roomChip");
const scenarioText = document.getElementById("scenarioText");
const optionsList = document.getElementById("optionsList");

const resultPanel = document.getElementById("resultPanel");
const resultTitle = document.getElementById("resultTitle");
const resultBadge = document.getElementById("resultBadge");
const teamValue = document.getElementById("teamValue");
const stakeholderValue = document.getElementById("stakeholderValue");
const leadershipValue = document.getElementById("leadershipValue");
const resultReason = document.getElementById("resultReason");
const bestExplanation = document.getElementById("bestExplanation");

const scorePill = document.getElementById("scorePill");
const scoreNumber = document.getElementById("scoreNumber");

const teamBar = document.getElementById("teamBar");
const stakeholderBar = document.getElementById("stakeholderBar");
const leadershipBar = document.getElementById("leadershipBar");

const teamBarText = document.getElementById("teamBarText");
const stakeholderBarText = document.getElementById("stakeholderBarText");
const leadershipBarText = document.getElementById("leadershipBarText");

const nextRoomBtn = document.getElementById("nextRoomBtn");
const finishBtn = document.getElementById("finishBtn");

function renderHeroRoles() {
  heroRoleList.innerHTML = "";
  roles.slice(0, 4).forEach((role) => {
    const button = document.createElement("button");
    button.className = "hero-role-item";
    button.innerHTML = `
      <div class="hero-role-icon">${role.icon}</div>
      <div class="hero-role-text">
        <p>${role.title}</p>
        <small>Start scenario</small>
      </div>
      <span class="hero-role-arrow">→</span>
    `;
    button.addEventListener("click", () => openDisclaimer(role.title));
    heroRoleList.appendChild(button);
  });
}

function createInfoCard(item) {
  const div = document.createElement("div");
  div.className = "info-card reveal";
  div.innerHTML = `
    <div class="info-icon">${item.icon}</div>
    <div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `;
  return div;
}

function renderAboutCards() {
  aboutCards.forEach((item) => aboutCardsEl.appendChild(createInfoCard(item)));
}

function renderLearningCards() {
  learningCards.forEach((item) => learningCardsEl.appendChild(createInfoCard(item)));
}

function renderRolesGrid() {
  roles.forEach((role) => rolesGridEl.appendChild(createInfoCard(role)));
}

function renderSteps() {
  stepsGridEl.innerHTML = "";
  steps.forEach((step) => {
    const div = document.createElement("div");
    div.className = "step-card reveal";
    div.innerHTML = `
      <div class="step-pill">Level ${step.number}</div>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    `;
    stepsGridEl.appendChild(div);
  });
}

function renderRolePicker() {
  roleGridEl.innerHTML = "";

  roles.forEach((role) => {
    const isSelected = selectedRole === role.title;
    const button = document.createElement("button");
    button.className = `role-card ${isSelected ? "selected" : ""}`;
    button.innerHTML = `
      <div class="role-card-top">
        <div class="role-icon">${role.icon}</div>
        ${isSelected ? `<div class="role-check">✓</div>` : ""}
      </div>
      <h4>${role.title}</h4>
      <p>${role.text}</p>
    `;

    button.addEventListener("click", () => {
      selectedRole = role.title;
      updateRoleSelectionState();
      renderRolePicker();
    });

    roleGridEl.appendChild(button);
  });
}

function updateRoleSelectionState() {
  selectedRoleTitle.textContent = selectedRole || "No role selected yet";

  if (selectedRole === "Project Manager") {
    selectedRoleNote.textContent = "Project Manager simulation is ready. Start Simulation is now enabled.";
    startSimulationBtn.disabled = false;
  } else if (selectedRole) {
    selectedRoleNote.textContent = "Only Project Manager is enabled right now for the first simulation build.";
    startSimulationBtn.disabled = true;
  } else {
    selectedRoleNote.textContent = "Select Project Manager to enable the Start Simulation button.";
    startSimulationBtn.disabled = true;
  }
}

function openDisclaimer(roleName = null) {
  if (roleName) {
    selectedRole = roleName;
  }
  acknowledgeCheckbox.checked = false;
  proceedDisclaimer.disabled = true;

  if (selectedRole) {
    selectedRoleChip.textContent = `Selected role: ${selectedRole}`;
    selectedRoleChip.classList.remove("hidden");
  } else {
    selectedRoleChip.classList.add("hidden");
  }

  disclaimerModal.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closeDisclaimer() {
  disclaimerModal.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function openRoleModal() {
  disclaimerModal.classList.add("hidden");
  roleModal.classList.remove("hidden");
  renderRolePicker();
  updateRoleSelectionState();
}

function closeRoleModal() {
  roleModal.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function openSimulation() {
  if (selectedRole !== "Project Manager") return;
  currentRoom = 1;
  selectedOption = null;
  roleModal.classList.add("hidden");
  simulationModal.classList.remove("hidden");
  renderRoom();
}

function closeSimulation() {
  simulationModal.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function getActiveRoom() {
  return rooms.find((room) => room.roomNumber === currentRoom) || rooms[0];
}

function renderScenarioText(room) {
  scenarioText.innerHTML = `
    <p>${room.intro}</p>
    <p>${room.promptA}</p>
    <div class="quote-box purple-quote">“${room.quoteA}”</div>
    <p>${room.promptB}</p>
    <div class="quote-box dark-quote">“${room.quoteB}”</div>
    <p>${room.closing}</p>
  `;
}

function renderRoomOptions(room) {
  optionsList.innerHTML = "";

  room.options.forEach((option) => {
    const isSelected = selectedOption && selectedOption.key === option.key;
    const disabled = selectedOption && selectedOption.key !== option.key;

    const button = document.createElement("button");
    button.className = `option-card ${isSelected ? "selected" : ""}`;
    if (disabled) button.disabled = true;

    button.innerHTML = `
      <div class="option-head">
        <div>
          <div class="option-pill">${option.title}</div>
          <h3>${option.decision}</h3>
          <p>${option.action}</p>
        </div>
        ${isSelected ? `<div class="role-check big-check">✓</div>` : ""}
      </div>
    `;

    button.addEventListener("click", () => {
      if (selectedOption) return;
      selectedOption = option;
      renderRoomOptions(room);
      showResult(room, option);
    });

    optionsList.appendChild(button);
  });
}

function animateNumber(element, target) {
  let start = 0;
  const duration = 500;
  const increment = Math.max(1, Math.ceil(target / 25));
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    element.textContent = start;
  }, duration / 25);
}

function showResult(room, option) {
  resultPanel.classList.remove("hidden");

  resultTitle.textContent = `Result for ${option.title}`;
  resultBadge.textContent = resultBadgeMap[option.resultType];
  resultBadge.className = `result-badge ${resultToneMap[option.resultType]}`;

  resultReason.textContent = option.reason;
  bestExplanation.textContent = room.bestExplanation;

  teamValue.textContent = "0";
  stakeholderValue.textContent = "0";
  leadershipValue.textContent = "0";

  teamBar.style.width = "0%";
  stakeholderBar.style.width = "0%";
  leadershipBar.style.width = "0%";

  teamBarText.textContent = "0";
  stakeholderBarText.textContent = "0";
  leadershipBarText.textContent = "0";

  scorePill.textContent = `+${option.score} Points`;
  scoreNumber.textContent = `+${option.score}`;

  setTimeout(() => {
    animateNumber(teamValue, option.impact.team);
    teamBar.style.width = `${option.impact.team}%`;
    teamBarText.textContent = option.impact.team;
  }, 120);

  setTimeout(() => {
    animateNumber(stakeholderValue, option.impact.stakeholder);
    stakeholderBar.style.width = `${option.impact.stakeholder}%`;
    stakeholderBarText.textContent = option.impact.stakeholder;
  }, 260);

  setTimeout(() => {
    animateNumber(leadershipValue, option.impact.leadership);
    leadershipBar.style.width = `${option.impact.leadership}%`;
    leadershipBarText.textContent = option.impact.leadership;
  }, 400);

  if (currentRoom < rooms.length) {
    nextRoomBtn.classList.remove("hidden");
    finishBtn.classList.add("hidden");
  } else {
    nextRoomBtn.classList.add("hidden");
    finishBtn.classList.remove("hidden");
  }

  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderRoom() {
  const room = getActiveRoom();
  selectedOption = null;
  resultPanel.classList.add("hidden");

  roomHeading.textContent = `Room ${room.roomNumber} – ${room.title}`;
  missionTitle.textContent = room.mission;
  roomChip.textContent = `Room ${room.roomNumber}`;

  progressText.textContent = `Room ${currentRoom} of ${rooms.length}`;
  const percent = Math.round((currentRoom / rooms.length) * 100);
  progressPercent.textContent = `${percent}%`;
  roomProgressFill.style.width = `${percent}%`;

  renderScenarioText(room);
  renderRoomOptions(room);
}

function goToNextRoom() {
  if (currentRoom < rooms.length) {
    currentRoom += 1;
    renderRoom();
    simulationModal.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function finishSimulation() {
  closeSimulation();
  currentRoom = 1;
  selectedOption = null;
}

function setupButtons() {
  document.getElementById("openSimulationTop").addEventListener("click", () => openDisclaimer());
  document.getElementById("openSimulationHero").addEventListener("click", () => openDisclaimer());
  document.getElementById("openSimulationBottom").addEventListener("click", () => openDisclaimer());

  document.getElementById("closeDisclaimer").addEventListener("click", closeDisclaimer);
  document.getElementById("cancelDisclaimer").addEventListener("click", closeDisclaimer);

  acknowledgeCheckbox.addEventListener("change", () => {
    proceedDisclaimer.disabled = !acknowledgeCheckbox.checked;
  });

  proceedDisclaimer.addEventListener("click", openRoleModal);

  document.getElementById("closeRoleModal").addEventListener("click", closeRoleModal);
  startSimulationBtn.addEventListener("click", openSimulation);

  document.getElementById("closeSimulation").addEventListener("click", closeSimulation);
  nextRoomBtn.addEventListener("click", goToNextRoom);
  finishBtn.addEventListener("click", finishSimulation);
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function setupRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function init() {
  renderHeroRoles();
  renderAboutCards();
  renderSteps();
  renderLearningCards();
  renderRolesGrid();
  setupButtons();
  setupSmoothScroll();
  setupRevealAnimation();

  document.querySelectorAll(".info-card, .step-card, .role-card, .hero-role-item, .option-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my`, `${y}px`);
    });
  });
}

init();
