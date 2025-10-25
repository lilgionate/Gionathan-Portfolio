import Work1 from "../../assets/project-1.png";
import Work2 from "../../assets/trello-clone.png";
import Work3 from "../../assets/project-3.png";
/* import Work4 from "../../assets/demo-1.png";
import Work5 from "../../assets/demo-2.png";
import Work6 from "../../assets/demo-3.png"; */

export const projectsData = [
     {
        id: 1,
        image: Work2,
        title: "Trello Style Kanban Board",
        category: "Integrations",
        githubUrl: "https://github.com/lilgionate/trello-clone.git",
        description: "Trello style Kanban board with smooth drag and drop task organization.",
        videoUrl: "https://www.loom.com/embed/85616ba5a72a4b17961693c74f284c86",
    },
    {
        id: 2,
        image: Work1,
        title: "Stripe Billing & Subscription Portal",
        category: "Demos",
        githubUrl: "https://github.com/lilgionate/stripe-subscription.git",
        description: "Stripe subscription flow with webhooks synced to MongoDB through Prisma.",
        videoUrl: "https://www.loom.com/embed/f0ae978fbbf543049b1b40516a3da299?sid=3db3b89a-44d0-4be1-a978-6d90ce0b8d39",
    },
 {
        id: 3,
        image: Work3,
        title: "Business Analytics Dashboard",
        category: "Dashboards",
        githubUrl: "https://github.com/lilgionate",
        description: "Interactive dashboard for real time business insights and tracking.",
        /*videoUrl: "https://www.loom.com/embed/f0ae978fbbf543049b1b40516a3da299?sid=3db3b89a-44d0-4be1-a978-6d90ce0b8d39",*/
    },
/*  {
        id: 4,
        image: Work4,
        title: "Salesforce CRM",
        category: "Demos",
    },
    {
        id: 5,
        image: Work5,
        title: "Calendly Scheduling",
        category: "Integrations",
    },
    {
        id: 6,
        image: Work6,
        title: "Zendesk",
        category: "Dashboards",
    }, */
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