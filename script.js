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
      text: "Supports team wellbeing, manages workplace culture, and promotes fair and inclusive people practices.",
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
    },
    "Business Analyst": {
      first: "Requirement Clarity",
      second: "Stakeholder Alignment",
      third: "Analysis Effectiveness"
    },
    "HR Executive": {
      first: "Employee Wellbeing",
      second: "Team Culture",
      third: "Organisational Trust"
    },
    "Quality Analyst": {
      first: "Product Quality",
      second: "Release Confidence",
      third: "Team Coordination"
    },
    "Developer": {
      first: "Code Quality",
      second: "Delivery Stability",
      third: "Team Collaboration"
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

  const businessAnalystSimulation = {
    role: "Business Analyst",
    rooms: [
      {
        roomNumber: 1,
        title: "Hidden Requirement Risk",
        mission: "Identify missing details before development begins.",
        intro: "During backlog refinement, a stakeholder explains a new feature for generating customer reports.",
        promptA: "The description sounds clear at first, but when the development team asks questions, several behaviours remain undefined.",
        quoteA: "For example, the report format and filtering rules are not fully explained.",
        promptB: "The Product Owner wants to move forward quickly so the sprint planning can stay on schedule.",
        quoteB: "The development team looks to you for clarification.",
        closing: "You need to decide how to handle the requirement.",
        bestExplanation:
          "A Business Analyst ensures that requirements are clear before development begins. Asking the right questions early reduces rework and supports better collaboration between stakeholders and the development team.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Accept the current explanation and allow the team to begin development",
            action:
              "You accept the stakeholder explanation as sufficient and allow the team to continue without deeper clarification.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Starting development without clear requirements increases the risk of building the wrong functionality."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Ask additional questions and work with the stakeholder to clarify the missing report rules",
            action:
              "You facilitate deeper analysis with the stakeholder and team so the missing report behaviour is clarified before work begins.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Clarifying details early prevents misunderstandings and helps the development team build the correct solution."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Allow development to begin while documenting open questions for later",
            action:
              "You let development move forward but record unresolved questions to revisit after implementation starts.",
            impact: { team: 50, stakeholder: 75, leadership: 70 },
            score: 10,
            resultType: "average",
            reason:
              "Progress continues, but unresolved questions may still create confusion later."
          }
        ]
      },
      {
        roomNumber: 2,
        title: "Late Scope Expansion",
        mission: "Manage new requests without disrupting the current plan.",
        intro: "After sprint planning is completed, a stakeholder requests an additional dashboard feature related to the current sprint’s work.",
        promptA: "They explain that the feature would be very useful for the upcoming client presentation.",
        quoteA: "However, the development team has already committed to the sprint backlog.",
        promptB: "The stakeholder is hoping the feature can still be added.",
        quoteB: "The team is waiting for your response.",
        closing: "You must decide how to manage the request.",
        bestExplanation:
          "Business Analysts help maintain clarity in project scope. New ideas are valuable, but they must be reviewed and prioritised properly within the backlog.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Agree to include the new feature immediately so the stakeholder remains satisfied",
            action:
              "You accept the request straight away and ask the team to absorb the new feature into the current sprint.",
            impact: { team: 45, stakeholder: 80, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Adding scope during the sprint can disrupt planning and reduce delivery stability."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Explain the sprint commitment and suggest reviewing the request during the next backlog refinement session",
            action:
              "You acknowledge the value of the request but guide it into the backlog process for proper review and prioritisation.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Managing scope changes through the backlog keeps project planning structured and transparent."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Ask the developers if they can quickly add the feature without affecting other work",
            action:
              "You check whether the team can fit the feature in informally without a formal reprioritisation step.",
            impact: { team: 70, stakeholder: 50, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "The feature might be delivered quickly, but the process may bypass proper planning."
          }
        ]
      },
      {
        roomNumber: 3,
        title: "Conflicting Stakeholder Priorities",
        mission: "Align stakeholders with different expectations.",
        intro: "Two stakeholders are discussing the design of a new customer onboarding feature.",
        promptA: "One stakeholder wants a detailed registration process for collecting more data.",
        quoteA: "Another stakeholder believes the process should be simplified to reduce user friction.",
        promptB: "Both stakeholders strongly support their approach.",
        quoteB: "The development team is waiting for a clear direction.",
        closing: "You need to guide the discussion toward a decision.",
        bestExplanation:
          "A Business Analyst helps stakeholders understand trade-offs and guides discussions toward informed decisions.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Choose the simpler approach so development can begin immediately",
            action:
              "You choose one approach quickly so the team can begin work without further discussion.",
            impact: { team: 75, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Quick decisions move work forward but may ignore important stakeholder concerns."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Facilitate a discussion to understand both perspectives and analyse the impact of each option",
            action:
              "You guide a structured conversation to uncover stakeholder priorities and evaluate the trade-offs together.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Analysing stakeholder goals helps identify the best solution for both the product and the users."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Document both options and ask the Product Owner to decide later",
            action:
              "You capture the disagreement and escalate the decision rather than facilitating alignment yourself.",
            impact: { team: 75, stakeholder: 50, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Escalating the decision may resolve the conflict but avoids deeper analysis."
          }
        ]
      },
      {
        roomNumber: 4,
        title: "UAT Reality Check",
        mission: "Manage feedback discovered during testing.",
        intro: "During User Acceptance Testing, stakeholders notice that a feature behaves differently from what they expected.",
        promptA: "However, when reviewing the original requirement documentation, the development team confirms that the feature was built exactly as described.",
        quoteA: "The stakeholders now request adjustments.",
        promptB: "The team must decide whether this is a change request or a misunderstanding.",
        quoteB: "You need to review the situation carefully.",
        closing: "You must decide the next step.",
        bestExplanation:
          "Business Analysts help resolve misunderstandings between stakeholders and the development team by reviewing requirements and ensuring expectations are aligned.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Ask the development team to quickly modify the feature",
            action:
              "You request an immediate change so the feature better matches what stakeholders now expect.",
            impact: { team: 45, stakeholder: 80, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Changing the feature immediately may solve the issue temporarily but ignores the root cause of the misunderstanding."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Review the original requirements with the stakeholders and clarify expectations before deciding next steps",
            action:
              "You bring the documentation and stakeholder expectations together to determine whether the issue is a misunderstanding or a valid change request.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Revisiting the requirement helps determine whether the issue is a misunderstanding or a new change request."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Document the feedback and schedule the changes for a future release",
            action:
              "You record the requested changes for later without immediately resolving the expectation gap.",
            impact: { team: 75, stakeholder: 50, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "The issue is recorded, but stakeholders may remain frustrated if expectations are not clarified."
          }
        ]
      }
    ],
    impactScreen: {
      title: "Simulation Debrief",
      intro:
        "Your decisions influenced Requirement Clarity, Stakeholder Alignment, and Analysis Effectiveness.",
      subIntro:
        "Business Analysts help organisations translate stakeholder needs into clear, structured requirements that guide successful project delivery.",
      workedWell:
        "You demonstrated awareness of how unclear requirements and misaligned expectations can affect project outcomes.",
      canImprove:
        "Some situations required deeper questioning and stronger stakeholder facilitation to fully align expectations before development decisions were made.",
      badge: "Requirement Strategist 🏅",
      resources: [
        {
          title: "BABOK Guide",
          link: "https://www.iiba.org/standards-and-resources/babok/"
        },
        {
          title: "User Story Mapping",
          link: "https://www.jpattonassociates.com/user-story-mapping/"
        },
        {
          title: "The Phoenix Project",
          link: "https://itrevolution.com/product/the-phoenix-project/"
        },
        {
          title: "Lean Analytics",
          link: "https://leananalyticsbook.com/"
        }
      ],
      disclaimer: "Disclaimer: Resources shared for educational support only."
    }
  };

  const hrExecutiveSimulation = {
    role: "HR Executive",
    rooms: [
      {
        roomNumber: 1,
        title: "Team Composition Decision",
        mission: "Support leadership in forming balanced project teams.",
        intro: "A new sprint team is being formed for an upcoming product initiative.",
        promptA: "The engineering manager proposes assigning only senior developers so the team can deliver quickly.",
        quoteA: "However, HR has been encouraging teams to include employees with different experience levels to support knowledge sharing and long-term capability growth.",
        promptB: "The project leadership team asks HR for guidance.",
        quoteB: "How should the team be formed?",
        closing: "You need to recommend the strongest people strategy.",
        bestExplanation:
          "Strong delivery teams benefit from diverse experience levels where knowledge sharing and collaboration occur naturally.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Allow the manager to assign only senior developers to maximise immediate delivery",
            action:
              "You support the manager’s plan to build a highly experienced team focused on short-term speed.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Highly specialised teams may deliver quickly but can reduce opportunities for mentoring and team development."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Recommend forming a balanced team that includes both experienced and developing employees",
            action:
              "You advise leadership to create a more balanced team that supports both delivery and long-term capability growth.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Balanced teams promote learning, collaboration, and stronger long-term performance."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Allow the manager to decide but suggest mentoring sessions after the team is formed",
            action:
              "You let the manager proceed while recommending later mentoring support to offset the imbalance.",
            impact: { team: 75, stakeholder: 50, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Mentoring may help later, but team balance is still limited."
          }
        ]
      },
      {
        roomNumber: 2,
        title: "Inclusive Hiring Concern",
        mission: "Ensure recruitment decisions remain fair and objective.",
        intro: "During a hiring discussion for a developer role, one manager comments that a candidate may not “fit the current team culture”.",
        promptA: "The candidate meets all technical requirements and has experience working in iterative project environments.",
        quoteA: "Another interviewer quietly raises concern that the comment may reflect unconscious bias.",
        promptB: "The hiring panel is waiting for HR guidance.",
        quoteB: "How should the decision process continue?",
        closing: "You need to protect fairness and trust in hiring.",
        bestExplanation:
          "HR helps organisations make hiring decisions based on clear criteria rather than subjective perceptions.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Allow the hiring manager to make the final decision",
            action:
              "You leave the final call with the hiring manager without addressing the concern raised in the discussion.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Ignoring bias concerns can reduce fairness and trust in recruitment decisions."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Encourage the panel to evaluate candidates using structured criteria based on role competencies",
            action:
              "You guide the panel back to role-based evaluation criteria and structured assessment instead of subjective impressions.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Structured evaluation helps focus decisions on skills and collaboration ability."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Suggest interviewing more candidates before making the final decision",
            action:
              "You recommend extending the process so the panel can compare more applicants before deciding.",
            impact: { team: 75, stakeholder: 75, leadership: 70 },
            score: 10,
            resultType: "average",
            reason:
              "Additional candidates improve fairness but do not directly address the bias concern."
          }
        ]
      },
      {
        roomNumber: 3,
        title: "Continuous Feedback Culture",
        mission: "Support performance conversations that encourage growth.",
        intro: "Several employees say they feel unsure about how they are performing because feedback is only given during annual reviews.",
        promptA: "Some team leaders suggest shorter feedback conversations after major project milestones or retrospectives.",
        quoteA: "HR must decide whether to adjust the feedback approach.",
        promptB: "The organisation is looking for a more supportive performance culture.",
        quoteB: "What should HR recommend?",
        closing: "You need to decide how feedback should be handled.",
        bestExplanation:
          "Regular feedback encourages learning, transparency, and stronger employee engagement.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Maintain the annual review system without changes",
            action:
              "You keep the current review cycle in place and avoid changing the feedback model.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Limited feedback can make employees feel uncertain about expectations."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Introduce regular feedback conversations linked to project milestones and retrospectives",
            action:
              "You support shorter, more frequent feedback conversations connected to project work and reflection points.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Frequent feedback helps employees improve continuously and feel supported."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Allow managers to decide individually how often feedback should be given",
            action:
              "You give managers flexibility to choose their own feedback frequency and method.",
            impact: { team: 75, stakeholder: 50, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Flexibility increases but feedback practices may become inconsistent."
          }
        ]
      },
      {
        roomNumber: 4,
        title: "Psychological Safety Concern",
        mission: "Protect an environment where employees feel comfortable sharing ideas.",
        intro: "During sprint review meetings, one senior engineer frequently criticises junior team members in a harsh tone.",
        promptA: "Over time, some developers have stopped presenting ideas during team discussions.",
        quoteA: "The team leader asks HR for guidance.",
        promptB: "The issue is beginning to affect confidence and participation.",
        quoteB: "How should HR respond?",
        closing: "You need to support a healthier team environment.",
        bestExplanation:
          "Psychological safety allows teams to share ideas, experiment, and improve without fear of criticism.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Ignore the behaviour and focus on project outcomes",
            action:
              "You avoid intervening and decide to prioritise delivery outcomes over team interaction concerns.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Ignoring negative behaviour may reduce participation and confidence within the team."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Work with leadership to promote constructive feedback and respectful communication",
            action:
              "You partner with team leadership to address the behaviour and reinforce healthier feedback norms.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Constructive feedback practices encourage open discussion and collaboration."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Offer communication workshops for the team",
            action:
              "You arrange training and awareness sessions to improve communication across the group.",
            impact: { team: 75, stakeholder: 75, leadership: 70 },
            score: 10,
            resultType: "average",
            reason:
              "Training increases awareness but may not immediately resolve behaviour."
          }
        ]
      }
    ],
    impactScreen: {
      title: "Simulation Debrief",
      intro:
        "Your decisions influenced Employee Wellbeing, Team Culture, and Organisational Trust.",
      subIntro:
        "HR leaders help organisations support collaborative teams, inclusive hiring, and healthy work environments.",
      workedWell:
        "You recognised how workplace culture and employee wellbeing influence team performance.",
      canImprove:
        "Some situations required earlier intervention to support communication, fairness, and employee confidence.",
      badge: "People & Culture Champion 🏅",
      resources: [
        {
          title: "CIPD People Profession Resources",
          link: "https://www.cipd.co.uk/"
        },
        {
          title: "Society for Human Resource Management",
          link: "https://www.shrm.org/"
        },
        {
          title: "The Culture Code",
          link: "https://danielcoyle.com/the-culture-code/"
        },
        {
          title: "Leaders Eat Last",
          link: "https://simonsinek.com/books/leaders-eat-last/"
        }
      ],
      disclaimer: "Disclaimer: Resources shared for educational support only."
    }
  };

  const qualityAnalystSimulation = {
    role: "Quality Analyst",
    rooms: [
      {
        roomNumber: 1,
        title: "Unclear Acceptance Criteria",
        mission: "Ensure features are testable before development begins.",
        intro: "During sprint planning, a new feature is added to the backlog.",
        promptA: "The user story explains the functionality, but the acceptance criteria are very limited.",
        quoteA: "The developer says they can start building the feature, but you are unsure how the behaviour should be validated.",
        promptB: "Testing preparation is now at risk.",
        quoteB: "What will you do?",
        closing: "You need to decide how to protect product quality early.",
        bestExplanation:
          "Quality Analysts help ensure requirements are clear and testable before development begins.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Allow development to begin and create test cases later",
            action:
              "You allow the team to move ahead with development and postpone test design until more details emerge later.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Without clear acceptance criteria, testing may miss important behaviours."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Work with the Business Analyst and developer to clarify acceptance criteria before development begins",
            action:
              "You pause and collaborate with the Business Analyst and developer so expected behaviour becomes clear and testable.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Clear acceptance criteria help both developers and testers understand expected behaviour."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Document possible test scenarios based on assumptions",
            action:
              "You begin preparing test scenarios using likely assumptions while waiting for final clarification.",
            impact: { team: 75, stakeholder: 50, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Testing preparation begins, but assumptions may still lead to incorrect expectations."
          }
        ]
      },
      {
        roomNumber: 2,
        title: "Last-Minute Feature Change",
        mission: "Maintain quality when requirements change during development.",
        intro: "A developer informs you that a small change was made to improve the feature behaviour.",
        promptA: "The change was implemented quickly and the team plans to release the feature soon.",
        quoteA: "However, the updated behaviour was not part of the original test cases.",
        promptB: "Release pressure is building.",
        quoteB: "How should you respond?",
        closing: "You need to decide whether testing should change before release.",
        bestExplanation:
          "Quality assurance requires adapting test coverage whenever product behaviour changes.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Skip additional testing since the change is small",
            action:
              "You treat the update as too minor to justify extra testing and allow release preparation to continue unchanged.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Even small changes can introduce unexpected defects."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Review the change with the developer and update test cases before release",
            action:
              "You review the modified behaviour, update the relevant test cases, and make sure release validation reflects the latest implementation.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Testing updated functionality ensures the release remains stable."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Perform a quick exploratory test to verify the change",
            action:
              "You run focused exploratory checks on the changed behaviour without fully updating the formal test suite.",
            impact: { team: 75, stakeholder: 80, leadership: 50 },
            score: 10,
            resultType: "average",
            reason:
              "Exploratory testing helps identify issues quickly but may not cover all scenarios."
          }
        ]
      },
      {
        roomNumber: 3,
        title: "Release Pressure",
        mission: "Protect product quality when deadlines create pressure.",
        intro: "The product release date is approaching and several minor defects remain unresolved.",
        promptA: "The project manager suggests releasing the product and fixing the issues later.",
        quoteA: "You must decide how to respond.",
        promptB: "The team needs a clear quality perspective before release.",
        quoteB: "What will you do?",
        closing: "You need to guide the team toward an informed release decision.",
        bestExplanation:
          "Quality Analysts help teams balance delivery deadlines with product stability.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Approve the release without further discussion",
            action:
              "You accept the release plan as it is and do not raise additional concerns about the remaining defects.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Releasing with unresolved issues may reduce user trust."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Discuss defect severity with the team and evaluate the risk before release",
            action:
              "You review the remaining defects with the team, assess their impact, and support a risk-based release decision.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Understanding defect impact helps teams make informed release decisions."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Document the issues and allow the release to proceed",
            action:
              "You formally record the known defects and allow the release to continue with visibility but without deeper discussion.",
            impact: { team: 50, stakeholder: 80, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Transparency improves, but unresolved defects may still affect users."
          }
        ]
      },
      {
        roomNumber: 4,
        title: "Unexpected Production Issue",
        mission: "Support investigation when defects appear after release.",
        intro: "Shortly after deployment, users report that a feature occasionally fails when handling large datasets.",
        promptA: "The issue did not appear during previous testing.",
        quoteA: "The development team begins investigating.",
        promptB: "The issue may point to a gap in test coverage or environment assumptions.",
        quoteB: "How should quality support respond?",
        closing: "You need to decide how quickly and deeply to investigate.",
        bestExplanation:
          "Quality assurance continues after release through investigation, learning, and improved testing strategies.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Assume the issue is caused by user behaviour and wait for more reports",
            action:
              "You delay action and assume the problem may be isolated until more evidence appears.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Ignoring early defect signals may allow problems to grow."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Collaborate with developers to reproduce the issue and analyse possible causes",
            action:
              "You work with developers to reproduce the defect, analyse the conditions behind it, and understand why it escaped earlier testing.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Investigating issues quickly helps teams resolve defects and improve testing coverage."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Record the issue and monitor the system for further incidents",
            action:
              "You log the issue carefully and monitor patterns over time before starting a deeper investigation.",
            impact: { team: 75, stakeholder: 50, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Monitoring provides insight but delays immediate investigation."
          }
        ]
      }
    ],
    impactScreen: {
      title: "Simulation Debrief",
      intro:
        "Your decisions influenced Product Quality, Release Confidence, and Team Coordination.",
      subIntro:
        "Quality Analysts help teams detect risks early, strengthen testing practices, and ensure stable product releases.",
      workedWell:
        "You recognised how testing decisions influence product reliability and user experience.",
      canImprove:
        "Some situations required deeper risk analysis to ensure defects and edge cases were fully addressed before release.",
      badge: "Quality Guardian 🏅",
      resources: [
        {
          title: "ISTQB Foundation Level",
          link: "https://www.istqb.org/"
        },
        {
          title: "Google Testing Blog",
          link: "https://testing.googleblog.com/"
        },
        {
          title: "The Art of Software Testing",
          link: "https://www.wiley.com/en-us/The+Art+of+Software+Testing"
        },
        {
          title: "Continuous Testing in DevOps",
          link: "https://www.atlassian.com/continuous-delivery/testing"
        }
      ],
      disclaimer: "Disclaimer: Resources shared for educational support only."
    }
  };

  const developerSimulation = {
    role: "Developer",
    rooms: [
      {
        roomNumber: 1,
        title: "Legacy Code Integration",
        mission: "Implement a feature while dealing with existing system constraints.",
        intro: "You are building a new feature that depends on an older module in the system.",
        promptA: "While reviewing the code, you notice the module has limited documentation and several complex functions.",
        quoteA: "Changing it directly may affect other parts of the system.",
        promptB: "You need to decide how to proceed with the implementation.",
        quoteB: "What will you do?",
        closing: "Your choice will affect stability and maintainability.",
        bestExplanation:
          "Developers must understand existing system architecture before modifying critical components.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Modify the existing module quickly to support your feature",
            action:
              "You make direct changes to the legacy module so the feature can move forward quickly.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Quick changes to legacy code may introduce unexpected issues."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Review the module carefully and discuss potential risks with the team before making changes",
            action:
              "You analyse the legacy module, identify dependencies, and collaborate with the team before implementing changes.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Understanding system dependencies helps avoid unintended side effects."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Build a temporary workaround without modifying the module",
            action:
              "You avoid touching the older module by creating a temporary workaround to support the new feature.",
            impact: { team: 50, stakeholder: 80, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "The workaround avoids immediate risk but may increase system complexity later."
          }
        ]
      },
      {
        roomNumber: 2,
        title: "Test Environment Failure",
        mission: "Investigate issues discovered during testing.",
        intro: "QA reports that a feature works correctly on your local machine but fails in the shared testing environment.",
        promptA: "The release deadline is approaching, and the issue appears inconsistent.",
        quoteA: "The team needs to know whether the problem is in the code, the environment, or the configuration.",
        promptB: "You need to decide how to respond.",
        quoteB: "What will you do?",
        closing: "The release depends on finding the cause.",
        bestExplanation:
          "Effective debugging requires collaboration and careful investigation of system environments.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Assume the testing environment is unstable and continue development",
            action:
              "You treat the issue as an environment problem and continue with other development work.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Ignoring test failures may allow hidden defects to reach production."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Work with QA to reproduce the issue and analyse differences between environments",
            action:
              "You collaborate with QA to compare environments, isolate variables, and identify the root cause.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Collaborative debugging helps identify root causes quickly."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Restart the testing environment and attempt deployment again",
            action:
              "You reset the environment and retry deployment to see whether the issue disappears.",
            impact: { team: 75, stakeholder: 50, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "The issue may disappear temporarily but the underlying cause remains unclear."
          }
        ]
      },
      {
        roomNumber: 3,
        title: "Unexpected Performance Issue",
        mission: "Identify and resolve performance risks in your implementation.",
        intro: "While testing your feature, you notice that response time slows significantly when processing large data sets.",
        promptA: "The feature works correctly but may affect system performance under heavy usage.",
        quoteA: "You need to decide whether to treat this as a delivery issue now or later.",
        promptB: "The team is waiting for your technical judgement.",
        quoteB: "What will you do?",
        closing: "Performance risk is now part of the delivery decision.",
        bestExplanation:
          "Developers should consider performance and scalability when implementing new features.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Ignore the issue since the feature technically works",
            action:
              "You treat the feature as complete because the functional behaviour is correct.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Performance issues can become major problems in production environments."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Investigate optimisation options and discuss the findings with the team",
            action:
              "You analyse the performance bottleneck, explore optimisation options, and share the findings with the team.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Early performance improvements prevent future scalability issues."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Deploy the feature and plan performance improvements later",
            action:
              "You allow the feature to move forward while creating a follow-up plan for performance improvement.",
            impact: { team: 50, stakeholder: 80, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "The feature ships faster but performance risk remains."
          }
        ]
      },
      {
        roomNumber: 4,
        title: "Production Bug Investigation",
        mission: "Respond effectively when users report unexpected behaviour.",
        intro: "After release, users report that a feature occasionally fails when handling large datasets.",
        promptA: "The issue was not detected during previous testing.",
        quoteA: "Logs show inconsistent behaviour.",
        promptB: "The problem may be deeper than a simple one-line fix.",
        quoteB: "What will you do?",
        closing: "You need to balance speed, diagnosis, and long-term reliability.",
        bestExplanation:
          "Developers strengthen system reliability by investigating problems thoroughly and collaborating with testing teams.",
        options: [
          {
            key: "A",
            title: "Option A",
            decision: "Assume the issue is rare and focus on upcoming development tasks",
            action:
              "You treat the issue as low priority and continue focusing on the next planned work.",
            impact: { team: 45, stakeholder: 45, leadership: 45 },
            score: 5,
            resultType: "needs-improvement",
            reason:
              "Ignoring early reports can allow defects to spread across the system."
          },
          {
            key: "B",
            title: "Option B",
            decision: "Analyse logs, reproduce the issue, and work with QA to identify the root cause",
            action:
              "You investigate logs, reproduce the defect, and collaborate with QA to understand why the issue escaped earlier checks.",
            impact: { team: 85, stakeholder: 85, leadership: 85 },
            score: 20,
            resultType: "excellent",
            reason:
              "Investigating the root cause improves both the fix and future testing coverage."
          },
          {
            key: "C",
            title: "Option C",
            decision: "Apply a quick patch to prevent the failure temporarily",
            action:
              "You implement a temporary patch to reduce immediate failure while postponing deeper investigation.",
            impact: { team: 50, stakeholder: 80, leadership: 75 },
            score: 10,
            resultType: "average",
            reason:
              "Quick fixes may reduce immediate impact but do not always solve the underlying issue."
          }
        ]
      }
    ],
    impactScreen: {
      title: "Simulation Debrief",
      intro:
        "Your decisions influenced Code Quality, Delivery Stability, and Team Collaboration.",
      subIntro:
        "Developers contribute to successful product delivery by writing reliable code, solving technical challenges, and working closely with the team.",
      workedWell:
        "You recognised how technical decisions influence system reliability and overall product performance.",
      canImprove:
        "Some situations required deeper investigation and collaboration to fully address technical risks.",
      badge: "System Reliability Builder 🏅",
      resources: [
        {
          title: "Clean Code",
          link: "https://www.oreilly.com/library/view/clean-code/"
        },
        {
          title: "The Pragmatic Programmer",
          link: "https://pragprog.com/"
        },
        {
          title: "Google Engineering Practices",
          link: "https://google.github.io/eng-practices/"
        },
        {
          title: "Refactoring Guru",
          link: "https://refactoring.guru/"
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
    if (role === "Business Analyst") return businessAnalystSimulation;
    if (role === "HR Executive") return hrExecutiveSimulation;
    if (role === "Quality Analyst") return qualityAnalystSimulation;
    if (role === "Developer") return developerSimulation;
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

    if (
      selectedRole === "Project Manager" ||
      selectedRole === "Scrum Master" ||
      selectedRole === "Business Analyst" ||
      selectedRole === "HR Executive" ||
      selectedRole === "Quality Analyst" ||
      selectedRole === "Developer"
    ) {
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
    if (
      !(
        selectedRole === "Project Manager" ||
        selectedRole === "Scrum Master" ||
        selectedRole === "Business Analyst" ||
        selectedRole === "HR Executive" ||
        selectedRole === "Quality Analyst" ||
        selectedRole === "Developer"
      )
    ) {
      return;
    }

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

    const simulation = getCurrentSimulation();
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
  renderInfoGrid(rolesGridEl, roles);
  renderSteps();
  setupButtons();
  setupSmoothScroll();
  updateRoleSelectionState();
});
