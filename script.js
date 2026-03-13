document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    {
      title: "Project Manager",
      text: "Responsible for planning, coordinating the team, and ensuring the project is delivered successfully.",
      icon: "📁",
    },
    {
      title: "Scrum Master",
      text: "Supports the Agile team, removes obstacles, and helps maintain effective collaboration during sprints.",
      icon: "🧩",
    },
    {
      title: "Business Analyst",
      text: "Bridges communication between stakeholders and the development team while clarifying project requirements.",
      icon: "📊",
    },
    {
      title: "HR Executive",
      text: "Supports team wellbeing, manages workplace conflicts, and promotes effective communication across diverse teams.",
      icon: "👥",
    },
    {
      title: "Quality Analyst",
      text: "Ensures product quality by identifying defects, testing features, and reporting potential risks.",
      icon: "🛡️",
    },
    {
      title: "Developer",
      text: "Builds and implements technical solutions while collaborating with the team to deliver project features.",
      icon: "💻",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Role",
      text: "Select a role such as Project Manager, Scrum Master, Business Analyst, HR Executive, Quality Analyst, or Developer.",
    },
    {
      number: "02",
      title: "Experience Project Situations",
      text: "Enter project scenarios like sprint planning, requirement clarification, stakeholder conflicts, and team communication challenges.",
    },
    {
      number: "03",
      title: "Make Decisions",
      text: "Respond to each situation and see how your decisions affect project progress, trust, quality, and stakeholder satisfaction.",
    },
    {
      number: "04",
      title: "Reflect and Improve",
      text: "Each scenario ends with a mini retrospective showing what went well, what could improve, and the impact of your choices.",
    },
  ];

  const aboutCards = [
    {
      title: "Real Scenarios",
      text: "Experience project meetings, team communication issues, stakeholder pressure, and delivery trade-offs that feel close to real workplace situations.",
      icon: "🎯",
    },
    {
      title: "Decision Impact",
      text: "See how one decision can affect team collaboration, stakeholder confidence, and leadership effectiveness.",
      icon: "📈",
    },
    {
      title: "Practical Learning",
      text: "Learn through reflection and application instead of only reading theory and definitions.",
      icon: "🧠",
    },
  ];

  const learningCards = [
    {
      title: "Iteration and Reflection",
      text: "Strong teams improve through repeated cycles of planning, learning, and adjustment. Impact IQ mirrors that rhythm in each room.",
      icon: "🔁",
    },
    {
      title: "Team Collaboration",
      text: "Players see how communication quality, alignment, and timing affect the entire team, not just one person.",
      icon: "🤝",
    },
    {
      title: "Retrospective Thinking",
      text: "After each scenario, the platform explains what happened, why it mattered, and how a stronger decision could improve outcomes.",
      icon: "✅",
    },
  ];

  const impactScreenData = {
    title: "Simulation Debrief",
    intro:
      "Your decisions influenced Team Collaboration, Stakeholder Impact, and Leadership Confidence.",
    subIntro:
      "Project leadership is about balancing people, expectations, and decisions under pressure.",
    maxScore: 80,
    resources: [
      {
        title: "Scrum: The Art of Doing Twice the Work in Half the Time – Jeff Sutherland",
        link: "https://www.scruminc.com/new-scrum-the-book/",
      },
      {
        title: "The Phoenix Project – Gene Kim, Kevin Behr, George Spafford",
        link: "https://itrevolution.com/product/the-phoenix-project/",
      },
      {
        title: "Leaders Eat Last – Simon Sinek",
        link: "https://simonsinek.com/books/leaders-eat-last/",
      },
      {
        title: "The Scrum Guide",
        link: "https://scrumguides.org/scrum-guide.html",
      },
    ],
    disclaimer: "Disclaimer: Resources shared for educational support only.",
  };

  const rooms = [
    {
      roomNumber: 1,
      title: "Mid-Sprint Request",
      mission: "Mid-Sprint Leadership Decision",
      intro: "Day 4 of the sprint.",
      promptA: "A senior stakeholder sends a message:",
      quoteA: "We need the reporting feature ready before next week’s client demo.",
      promptB: "A developer replies:",
      quoteB:
        "Our sprint backlog is already full. Adding this now may delay current tasks.",
      closing: "Everyone is waiting for your decision.",
      bestExplanation:
        "The strongest approach is Option B because it protects sprint commitment, keeps the team focused, and shows structured leadership. It may disappoint the stakeholder in the short term, but it is the healthiest decision for delivery discipline and long-term trust.",
      options: [
        {
          key: "A",
          title: "Option A",
          decision: "Discuss the request briefly with the team",
          action:
            "You acknowledge the stakeholder message and quickly check with the team to see if a small adjustment can be made without disrupting the sprint goals.",
          impact: { team: 65, stakeholder: 60, leadership: 60 },
          score: 10,
          resultType: "average",
          reason:
            "This approach involves the team before making a decision, which supports collaboration and transparency. However, it still risks opening the sprint scope and may create uncertainty if similar requests appear again.",
        },
        {
          key: "B",
          title: "Option B",
          decision: "Move the request to the next sprint",
          action:
            "You explain that the sprint backlog is already committed and suggest discussing the feature during the next sprint planning.",
          impact: { team: 80, stakeholder: 40, leadership: 85 },
          score: 20,
          resultType: "excellent",
          reason:
            "This protects the sprint commitment and keeps the team focused. It demonstrates structured leadership and disciplined planning.",
        },
        {
          key: "C",
          title: "Option C",
          decision: "Ask the team to stretch capacity",
          action:
            "You ask the team to push their workload to try delivering both the current sprint tasks and the new feature.",
          impact: { team: 45, stakeholder: 70, leadership: 55 },
          score: 5,
          resultType: "needs-improvement",
          reason:
            "This may satisfy the stakeholder temporarily but creates pressure on the team and increases the risk of burnout, missed quality checks, and unstable delivery.",
        },
      ],
    },
    {
      roomNumber: 2,
      title: "Communication Misunderstanding",
      mission: "Team Communication Breakdown",
      intro: "Your development team is distributed across different countries.",
      promptA:
        "During a sprint discussion, a developer from another location stays quiet while others agree on the task timeline.",
      quoteA:
        "Later that day, the developer sends a message saying the task may take longer than expected because some requirements were unclear.",
      promptB: "The team now has a communication gap.",
      quoteB: "This creates confusion in the team.",
      closing: "What will you do?",
      bestExplanation:
        "The strongest approach is Option B because it encourages clarification, improves transparency, and strengthens collaboration in a distributed team. It solves the issue while also helping prevent similar misunderstandings later.",
      options: [
        {
          key: "A",
          title: "Option A",
          decision: "Ask why the concern was not raised earlier",
          action:
            "You question the developer during the team meeting about why the concern was not mentioned earlier.",
          impact: { team: 40, stakeholder: 40, leadership: 40 },
          score: 5,
          resultType: "needs-improvement",
          reason:
            "Publicly questioning a team member may create discomfort and reduce open communication, especially in culturally diverse teams.",
        },
        {
          key: "B",
          title: "Option B",
          decision: "Arrange a quick clarification discussion",
          action:
            "You organise a short call with the developer and the Business Analyst to clarify the requirements and update the team.",
          impact: { team: 85, stakeholder: 80, leadership: 85 },
          score: 20,
          resultType: "excellent",
          reason:
            "Encouraging clarification and open discussion helps prevent misunderstandings and strengthens collaboration in distributed teams.",
        },
        {
          key: "C",
          title: "Option C",
          decision: "Adjust the timeline quietly",
          action:
            "You update the timeline internally without discussing the issue with the team.",
          impact: { team: 55, stakeholder: 70, leadership: 65 },
          score: 10,
          resultType: "average",
          reason:
            "The pressure on the team reduces, but the root communication issue remains unresolved and could appear again later.",
        },
      ],
    },
    {
      roomNumber: 3,
      title: "Critical Bug Before Release",
      mission: "Release Quality Under Pressure",
      intro:
        "Your team is preparing for an important product release at the end of the sprint.",
      promptA:
        "During final testing, the Quality Analyst reports a critical bug that affects a key feature. Fixing the issue may delay the release by a few days.",
      quoteA: "The stakeholder is expecting the product to be delivered on time.",
      promptB: "Quality and schedule are now in conflict.",
      quoteB: "You must decide how to proceed.",
      closing: "What will you do?",
      bestExplanation:
        "The strongest approach is Option B because it protects product quality, supports long-term trust, and shows responsible leadership. A short delay may disappoint the stakeholder at first, but releasing a stable product preserves credibility.",
      options: [
        {
          key: "A",
          title: "Option A",
          decision: "Release the product and fix the bug later",
          action:
            "You decide to release the product as planned and schedule the bug fix in the next update.",
          impact: { team: 45, stakeholder: 75, leadership: 45 },
          score: 5,
          resultType: "needs-improvement",
          reason:
            "The deadline is met, which satisfies the stakeholder temporarily. However, releasing a product with known issues can reduce trust in the team and create additional problems later.",
        },
        {
          key: "B",
          title: "Option B",
          decision: "Delay the release to fix the bug",
          action:
            "You inform the stakeholder about the issue and allow the team time to fix the bug before releasing the product.",
          impact: { team: 85, stakeholder: 45, leadership: 85 },
          score: 20,
          resultType: "excellent",
          reason:
            "Prioritising product quality strengthens team trust and long-term project credibility, even though the release is slightly delayed.",
        },
        {
          key: "C",
          title: "Option C",
          decision: "Ask the team to fix the bug immediately",
          action:
            "You ask the development and QA teams to quickly fix the bug while trying to keep the original release deadline.",
          impact: { team: 70, stakeholder: 75, leadership: 70 },
          score: 10,
          resultType: "average",
          reason:
            "The team attempts to resolve the issue quickly to maintain the release schedule. While this may work in the short term, the rushed fix may introduce extra pressure and fresh defects.",
        },
      ],
    },
    {
      roomNumber: 4,
      title: "Team Disagreement",
      mission: "Balancing Speed and Technical Stability",
      intro:
        "During sprint planning, two developers disagree about how a feature should be implemented.",
      promptA:
        "One developer believes the feature should be built quickly to meet the deadline.",
      quoteA:
        "Another developer argues that the current approach may create technical issues later.",
      promptB:
        "The discussion starts slowing down the meeting, and the rest of the team is waiting for a decision.",
      quoteB: "What will you do?",
      closing: "You need to decide how to move the team forward.",
      bestExplanation:
        "The strongest approach is Option B because it encourages healthy discussion, respects technical concerns, and guides the team toward a balanced solution. It supports both delivery discipline and long-term product stability.",
      options: [
        {
          key: "A",
          title: "Option A",
          decision: "Choose the faster approach",
          action:
            "You decide to go with the quicker solution so the team can stay on schedule.",
          impact: { team: 45, stakeholder: 75, leadership: 50 },
          score: 5,
          resultType: "needs-improvement",
          reason:
            "The meeting moves forward quickly, but ignoring the technical concern may cause frustration in the team and reduce collaboration.",
        },
        {
          key: "B",
          title: "Option B",
          decision: "Encourage discussion and find a balanced solution",
          action:
            "You allow both developers to explain their perspectives and guide the team toward a solution that balances speed and long-term stability.",
          impact: { team: 85, stakeholder: 80, leadership: 90 },
          score: 20,
          resultType: "excellent",
          reason:
            "Encouraging open discussion helps the team make informed decisions and strengthens collaboration.",
        },
        {
          key: "C",
          title: "Option C",
          decision: "Delay the decision for later",
          action:
            "You postpone the discussion and move to the next agenda item to keep the meeting moving.",
          impact: { team: 50, stakeholder: 50, leadership: 70 },
          score: 10,
          resultType: "average",
          reason:
            "The meeting continues smoothly, but delaying the discussion may leave the issue unresolved and affect future progress.",
        },
      ],
    },
  ];

  let selectedRole = null;
  let currentRoom = 1;
  let selectedOption = null;
  let totalImpactScore = 0;

  const resultToneMap = {
    excellent: "excellent",
    average: "average",
    "needs-improvement": "needs-improvement",
  };

  const resultBadgeMap = {
    excellent: "Excellent Approach",
    average: "Average Approach",
    "needs-improvement": "Could Be Better",
  };

  function el(id) {
    return document.getElementById(id);
  }

  function show(node) {
    if (node) node.classList.remove("hidden");
  }

  function hide(node) {
    if (node) node.classList.add("hidden");
  }

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

  function createInfoCard(item) {
    const card = document.createElement("div");
    card.className = "info-card";
    card.innerHTML = `
      <div class="info-icon">${item.icon}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
    return card;
  }

  function renderInfoGrid(container, items) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((item) => container.appendChild(createInfoCard(item)));
  }

  function renderSteps() {
    if (!stepsGridEl) return;
    stepsGridEl.innerHTML = "";

    steps.forEach((step) => {
      const card = document.createElement("div");
      card.className = "step-card";
      card.innerHTML = `
        <div class="step-pill">Level ${step.number}</div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      `;
      stepsGridEl.appendChild(card);
    });
  }

  function renderHeroRoles() {
    if (!heroRoleList) return;
    heroRoleList.innerHTML = "";

    roles.slice(0, 4).forEach((role) => {
      const btn = document.createElement("button");
      btn.className = "hero-role-item";
      btn.innerHTML = `
        <div class="hero-role-icon">${role.icon}</div>
        <div class="hero-role-text">
          <p>${role.title}</p>
          <small>Start scenario</small>
        </div>
        <span class="hero-role-arrow">→</span>
      `;
      btn.addEventListener("click", function () {
        openDisclaimer(role.title);
      });
      heroRoleList.appendChild(btn);
    });
  }

  function renderRolePicker() {
    if (!roleGridEl) return;
    roleGridEl.innerHTML = "";

    roles.forEach((role) => {
      const isSelected = selectedRole === role.title;
      const btn = document.createElement("button");
      btn.className = "role-card" + (isSelected ? " selected" : "");
      btn.innerHTML = `
        <div class="role-card-top">
          <div class="role-icon">${role.icon}</div>
          ${isSelected ? `<div class="role-check">✓</div>` : ""}
        </div>
        <h4>${role.title}</h4>
        <p>${role.text}</p>
      `;
      btn.addEventListener("click", function () {
        selectedRole = role.title;
        updateRoleSelectionState();
        renderRolePicker();
      });
      roleGridEl.appendChild(btn);
    });
  }

  function updateRoleSelectionState() {
    if (!selectedRoleTitle || !selectedRoleNote || !startSimulationBtn) return;

    selectedRoleTitle.textContent = selectedRole || "No role selected yet";

    if (selectedRole === "Project Manager") {
      selectedRoleNote.textContent =
        "Project Manager simulation is ready. Start Simulation is now enabled.";
      startSimulationBtn.disabled = false;
    } else if (selectedRole) {
      selectedRoleNote.textContent =
        "Only Project Manager is enabled right now for the first simulation build.";
      startSimulationBtn.disabled = true;
    } else {
      selectedRoleNote.textContent =
        "Select Project Manager to enable the Start Simulation button.";
      startSimulationBtn.disabled = true;
    }
  }

  function openDisclaimer(roleName) {
    if (roleName) selectedRole = roleName;

    if (selectedRoleChip) {
      if (selectedRole) {
        selectedRoleChip.textContent = `Selected role: ${selectedRole}`;
        selectedRoleChip.classList.remove("hidden");
      } else {
        selectedRoleChip.classList.add("hidden");
      }
    }

    if (acknowledgeCheckbox) acknowledgeCheckbox.checked = false;
    if (proceedDisclaimer) proceedDisclaimer.disabled = true;

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

  function renderRoom() {
    const room = getActiveRoom();
    selectedOption = null;
    hide(resultPanel);

    if (roomHeading) roomHeading.textContent = `Room ${room.roomNumber} – ${room.title}`;
    if (missionTitle) missionTitle.textContent = room.mission;
    if (roomChip) roomChip.textContent = `Room ${room.roomNumber}`;

    const percent = Math.round((currentRoom / rooms.length) * 100);
    if (progressText) progressText.textContent = `Room ${currentRoom} of ${rooms.length}`;
    if (progressPercent) progressPercent.textContent = `${percent}%`;
    if (roomProgressFill) roomProgressFill.style.width = `${percent}%`;

    if (scenarioText) {
      scenarioText.innerHTML = `
        <p>${room.intro}</p>
        <p>${room.promptA}</p>
        <div class="quote-box purple-quote">“${room.quoteA}”</div>
        <p>${room.promptB}</p>
        <div class="quote-box dark-quote">“${room.quoteB}”</div>
        <p>${room.closing}</p>
      `;
    }

    renderRoomOptions(room);
  }

  function renderRoomOptions(room) {
    if (!optionsList) return;
    optionsList.innerHTML = "";

    room.options.forEach((option) => {
      const isSelected = selectedOption && selectedOption.key === option.key;
      const disabled = selectedOption && selectedOption.key !== option.key;

      const button = document.createElement("button");
      button.className = "option-card" + (isSelected ? " selected" : "");
      button.disabled = !!disabled;

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

      button.addEventListener("click", function () {
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

    const timer = setInterval(function () {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      element.textContent = start;
    }, duration / 25);
  }

  function showResult(room, option) {
    show(resultPanel);

    if (resultTitle) resultTitle.textContent = `Result for ${option.title}`;
    if (resultBadge) {
      resultBadge.textContent = resultBadgeMap[option.resultType];
      resultBadge.className = `result-badge ${resultToneMap[option.resultType]}`;
    }

    if (resultReason) resultReason.textContent = option.reason;
    if (bestExplanation) bestExplanation.textContent = room.bestExplanation;

    if (teamValue) teamValue.textContent = "0";
    if (stakeholderValue) stakeholderValue.textContent = "0";
    if (leadershipValue) leadershipValue.textContent = "0";

    if (teamBar) teamBar.style.width = "0%";
    if (stakeholderBar) stakeholderBar.style.width = "0%";
    if (leadershipBar) leadershipBar.style.width = "0%";

    if (teamBarText) teamBarText.textContent = "0";
    if (stakeholderBarText) stakeholderBarText.textContent = "0";
    if (leadershipBarText) leadershipBarText.textContent = "0";

    if (scorePill) scorePill.textContent = `+${option.score} Points`;
    if (scoreNumber) scoreNumber.textContent = `+${option.score}`;

    setTimeout(function () {
      animateNumber(teamValue, option.impact.team);
      if (teamBar) teamBar.style.width = `${option.impact.team}%`;
      if (teamBarText) teamBarText.textContent = option.impact.team;
    }, 120);

    setTimeout(function () {
      animateNumber(stakeholderValue, option.impact.stakeholder);
      if (stakeholderBar) stakeholderBar.style.width = `${option.impact.stakeholder}%`;
      if (stakeholderBarText) stakeholderBarText.textContent = option.impact.stakeholder;
    }, 260);

    setTimeout(function () {
      animateNumber(leadershipValue, option.impact.leadership);
      if (leadershipBar) leadershipBar.style.width = `${option.impact.leadership}%`;
      if (leadershipBarText) leadershipBarText.textContent = option.impact.leadership;
    }, 400);

    if (currentRoom < rooms.length) {
      show(nextRoomBtn);
      hide(finishBtn);
    } else {
      hide(nextRoomBtn);
      show(finishBtn);
    }
  }

  function goToNextRoom() {
    if (currentRoom < rooms.length) {
      currentRoom += 1;
      renderRoom();
      if (simulationModal) {
        simulationModal.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }

  function getDynamicImpactResult(score, maxScore) {
    const percentage = (score / maxScore) * 100;

    if (percentage >= 87.5) {
      return {
        badge: "Strategic Project Leader 🏆",
        summary:
          "Your decisions show strong leadership judgement, balance under pressure, and clear awareness of team and project dynamics.",
        workedWell:
          "You consistently balanced delivery pressure with communication, quality, and team trust. Your decisions showed strong leadership awareness across multiple situations.",
        canImprove:
          "Even strong leadership can improve by sharpening escalation timing and making trade-offs more visible to the team and stakeholders.",
      };
    }

    if (percentage >= 68.75) {
      return {
        badge: "Emerging Project Leader 🏅",
        summary: "Your decisions show developing leadership awareness.",
        workedWell:
          "You recognised how decisions affect both the team and project outcomes, helping maintain collaboration in several situations.",
        canImprove:
          "Some choices reacted quickly to pressure. Stronger results come from pausing, gathering team input, and communicating trade-offs clearly.",
      };
    }

    if (percentage >= 50) {
      return {
        badge: "Developing Team Coordinator 🌱",
        summary:
          "Your decisions show growing awareness, but stronger structure and communication would improve your outcomes.",
        workedWell:
          "You showed awareness that project decisions affect multiple people and priorities, which is a valuable foundation.",
        canImprove:
          "Several choices leaned toward short-term movement rather than long-term clarity. Better results come from balancing urgency with team discussion and decision transparency.",
      };
    }

    return {
      badge: "Reflective Starter 📘",
      summary:
        "You are beginning to recognise how leadership decisions affect delivery, people, and trust.",
      workedWell:
        "You engaged with the project situations and began building awareness of how workplace decisions shape outcomes.",
      canImprove:
        "Many decisions responded to immediate pressure without fully addressing collaboration, communication, or future risk. Stronger leadership comes from slowing down, listening well, and making trade-offs explicit.",
    };
  }

  function openImpactScreen() {
    hide(simulationModal);
    show(impactModal);
    document.body.classList.add("no-scroll");

    const result = getDynamicImpactResult(totalImpactScore, impactScreenData.maxScore);

    if (impactTitle) impactTitle.textContent = impactScreenData.title;
    if (impactIntro) impactIntro.textContent = impactScreenData.intro;
    if (impactSubIntro) impactSubIntro.textContent = impactScreenData.subIntro;
    if (workedWellText) workedWellText.textContent = result.workedWell;
    if (canImproveText) canImproveText.textContent = result.canImprove;
    if (finalScoreNumber) {
      finalScoreNumber.textContent = `${totalImpactScore} / ${impactScreenData.maxScore}`;
    }
    if (impactSummaryText) impactSummaryText.textContent = result.summary;
    if (badgeText) badgeText.textContent = result.badge;
    if (resourceDisclaimer) resourceDisclaimer.textContent = impactScreenData.disclaimer;

    if (resourceList) {
      resourceList.innerHTML = "";
      impactScreenData.resources.forEach((resource) => {
        const item = document.createElement("div");
        item.className = "resource-item";
        item.innerHTML = `<a href="${resource.link}" target="_blank" rel="noopener noreferrer">${resource.title}</a>`;
        resourceList.appendChild(item);
      });
    }
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

  function setupButtons() {
    el("openSimulationTop")?.addEventListener("click", function () {
      openDisclaimer();
    });

    el("openSimulationHero")?.addEventListener("click", function () {
      openDisclaimer();
    });

    el("openSimulationBottom")?.addEventListener("click", function () {
      openDisclaimer();
    });

    el("closeDisclaimer")?.addEventListener("click", closeDisclaimer);
    el("cancelDisclaimer")?.addEventListener("click", closeDisclaimer);

    if (acknowledgeCheckbox && proceedDisclaimer) {
      acknowledgeCheckbox.addEventListener("change", function () {
        proceedDisclaimer.disabled = !acknowledgeCheckbox.checked;
      });
    }

    proceedDisclaimer?.addEventListener("click", openRoleModal);
    el("closeRoleModal")?.addEventListener("click", closeRoleModal);
    startSimulationBtn?.addEventListener("click", openSimulation);

    el("closeSimulation")?.addEventListener("click", closeSimulation);
    nextRoomBtn?.addEventListener("click", goToNextRoom);
    finishBtn?.addEventListener("click", openImpactScreen);

    closeImpactModal?.addEventListener("click", closeImpact);
    retrySimulationBtn?.addEventListener("click", retrySimulation);
    chooseAnotherRoleBtn?.addEventListener("click", chooseAnotherRole);
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
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
          behavior: "smooth",
        });
      });
    });
  }

  renderHeroRoles();
  renderInfoGrid(aboutCardsEl, aboutCards);
  renderInfoGrid(learningCardsEl, learningCards);
  renderInfoGrid(rolesGridEl, roles);
  renderSteps();
  setupButtons();
  setupSmoothScroll();
  updateRoleSelectionState();
});
