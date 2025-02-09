interface FormQuestions {
    fullName: string;
    email: string;
    birthDate: string; // Format: DD-MM-YYYY
    phoneNumber: string;
    programmingSkillLevel: ProgrammingSkillLevel;
    cv?: string; // Optional: URL or base64 encoded string
    willingToParticipateOnPaidBasis: boolean;
    telegramHandle: string;
    linkedInLink: string;
    socialMediaLinks: string[]; // Array of URLs
    gitHubHandle: string;
    educationalPlacement: string; // University/College/High school
    specialtyAtUniversity: string;
    jobPlacement?: string; // Optional
    programmingExperienceDescription: string;
    pastProgrammingProjects: string;
    bestAchievements: string;
    availabilityInAlmaty: boolean;
    needAccommodationInAlmaty: boolean;
    representativeGroups: string[]; // Array of group names
}

enum ProgrammingSkillLevel {
    NoExperience = "No experience",
    SelfTaught = "Self-taught",
    ITStudent = "IT student",
    CompetitiveProgrammer = "Competitive programmer",
    ProfessionalDeveloper = "Professional developer",
}
   