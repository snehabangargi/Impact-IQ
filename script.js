let selectedRole = null;
let currentRoom = 1;
let selectedOption = null;
let totalImpactScore = 0;

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

const el = (id) => document.getElementById(id);

const heroRoleList = el("heroRoleList");
const aboutCardsEl = el("aboutCards");
const stepsGridEl = el("stepsGrid");
const learningCardsEl = el("learningCards");
const rolesGridEl = el("rolesGrid");
const roleGridEl = el("roleGrid");

const disclaimerModal = el("disclaimerModal");
const roleModal = el("roleModal");
const simulationModal = el("simulationModal");
const impactModal = el("impactModal");

const selectedRoleChip = el("selectedRoleChip");
const acknowledgeCheckbox = el("acknowledgeCheckbox");
const proceedDisclaimer = el("proceedDisclaimer");

const selectedRoleTitle = el("selectedRoleTitle");
const selectedRoleNote = el("selectedRoleNote");
const startSimulationBtn = el("startSimulationBtn");

const roomHeading = el("roomHeading");
const progressText = el("progressText");
const progressPercent = el("progressPercent");
const roomProgressFill = el("roomProgressFill");
const missionTitle = el("missionTitle");
const roomChip = el("roomChip");
const scenarioText = el("scenarioText");
const optionsList = el("optionsList");

const resultPanel = el("resultPanel");
const resultTitle = el("resultTitle");
const resultBadge = el("resultBadge");
const teamValue = el("teamValue");
const stakeholderValue = el("stakeholderValue");
const leadershipValue = el("leadershipValue");
const resultReason = el("resultReason");
const bestExplanation = el("bestExplanation");

const scorePill = el("scorePill");
const scoreNumber = el("scoreNumber");

const teamBar = el("teamBar");
const stakeholderBar = el("stakeholderBar");
const leadershipBar = el("leadershipBar");

const teamBarText = el("teamBarText");
const stakeholderBarText = el("stakeholderBarText");
const leadershipBarText = el("leadershipBarText");

const nextRoomBtn = el("nextRoomBtn");
const finishBtn = el("finishBtn");

const impactTitle = el("impactTitle");
const impactIntro = el("impactIntro");
const impactSubIntro = el("impactSubIntro");
const workedWellText = el("workedWellText");
const canImproveText = el("canImproveText");
const finalScoreNumber = el("finalScoreNumber");
const impactSummaryText = el("impactSummaryText");
const badgeText = el("badgeText");
const resourceList = el("resourceList");
const resourceDisclaimer = el("resourceDisclaimer");
const retrySimulationBtn = el("retrySimulationBtn");
const chooseAnotherRoleBtn = el("chooseAnotherRoleBtn");
const closeImpactModal = el("closeImpactModal");

function show(node) {
  if (node) node.classList.remove("hidden");
}

function hide(node) {
  if (node) node.classList.add("hidden");
}

function renderHeroRoles() {
  if (!heroRoleList) return;
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
  div.className = "info-card";
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
  if (!aboutCardsEl) return;
  aboutCardsEl.innerHTML = "";
  aboutCards.forEach((item) => aboutCardsEl.appendChild(createInfoCard(item)));
}

function renderLearningCards() {
  if (!learningCardsEl) return;
  learningCardsEl.innerHTML = "";
  learningCards.forEach((item) => learningCardsEl.appendChild(createInfoCard(item)));
}

function renderRolesGrid() {
  if (!rolesGridEl) return;
  rolesGridEl.innerHTML = "";
  roles.forEach((role) => rolesGridEl.appendChild(createInfoCard(role)));
}

function renderSteps() {
  if (!stepsGridEl) return;
  stepsGridEl.innerHTML = "";

  steps.forEach((step) => {
    const div = document.createElement("div");
    div.className = "step-card";
    div.innerHTML = `
      <div class="step-pill">Level ${step.number}</div>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    `;
    stepsGridEl.appendChild(div);
  });
}

