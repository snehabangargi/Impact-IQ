const roles = [
  {
    title: "Project Manager",
    text: "Responsible for planning, coordinating the team, and ensuring the project is delivered successfully.",
    icon: "💼"
  },
  {
    title: "Scrum Master",
    text: "Supports the Agile team, removes obstacles, and helps maintain effective collaboration during sprints.",
    icon: "👥"
  },
  {
    title: "Business Analyst",
    text: "Bridges communication between stakeholders and the development team while clarifying project requirements.",
    icon: "📋"
  },
  {
    title: "HR Executive",
    text: "Supports team wellbeing, manages workplace conflicts, and promotes effective communication across diverse teams.",
    icon: "🧭"
  },
  {
    title: "Quality Analyst",
    text: "Ensures product quality by identifying defects, testing features, and reporting potential risks.",
    icon: "🛡"
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
    text: "Enter project scenarios like sprint planning, requirement clarification, stakeholder conflicts, and team communication challenges."
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
    text: "Experience real project meetings, team communication issues, and stakeholder discussions.",
    icon: "📋"
  },
  {
    title: "Decision Impact",
    text: "See how your choices influence project progress, trust, and project outcomes.",
    icon: "📈"
  },
  {
    title: "Iterative Learning",
    text: "Improve through reflection, repeated scenarios, and retrospective-based feedback.",
    icon: "🧩"
  }
];

const learningCards = [
  {
    title: "Iteration and Reflection",
    text: "Effective teams improve through repeated cycles, reviews, and improvements. Impact IQ mirrors that process in each scenario.",
    icon: "🔁"
  },
  {
    title: "Team Collaboration",
    text: "Players see how communication, alignment, and decision timing affect the whole team.",
    icon: "🤝"
  },
  {
    title: "Retrospective Feedback",
    text: "After each scenario, the platform shows what went well, what could improve, and what impact the decision had.",
    icon: "✅"
  }
];

const rooms = [
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
          "This may satisfy the stakeholder temporarily but creates pressure on the team and risks burnout or quality issues."
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
          "The team attempts to resolve the issue quickly to maintain the release schedule. While this may work in the short term, the rushed fix may introduce additional pressure on the team."
      }
    ]
  }
];
