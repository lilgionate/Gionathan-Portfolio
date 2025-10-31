import Work1 from "../../assets/project-1.png";
import Work2 from "../../assets/trello-clone.png";
import Work3 from "../../assets/real-time-dashboard.png";
import Work4 from "../../assets/hubspot-jira.png";

export const projectsData = [
    {
      id: 4,
      image: Work4,
      title: "Sales to Project Automation Hub",
      category: "Integrations",
      description: "Automating the handoff between Sales and Operations.",
      videoUrl:"https://www.loom.com/embed/6c036a61f7294d7883e63b40b9e3e2ff",
    },
    {
    id: 1,
    image: Work3,
    title: "Business Analytics Dashboard",
    category: "Dashboards",
    githubUrl: "https://github.com/lilgionate/React-Admin-Dashboard.git",
    liveDemo: "https://react-admin-dashboard-swart-theta.vercel.app/",
    description: "Interactive dashboard for real time business insights and tracking.",
    videoUrl: "https://www.loom.com/embed/fd59d06ae4694f59994ecd70c0d0bb77",
  },
  {
    id: 2,
    image: Work2,
    title: "Trello Style Kanban Board",
    category: "Integrations",
    githubUrl: "https://github.com/lilgionate/trello-clone.git",
    liveDemo: "https://trello-clone-nine-coral.vercel.app/",
    description: "Trello style Kanban board with smooth drag and drop task organization.",
    videoUrl: "https://www.loom.com/embed/76dccac5c37d4d55808d61d29c7b3e1b",
  },
  {
    id: 3,
    image: Work1,
    title: "Stripe Billing & Subscription Portal",
    category: "Demos",
    githubUrl: "https://github.com/lilgionate/stripe-subscription.git",
    liveDemo: "https://stripe-subscription-gray.vercel.app/",
    description: "Stripe subscription flow with webhooks synced to MongoDB through Prisma.",
    videoUrl: "https://www.loom.com/embed/2361514beddd45aca904103f30d33b59",
  },
];

export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Demos',
    },
    {
        name: 'Integrations',
    },
    {
        name: 'Dashboards',
    },
];