interface Details { 
    id: number;
    title: string;
    description: string;
    stack: string;  
    href: string
}

export const ProjectDetails: Details[] = [
    { id: 1, title: 'Dashboard App', description: 'Dashboard app is an admin panel that tracks user metrics, displays graphical reports, and manages user roles with status controls.',  stack: 'Next.js Stack' , href: 'https://dashboard-app-jade-tau.vercel.app/dashboard' },
    { id: 2, title: 'Todo Project', description: 'Todo App is a simple task management tool that allows users to add and track their to-do items. It features a dark-themed interface with input fields for task title and description, along with a submission button to add new tasks to the list.', stack: 'MERN Stack', href: 'https://hiiex09.github.io/Project_Todo/'  },
    { id: 3, title: 'Roomfy', description: 'Living in luxurious experience',  stack: 'Next.js Stack' , href: 'https://roomfy.vercel.app/' },
];