function renderRolePicker() {
  if (!roleGridEl) return;
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
  if (!selectedRoleTitle || !selectedRoleNote || !startSimulationBtn) return;

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
  if (!disclaimerModal) return;
  if (roleName) selectedRole = roleName;

  if (acknowledgeCheckbox) acknowledgeCheckbox.checked = false;
  if (proceedDisclaimer) proceedDisclaimer.disabled = true;

  if (selectedRoleChip) {
    if (selectedRole) {
      selectedRoleChip.textContent = `Selected role: ${selectedRole}`;
      selectedRoleChip.classList.remove("hidden");
    } else {
      selectedRoleChip.classList.add("hidden");
    }
  }

  show(disclaimerModal);
  document.body.classList.add("no-scroll");
}

function closeDisclaimer() {
  hide(disclaimerModal);
  document.body.classList.remove("no-scroll");
}

function openRoleModal() {
  hide(disclaimerModal);
  show(roleModal);
  renderRolePicker();
  updateRoleSelectionState();
}

function closeRoleModal() {
  hide(roleModal);
  document.body.classList.remove("no-scroll");
}

function openSimulation() {
  if (selectedRole !== "Project Manager") return;
  currentRoom = 1;
  selectedOption = null;
  totalImpactScore = 0;

  hide(roleModal);
  show(simulationModal);
  document.body.classList.add("no-scroll");
  renderRoom();
}

function closeSimulation() {
  hide(simulationModal);
  document.body.classList.remove("no-scroll");
}

function closeImpact() {
  hide(impactModal);
  document.body.classList.remove("no-scroll");
}

function getActiveRoom() {
  return rooms.find((room) => room.roomNumber === currentRoom) || rooms[0];
}

function renderScenarioText(room) {
  if (!scenarioText) return;
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
  if (!optionsList) return;
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
      totalImpactScore += option.score;
      renderRoomOptions(room);
      showResult(room, option);
    });

    optionsList.appendChild(button);
  });
}

function animateNumber(element, target) {
  if (!element) return;
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
  if (!resultPanel) return;

  show(resultPanel);

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
    show(nextRoomBtn);
    hide(finishBtn);
  } else {
    hide(nextRoomBtn);
    show(finishBtn);
  }
}

function renderRoom() {
  const room = getActiveRoom();
  selectedOption = null;
  hide(resultPanel);

  roomHeading.textContent = `Room ${room.roomNumber} – ${room.title}`;
  missionTitle.textContent = room.mission;
  roomChip.textContent = `Room ${room.roomNumber}`;

  const percent = Math.round((currentRoom / rooms.length) * 100);
  progressText.textContent = `Room ${currentRoom} of ${rooms.length}`;
  progressPercent.textContent = `${percent}%`;
  roomProgressFill.style.width = `${percent}%`;

  renderScenarioText(room);
  renderRoomOptions(room);
}

