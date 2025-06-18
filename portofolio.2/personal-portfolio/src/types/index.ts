export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    repoUrl: string;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface About {
    name: string;
    title: string;
    summary: string;
    profileImageUrl: string;
}