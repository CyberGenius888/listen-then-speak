export const YOUTUBE_VIDEO_IDS = {
  COUNSELING_1: "dQw4w9WgXcQ", // Replace with actual counseling video ID
  COUNSELING_2: "dQw4w9WgXcQ", // Replace with actual counseling video ID
  COUNSELING_3: "dQw4w9WgXcQ", // Replace with actual counseling video ID
};

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  content: string;
  name: string;
  position: string;
  initials: string;
}

export interface CounselingVideo {
  id: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ExpectationItem {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    icon: "fas fa-brain",
    title: "Mental Clarity",
    description: "Learn techniques to clear mental fog and gain perspective on what truly matters in your life."
  },
  {
    icon: "fas fa-balance-scale",
    title: "Life Balance",
    description: "Develop strategies to balance work, personal life, and self-care for greater fulfillment."
  },
  {
    icon: "fas fa-chart-line",
    title: "Growth Planning",
    description: "Create actionable plans that align with your values and move you toward your goals."
  }
];

export const testimonials: Testimonial[] = [
  {
    content: "While coaching Jahmaal will focus intently on his clients, giving them every bit of his attention. During my time with Jahmaal, he showed an unending amount of patience, and he can listen attentively while analyzing the issue at hand. Because of this, he can hone into specifics and work with clients on creating a plan that will guide them to a resolution instead of a band-aid.",
    name: "Clay Sibert",
    position: "Business Analyst | Vendor Management & Accountability",
    initials: "CS"
  },
  {
    content: "Working with Jahmaal Marshall has been a game changer for me. He coached me to find root causes of why I show up the way I do as a leader today. And we went back to experiences from my childhood that I am still working on healing from. He is attentive, customized each of our sessions, and provided impactful and engaging homework assignments that I was excited to dig into.",
    name: "Mita Mallick",
    position: "Product Manager & Director",
    initials: "MM"
  }
];

export const counselingVideos: CounselingVideo[] = [
  {
    id: YOUTUBE_VIDEO_IDS.COUNSELING_1,
    title: "Understanding Anxiety",
    description: "Learn about common anxiety triggers and effective coping strategies."
  },
  {
    id: YOUTUBE_VIDEO_IDS.COUNSELING_2,
    title: "Overcoming Procrastination",
    description: "Practical techniques to break the cycle of procrastination and boost productivity."
  },
  {
    id: YOUTUBE_VIDEO_IDS.COUNSELING_3,
    title: "Finding Your Purpose",
    description: "How to identify your core values and align them with your daily actions."
  }
];

export const stats: Stat[] = [
  { value: "100+", label: "Clients helped" },
  { value: "8+", label: "Years experience" },
  { value: "96%", label: "Client satisfaction" },
  { value: "5 Star", label: "Average rating" }
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery Session",
    description: "We'll identify your unique challenges and goals, creating a foundation for our work together."
  },
  {
    number: 2,
    title: "Custom Strategy",
    description: "I'll develop personalized techniques to help you overcome your specific overwhelm triggers."
  },
  {
    number: 3,
    title: "Implementation",
    description: "We'll work together to implement these strategies and track your progress toward lasting change."
  }
];

export const expectationItems: ExpectationItem[] = [
  {
    icon: "fas fa-clock",
    title: "45-Minute Consultation",
    description: "We'll discuss your current challenges and goals to see if we're a good fit."
  },
  {
    icon: "fas fa-comments",
    title: "Safe, Judgment-Free Space",
    description: "Share openly in a confidential environment focused on your needs."
  },
  {
    icon: "fas fa-map",
    title: "Clear Next Steps",
    description: "You'll leave with initial insights and a potential path forward."
  }
];

export const faqs: FAQ[] = [
  {
    question: "How long does the coaching process typically take?",
    answer: "Most clients begin seeing results within 4-6 sessions. However, the full coaching program typically spans 3-6 months depending on your specific goals and challenges."
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes! All coaching sessions can be conducted via video call, making it convenient regardless of your location."
  },
  {
    question: "What makes your coaching approach different?",
    answer: "My approach combines practical strategies with mindfulness techniques that address both the symptoms and root causes of feeling overwhelmed. I focus on sustainable changes rather than quick fixes."
  },
  {
    question: "How much does coaching cost?",
    answer: "Coaching packages are customized based on your needs. We'll discuss options during your consultation to find a solution that works for you."
  }
];