function goToNextRoom() {
  if (currentRoom < rooms.length) {
    currentRoom += 1;
    renderRoom();
    if (simulationModal) simulationModal.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function getDynamicImpactResult(score, maxScore) {
  const percentage = (score / maxScore) * 100;

  if (percentage >= 87.5) {
    return {
      badge: "Strategic Project Leader 🏆",
      summary: "Your decisions show strong leadership judgement, balance under pressure, and clear awareness of team and project dynamics.",
      workedWell:
        "You consistently balanced delivery pressure with communication, quality, and team trust. Your decisions showed strong leadership awareness across multiple situations.",
      canImprove:
        "Even strong leadership can improve by sharpening escalation timing and making trade-offs more visible to the team and stakeholders."
    };
  }

  if (percentage >= 68.75) {
    return {
      badge: "Emerging Project Leader 🏅",
      summary: "Your decisions show developing leadership awareness.",
      workedWell:
        "You recognised how decisions affect both the team and project outcomes, helping maintain collaboration in several situations.",
      canImprove:
        "Some choices reacted quickly to pressure. Stronger results come from pausing, gathering team input, and communicating trade-offs clearly."
    };
  }

  if (percentage >= 50) {
    return {
      badge: "Developing Team Coordinator 🌱",
      summary: "Your decisions show growing awareness, but stronger structure and communication would improve your outcomes.",
      workedWell:
        "You showed awareness that project decisions affect multiple people and priorities, which is a valuable foundation.",
      canImprove:
        "Several choices leaned toward short-term movement rather than long-term clarity. Better results come from balancing urgency with team discussion and decision transparency."
    };
  }

  return {
    badge: "Reflective Starter 📘",
    summary: "You are beginning to recognise how leadership decisions affect delivery, people, and trust.",
    workedWell:
      "You engaged with the project situations and began building awareness of how workplace decisions shape outcomes.",
    canImprove:
      "Many decisions responded to immediate pressure without fully addressing collaboration, communication, or future risk. Stronger leadership comes from slowing down, listening well, and making trade-offs explicit."
    };
  }
}

function openImpactScreen() {
  if (!impactModal) return;

  hide(simulationModal);
  show(impactModal);
  document.body.classList.add("no-scroll");

  const dynamicResult = getDynamicImpactResult(totalImpactScore, impactScreenData.maxScore);

  impactTitle.textContent = impactScreenData.title;
  impactIntro.textContent = impactScreenData.intro;
  impactSubIntro.textContent = impactScreenData.subIntro;
  workedWellText.textContent = dynamicResult.workedWell;
  canImproveText.textContent = dynamicResult.canImprove;
  finalScoreNumber.textContent = `${totalImpactScore} / ${impactScreenData.maxScore}`;
  impactSummaryText.textContent = dynamicResult.summary;
  badgeText.textContent = dynamicResult.badge;
  resourceDisclaimer.textContent = impactScreenData.disclaimer;

  resourceList.innerHTML = "";
  impactScreenData.resources.forEach((resource) => {
    const item = document.createElement("div");
    item.className = "resource-item";
    item.innerHTML = `<a href="${resource.link}" target="_blank" rel="noopener noreferrer">${resource.title}</a>`;
    resourceList.appendChild(item);
  });
}

function retrySimulation() {
  hide(impactModal);
  currentRoom = 1;
  selectedOption = null;
  totalImpactScore = 0;
  show(simulationModal);
  renderRoom();
}

function chooseAnotherRole() {
  hide(impactModal);
  currentRoom = 1;
  selectedOption = null;
  totalImpactScore = 0;
  hide(simulationModal);
  show(roleModal);
  document.body.classList.add("no-scroll");
  renderRolePicker();
  updateRoleSelectionState();
}

function finishSimulation() {
  openImpactScreen();
}

function setupButtons() {
  el("openSimulationTop")?.addEventListener("click", () => openDisclaimer());
  el("openSimulationHero")?.addEventListener("click", () => openDisclaimer());
  el("openSimulationBottom")?.addEventListener("click", () => openDisclaimer());

  el("closeDisclaimer")?.addEventListener("click", closeDisclaimer);
  el("cancelDisclaimer")?.addEventListener("click", closeDisclaimer);

  acknowledgeCheckbox?.addEventListener("change", () => {
    proceedDisclaimer.disabled = !acknowledgeCheckbox.checked;
  });

  proceedDisclaimer?.addEventListener("click", openRoleModal);
  el("closeRoleModal")?.addEventListener("click", closeRoleModal);
  startSimulationBtn?.addEventListener("click", openSimulation);

  el("closeSimulation")?.addEventListener("click", closeSimulation);
  nextRoomBtn?.addEventListener("click", goToNextRoom);
  finishBtn?.addEventListener("click", finishSimulation);

  closeImpactModal?.addEventListener("click", closeImpact);
  retrySimulationBtn?.addEventListener("click", retrySimulation);
  chooseAnotherRoleBtn?.addEventListener("click", chooseAnotherRole);
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerOffset = window.innerWidth <= 820 ? 90 : 110;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });
}

function init() {
  renderHeroRoles();
  renderAboutCards();
  renderSteps();
  renderLearningCards();
  renderRolesGrid();
  setupButtons();
  setupSmoothScroll();
  updateRoleSelectionState();
}

document.addEventListener("DOMContentLoaded", init);
