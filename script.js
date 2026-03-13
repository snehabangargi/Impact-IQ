document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    {
      title: "Project Manager",
      text: "Responsible for planning, coordinating the team, and ensuring the project is delivered successfully.",
      icon: "📁"
    },
    {
      title: "Scrum Master",
      text: "Supports the Agile team, removes obstacles, and helps maintain effective collaboration during sprints.",
      icon: "🧩"
    },
    {
      title: "Business Analyst",
      text: "Bridges communication between stakeholders and the development team while clarifying project requirements.",
      icon: "📊"
    },
    {
      title: "HR Executive",
      text: "Supports team wellbeing, manages workplace conflicts, and promotes effective communication across diverse teams.",
      icon: "👥"
    },
    {
      title: "Quality Analyst",
      text: "Ensures product quality by identifying defects, testing features, and reporting potential risks.",
      icon: "🛡️"
    },
    {
      title: "Developer",
      text: "Builds and implements technical solutions while collaborating with the team to deliver project features.",
      icon: "💻"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Role",
      text: "Select a role such as Project Manager, Scrum Master, Business Analyst, HR Executive, Quality Analyst, or Developer."
    },
    {
      number: "02",
      title: "Experience Project Situations",
      text: "Enter project scenarios like sprint planning, requirement clarification, stakeholder conflicts, team communication challenges, and Agile facilitation moments."
    },
    {
      number: "03",
      title: "Make Decisions",
      text: "Respond to each situation and see how your decisions affect project progress, trust, quality, and stakeholder satisfaction."
    },
    {
      number: "04",
      title: "Reflect and Improve",
      text: "Each scenario ends with a mini retrospective showing what went well, what could improve, and the impact of your choices."
    }
  ];

  const aboutCards = [
    {
      title: "Real Scenarios",
      text: "Experience project meetings, team communication issues, stakeholder pressure, and delivery trade-offs that feel close to real workplace situations.",
      icon: "🎯"
    },
    {
      title: "Decision Impact",
      text: "See how one decision can affect team collaboration, stakeholder confidence, and leadership effectiveness.",
      icon: "📈"
    },
    {
      title: "Practical Learning",
      text: "Learn through reflection and application instead of only reading theory and definitions.",
      icon: "🧠"
    }
  ];

  const learningCards = [
    {
      title: "Iteration and Reflection",
      text: "Strong teams improve through repeated cycles of planning, learning, and adjustment. Impact IQ mirrors that rhythm in each room.",
      icon: "🔁"
    },
    {
      title: "Team Collaboration",
      text: "Players see how communication quality, alignment, and timing affect the entire team, not just one person.",
      icon: "🤝"
    },
    {
      title: "Retrospective Thinking",
      text: "After each scenario, the platform explains what happened, why it mattered, and how a stronger decision could improve outcomes.",
      icon: "✅"
    }
  ];

  const roleMetricLabels = {
    "Project Manager": {
      first: "Team Collaboration",
      second: "Stakeholder Impact",
      third: "Leadership Confidence"
    },
    "Scrum Master": {
      first: "Team Collaboration",
      second: "Sprint Flow",
      third: "Agile Discipline"
    }
  };

  const projectManagerSimulation = {
    role: "Project Manager",
    rooms: [
      {
        roomNumber: 1,
        title: "Mid-Sprint Request",
        mission: "Mid-Sprint Leadership Decision",
        intro: "Day 4 of the sprint.",
        promptA: "A senior stakeholder sends a message:",
        quoteA: "We need the reporting feature ready before next week’s client demo.",
        promptB: "A developer replies:",
        quoteB: "Our sprint backlog is already full. Adding this now may delay current tasks.",
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
              "This approach involves the team before making a decision, which supports collaboration and transparency. However, it still risks opening the sprint scope and may create uncertainty if similar requests appear again."
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
              "This protects the sprint commitment and keeps the team focused. It demonstrates structured leadership and disciplined planning."
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
              "This may satisfy the stakeholder temporarily but creates pressure on the team and increases the risk of burnout, missed quality checks, and unstable delivery."
          }
        ]
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
              "Publicly questioning a team member may create discomfort and reduce open communication, especially in culturally diverse teams."
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
              "Encouraging clarification and open discussion helps prevent misunderstandings and strengthens collaboration in distributed teams."
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
              "The pressure on the team reduces, but the root communication issue remains unresolved and could appear again later."
          }
        ]
      },
      {
        roomNumber: 3,
        title: "Critical Bug Before Release",
        mission: "Release Quality Under Pressure",
        intro: "Your team is preparing for an important product release at the end of the sprint.",
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
              "The deadline is met, which satisfies the stakeholder temporarily. However, releasing a product with known issues can reduce trust in the team and create additional problems later."
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
              "Prioritising product quality strengthens team trust and long-term project credibility, even though the release is slightly delayed."
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
              "The team attempts to resolve the issue quickly to maintain the release schedule. While this may work in the short term, the rushed fix may introduce extra pressure and fresh defects."
          }
        ]
      },
      {
        roomNumber: 4,
        title: "Team Disagreement",
        mission: "Balancing Speed and Technical Stability",
        intro: "During sprint planning, two developers disagree about how a feature should be implemented.",
        promptA: "One developer believes the feature should be built quickly to meet the deadline.",
        quoteA: "Another developer argues that the current approach may create technical issues later.",
        promptB: "The discussion starts slowing down the meeting, and the rest of the team is waiting for a decision.",
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
              "The meeting moves forward quickly, but ignoring the technical concern may cause frustration in the team and reduce collaboration."
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
              "Encouraging open discussion helps the team make informed decisions and strengthens collaboration."
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
              "The meeting continues smoothly, but delaying the discussion may leave the issue unresolved and affect future progress."
          }
        ]
      }
    ],
    impactScreen: {
      title: "Simulation Debrief",
      intro:
        "Your decisions influenced Team Collaboration, Stakeholder Impact, and Leadership Confidence.",
      subIntro:
        "Project leadership is about balancing people, expectations, and decisions under pressure.",
      workedWell:
        "You recognised how decisions affect both the team and project outcomes, helping maintain collaboration in several situations.",
      canImprove:
        "Some choices reacted quickly to pressure. Stronger results come from pausing, gathering team input, and communicating trade-offs clearly.",
      badge: "Emerging Project Leader 🏅",
      resources: [
        {
          title: "Scrum: The Art of Doing Twice the Work in Half the Time – Jeff Sutherland",
          link: "https://www.scruminc.com/new-scrum-the-book/"
        },
        {
          title: "The Phoenix Project – Gene Kim, Kevin Behr, George Spafford",
          link: "https://itrevolution.com/product/the-phoenix-project/"
        },
        {
          title: "Leaders Eat Last – Simon Sinek",
          link: "https://simonsinek.com/books/leaders-eat-last/"
        },
        {
          title: "The Scrum Guide",
          link: "https://scrumguides.org/scrum-guide.html"
        }
      ],
      disclaimer: "Disclaimer: Resources shared for educational support only."
    }
  };

  const scrumMasterSimulation = {
    role: "Scrum Master",
    rooms: [
      {
        roomNumber: 1,
        title: "Requirement Clarity",
        mission: "Ensure the team understands the work before committing.",
        intro: "During sprint planning, a developer says the user story is unclear.",
        promptA: "The Business Analyst explains the requirement, but the acceptance criteria still feel vague.",
        quoteA: "Some team members want to estimate quickly to keep planning moving, while others are uncomfortable committing to unclear work.",
        promptB: "The team is waiting for facilitation.",
        quoteB: "What will you do?",
        closing: "You need to help the team decide how to proceed.",
        bestExplanation:
          "A Scrum Master helps the team understand work before committing. Facilitating discussion ensures transparency and prevents mid-sprint confusion.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Ask the team to estimate the story anyway so planning can move forward",
            action:
              "You ask the team to continue estimating the story so sprint planning can finish on time.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Estimating unclear work can cause confusion during the sprint."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Facilitate a short discussion between the team and the Business Analyst to clarify the acceptance criteria",
            action:
              "You pause estimation and guide a short clarification discussion so the team understands the story before committing.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Clarifying requirements improves team understanding before commitment."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Move the story to backlog refinement and continue planning other tasks",
            action:
              "You remove the story from the current planning discussion and continue with other items while keeping this one for later clarification.",
            impact: { team: 70, stakeholder: 55, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Planning continues smoothly, but the story still needs clarification later."
          }
        ]
      },
      {
        roomNumber: 2,
        title: "Cross-Cultural Communication",
        mission: "Create a stand-up environment where everyone participates comfortably.",
        intro: "Your Scrum team includes members from several countries.",
        promptA: "During stand-ups, some developers rarely speak even when facing challenges.",
        quoteA: "Later you learn that they avoid interrupting others due to cultural communication norms.",
        promptB: "Participation is uneven and blockers may stay hidden.",
        quoteB: "How will you respond?",
        closing: "The stand-up format needs attention.",
        bestExplanation:
          "Scrum Masters improve communication systems rather than forcing behaviour. Structured formats help culturally diverse teams participate equally.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Tell the team that everyone must speak more during stand-ups",
            action:
              "You directly instruct quieter members to speak more in future stand-ups.",
            impact: { team: 45, stakeholder: 45, leadership: 70 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Direct pressure may discourage quieter team members."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Introduce a structured stand-up format where everyone answers the same three questions",
            action:
              "You introduce a clear format so each person contributes in a predictable and comfortable way.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Structured communication helps diverse teams participate more comfortably."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Allow team members to send updates later through chat",
            action:
              "You accept quieter stand-ups and ask some team members to share updates asynchronously after the meeting.",
            impact: { team: 50, stakeholder: 75, leadership: 50 },
            score: 10,
            resultType: "average",
            reason:
              "Updates are shared, but transparency during stand-ups decreases."
          }
        ]
      },
      {
        roomNumber: 3,
        title: "Retrospective Improvement",
        mission: "Encourage honest reflection so the team can improve.",
        intro: "During the sprint retrospective, the team quickly says everything went fine and no improvements are suggested.",
        promptA: "You suspect the team may not feel comfortable discussing problems openly.",
        quoteA: "The meeting risks becoming performative instead of useful.",
        promptB: "You need to help the team reflect meaningfully.",
        quoteB: "What will you do?",
        closing: "The retrospective can either end flat or become productive.",
        bestExplanation:
          "Scrum Masters guide retrospectives so teams can reflect honestly and improve together.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "End the retrospective since no concerns were raised",
            action:
              "You close the meeting early and move on since no one volunteered any problems.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "The team loses the opportunity to improve."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Use a structured retrospective technique like Start, Stop, Continue",
            action:
              "You shift the retrospective into a structured format that makes discussion safer and more concrete.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Structured reflection helps teams discuss improvement safely."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Ask team members to submit feedback anonymously after the meeting",
            action:
              "You end the live conversation but invite people to share feedback privately after the retrospective.",
            impact: { team: 75, stakeholder: 55, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Feedback may appear, but the team misses the benefit of shared discussion."
          }
        ]
      },
      {
        roomNumber: 4,
        title: "Sustainable Sprint Pace",
        mission: "Maintain a healthy and sustainable work pace.",
        intro: "Midway through the sprint, several developers begin working late hours to complete tasks.",
        promptA: "They want to meet the sprint goal but appear increasingly tired.",
        quoteA: "The sprint is moving, but the team is showing signs of strain.",
        promptB: "You need to protect both delivery and team health.",
        quoteB: "How will you respond?",
        closing: "The pace of work needs attention now.",
        bestExplanation:
          "Scrum teams perform best when the pace of work remains sustainable and transparent.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Encourage the team to keep pushing to complete all tasks",
            action:
              "You tell the team to continue pushing hard so the sprint goal can still be achieved in full.",
            impact: { team: 45, stakeholder: 80, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Short-term pressure may reduce morale and productivity."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Facilitate a discussion about workload and adjust priorities",
            action:
              "You bring the team together to review workload, identify pressure points, and adjust expectations where needed.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Scrum promotes a sustainable development pace."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Allow each developer to manage their workload individually",
            action:
              "You leave the decision to each team member and let them self-manage effort without a team-wide adjustment.",
            impact: { team: 50, stakeholder: 75, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Flexibility increases but team coordination may weaken."
          }
        ]
      }
    ],
    impactScreen: {
      title: "Simulation Debrief",
      intro:
        "Your decisions influenced Team Collaboration, Sprint Flow, and Agile Discipline.",
      subIntro:
        "Scrum Masters support teams by facilitating communication, protecting Agile practices, and encouraging continuous improvement.",
      workedWell:
        "You recognised the importance of collaboration and supported several Scrum practices that help teams stay aligned.",
      canImprove:
        "Some situations required stronger facilitation to encourage open communication and sustainable working practices.",
      badge: "Agile Team Facilitator 🏅",
      resources: [
        {
          title: "Scrum: The Art of Doing Twice the Work in Half the Time",
          link: "https://www.scruminc.com/new-scrum-the-book/"
        },
        {
          title: "The Phoenix Project",
          link: "https://itrevolution.com/product/the-phoenix-project/"
        },
        {
          title: "Leaders Eat Last",
          link: "https://simonsinek.com/books/leaders-eat-last/"
        },
        {
          title: "The Scrum Guide",
          link: "https://scrumguides.org/scrum-guide.html"
        }
      ],
      disclaimer: "Disclaimer: Resources shared for educational support only."
    }
  };

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

  const simulationRoleLabel = el("simulationRoleLabel");
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

  const labelOne = el("labelOne");
  const labelTwo = el("labelTwo");
  const labelThree = el("labelThree");
  const barLabelOne = el("barLabelOne");
  const barLabelTwo = el("barLabelTwo");
  const barLabelThree = el("barLabelThree");

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

  function getRoleSimulation(role) {
    if (role === "Scrum Master") return scrumMasterSimulation;
    return projectManagerSimulation;
  }

  function getCurrentSimulation() {
    return getRoleSimulation(selectedRole);
  }

  function getCurrentLabels() {
    return roleMetricLabels[selectedRole] || roleMetricLabels["Project Manager"];
  }

  function updateMetricLabels() {
    const labels = getCurrentLabels();
    labelOne.textContent = labels.first;
    labelTwo.textContent = labels.second;
    labelThree.textContent = labels.third;

    barLabelOne.textContent = labels.first;
    barLabelTwo.textContent = labels.second;
    barLabelThree.textContent = labels.third;
  }

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

  function renderRolesGrid() {
    if (!rolesGridEl) return;
    rolesGridEl.innerHTML = "";
    roles.forEach((role) => rolesGridEl.appendChild(createInfoCard(role)));
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

    if (selectedRole === "Project Manager" || selectedRole === "Scrum Master") {
      selectedRoleNote.textContent =
        `${selectedRole} simulation is ready. Start Simulation is now enabled.`;
      startSimulationBtn.disabled = false;
    } else if (selectedRole) {
      selectedRoleNote.textContent =
        `${selectedRole} is not enabled yet in this build.`;
      startSimulationBtn.disabled = true;
    } else {
      selectedRoleNote.textContent =
        "Select a role to enable the Start Simulation button.";
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
    if (!(selectedRole === "Project Manager" || selectedRole === "Scrum Master")) return;

    currentRoom = 1;
    selectedOption = null;
    totalImpactScore = 0;

    hide(roleModal);
    show(simulationModal);
    document.body.classList.add("no-scroll");
    updateMetricLabels();
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
    const simulation = getCurrentSimulation();
    return simulation.rooms.find((room) => room.roomNumber === currentRoom) || simulation.rooms[0];
  }

  function renderRoom() {
    const simulation = getCurrentSimulation();
    const room = getActiveRoom();
    selectedOption = null;
    hide(resultPanel);
    updateMetricLabels();

    simulationRoleLabel.textContent = `${simulation.role} Simulation`;
    roomHeading.textContent = `Room ${room.roomNumber} – ${room.title}`;
    missionTitle.textContent = room.mission;
    roomChip.textContent = `Room ${room.roomNumber}`;

    const percent = Math.round((currentRoom / simulation.rooms.length) * 100);
    progressText.textContent = `Room ${currentRoom} of ${simulation.rooms.length}`;
    progressPercent.textContent = `${percent}%`;
    roomProgressFill.style.width = `${percent}%`;

    scenarioText.innerHTML = `
      <p>${room.intro}</p>
      <p>${room.promptA}</p>
      <div class="quote-box purple-quote">“${room.quoteA}”</div>
      <p>${room.promptB}</p>
      <div class="quote-box dark-quote">“${room.quoteB}”</div>
      <p>${room.closing}</p>
    `;

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
    const simulation = getCurrentSimulation();
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

    setTimeout(function () {
      animateNumber(teamValue, option.impact.team);
      teamBar.style.width = `${option.impact.team}%`;
      teamBarText.textContent = option.impact.team;
    }, 120);

    setTimeout(function () {
      animateNumber(stakeholderValue, option.impact.stakeholder);
      stakeholderBar.style.width = `${option.impact.stakeholder}%`;
      stakeholderBarText.textContent = option.impact.stakeholder;
    }, 260);

    setTimeout(function () {
      animateNumber(leadershipValue, option.impact.leadership);
      leadershipBar.style.width = `${option.impact.leadership}%`;
      leadershipBarText.textContent = option.impact.leadership;
    }, 400);

    if (currentRoom < simulation.rooms.length) {
      show(nextRoomBtn);
      hide(finishBtn);
    } else {
      hide(nextRoomBtn);
      show(finishBtn);
    }
  }

  function goToNextRoom() {
    const simulation = getCurrentSimulation();
    if (currentRoom < simulation.rooms.length) {
      currentRoom += 1;
      renderRoom();
      if (simulationModal) {
        simulationModal.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }

  function openImpactScreen() {
    const simulation = getCurrentSimulation();
    const impact = simulation.impactScreen;

    hide(simulationModal);
    show(impactModal);
    document.body.classList.add("no-scroll");

    impactTitle.textContent = impact.title;
    impactIntro.textContent = impact.intro;
    impactSubIntro.textContent = impact.subIntro;
    workedWellText.textContent = impact.workedWell;
    canImproveText.textContent = impact.canImprove;
    finalScoreNumber.textContent = `${totalImpactScore} / 80`;
    impactSummaryText.textContent = `Your decisions show developing professional judgement in the ${simulation.role} role.`;
    badgeText.textContent = impact.badge;
    resourceDisclaimer.textContent = impact.disclaimer;

    resourceList.innerHTML = "";
    impact.resources.forEach((resource) => {
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
    updateMetricLabels();
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
          behavior: "smooth"
        });
      });
    });
  }

  renderHeroRoles();
  renderInfoGrid(aboutCardsEl, aboutCards);
  renderInfoGrid(learningCardsEl, learningCards);
  renderRolesGrid();
  renderSteps();
  setupButtons();
  setupSmoothScroll();
  updateRoleSelectionState();
});
