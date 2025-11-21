import { LucideIcon, Sparkles, Target, Bot, Trophy } from 'lucide-react';

export interface Award {
    title: string;
    issuer: string;
    date: string;
    association: string;
    color: string;
    icon: LucideIcon;
    highlights?: string[];
    paragraphs?: string[];
}

export const awards: Award[] = [
    {
        title: "Best use of ElevenLabs - Stormhacks 2025",
        issuer: "Major League Hacking (MLH), SFU Surge",
        date: "Oct 2025",
        association: "The University of British Columbia",
        color: "from-blue-500 to-purple-500",
        icon: Sparkles,
        highlights: [
            "Won Best Use of ElevenLabs at StormHacks 2025, one of Western Canada's largest hackathons.",
            "Collaborated with a team of four to build Carrie, an AI peer counselor that integrates computer vision, ElevenLabs speech-to-text, and LiveKit for real-time, unbiased mental health support.",
            "Contributed backend integration and leveraged business and mental health background for pitching and presentation."
        ]
    },
    {
        title: "Cyber Attack and Defence Elite Training - Merit Award",
        issuer: "HKIRC, Digital Policy Office, HKPF",
        date: "Aug 2025",
        association: "The Chinese University of Hong Kong",
        color: "from-green-500 to-emerald-500",
        icon: Target,
        highlights: [
            "Developing and executing attack strategies for penetration testing and adversary simulation.",
            "Coordinating the team's defensive posture, including incident response and threat hunting.",
            "Conducted log analysis and memory forensics to trace attack vectors and remediate breaches.",
            "Proactively identified indicators of compromise (IOCs) within the network.",
            "Executed attacks based on the OWASP Top 10, including SQL Injection (SQLi), Cross-Site Scripting (XSS), and Insecure Deserialization.",
            "Performed network reconnaissance, vulnerability scanning, and exploited misconfigurations in network services.",
            "Leveraged system weaknesses to gain elevated access to critical assets."
        ]
    },
    {
        title: "GenAI Application in Financial Services - 2nd Runner Up",
        issuer: "CUHK, HKMA, Cyberport, Hang Seng Bank",
        date: "Apr 2025",
        association: "The Chinese University of Hong Kong",
        color: "from-yellow-500 to-orange-500",
        icon: Bot,
        paragraphs: [
            "I was awarded second runner-up in the GenAI Application in Financial Services competition organised by the Hong Kong Monetary Authority, CUHK FinTech Department, and supported by Hang Seng Bank and Cyberport.",
            "As team leader, I was responsible for overall project management, including coordinating team workflow, setting milestones, and ensuring effective task distribution based on each member's strengths. I led the design and development of our prototype, which integrated a web-based user interface built with HTML and JavaScript, alongside backend functionalities powered by Python to handle data processing and AI model integration.",
            "Throughout the competition, I conducted extensive legal and compliance research by communicating with law students to understand regulatory frameworks in the financial sector. This ensured our solution adhered to data privacy laws and banking regulations, strengthening its practicality and feasibility.",
            "In addition, I managed our team's pitch preparation, refining our presentation slides to align with professional standards expected by financial institutions and training team members for effective public speaking and Q&A handling."
        ]
    },
    {
        title: "Inter-School Cybersecurity Competition 2022 - Medallion",
        issuer: "AiLE, IVE Chai Wan, AWS",
        date: "Dec 2022",
        association: "HKMA David Li Kwok Po College",
        color: "from-indigo-500 to-purple-500",
        icon: Trophy,
        paragraphs: [
            "I was invited to represent my school in the Inter-School Cybersecurity Competition co-hosted by the Association of I.T. Leaders in Education, IVE Chai Wan, and Amazon Web Services. During the competition, I received a medallion in recognition of my performance and contributions.",
            "Throughout the event, I gained hands-on experience with AWS services such as EC2, IAM, and S3 buckets, learning to configure secure cloud storage environments, manage user permissions, and implement access control policies to protect sensitive data. I worked on practical cybersecurity challenges that required identifying vulnerabilities, performing privilege escalation techniques, and designing effective network defence strategies to mitigate threats.",
            "The competition also included scenarios involving simulated cyber attacks, where I collaborated with teammates to analyse attack vectors, interpret logs, and propose immediate mitigation plans under strict time constraints.",
            "Additionally, I researched best practices in cloud security architecture to support our team's solutions and presented our findings and defence strategies to a panel of judges comprising educators and industry professionals."
        ]
    }
];
