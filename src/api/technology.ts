export const technologyData = async (): Promise<ITechnology[]> => {

    return [
        {
            id: 1,
            icon: "ri-macbook-line",
            title: "Fron-tend",
            description: "JavaScript, JQuery, TypeScript, React js, Angular, Vue js, HTML, CSS, bootstrap, Material UI"
        },
        {
            id: 2,
            icon: "ri-code-s-slash-line",
            title: "Backend",
            description: "PHP, JavaScript, TypeScript, Node js, Python"
        },
        {
            id: 3,
            icon: "ri-smartphone-line",
            title: "Mobile development",
            description: "Android, IOS, React Native, flutter"
        },
        {
            id: 4,
            icon: "ri-robot-3-line",
            title: "Artificial intelligence",
            description: "Azure AI, Open AI, Gemini, Blackbox"
        },
        {
            id: 5,
            icon: "ri-eye-line",
            title: "Frameworks",
            description: "Laravel, CodeIgniter, Next.js, MEAN Stack, MERN Stack, Django"
        },
        {
            id: 6,
            icon: "ri-database-2-line",
            title: "Database",
            description: "Mysql, Mysqli, PostgreSQL, Microsoft SQL Server, MongoDB, CouchDB"
        },
        {
            id: 7,
            icon: "ri-cloud-line",
            title: "Cloud platform",
            description: "Microsoft Azure, AWS, DigitalOcean, Heroku"
        },
        {
            id: 8,
            icon: "ri-secure-payment-line",
            title: "UI/UX design",
            description: "Figma, Adobe XD, Miro, Marvel, Photoshop, canva"
        }
    ];
};
