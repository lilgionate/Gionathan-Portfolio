import Work1 from "../../assets/project-1.png";
import Work2 from "../../assets/trello-clone.png";
import Work3 from "../../assets/real-time-dashboard.png";

export const projectsData = [
    {
    id: 1,
    image: Work3,
    title: "Business Analytics Dashboard",
    category: "Dashboards",
    githubUrl: "https://github.com/lilgionate/React-Admin-Dashboard.git",
    liveDemo: "https://react-admin-dashboard-swart-theta.vercel.app/",
    description: "Interactive dashboard for real time business insights and tracking.",
  },
  {
    id: 2,
    image: Work2,
    title: "Trello Style Kanban Board",
    category: "Integrations",
    githubUrl: "https://github.com/lilgionate/trello-clone.git",
    liveDemo: "https://trello-clone-nine-coral.vercel.app/",
    description: "Trello style Kanban board with smooth drag and drop task organization.",
    videoUrl: "https://www.loom.com/embed/85616ba5a72a4b17961693c74f284c86",
  },
  {
    id: 3,
    image: Work1,
    title: "Stripe Billing & Subscription Portal",
    category: "Demos",
    githubUrl: "https://github.com/lilgionate/stripe-subscription.git",
    liveDemo: "https://stripe-subscription-gray.vercel.app/",
    description: "Stripe subscription flow with webhooks synced to MongoDB through Prisma.",
    videoUrl: "https://www.loom.com/embed/f0ae978fbbf543049b1b40516a3da299",
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