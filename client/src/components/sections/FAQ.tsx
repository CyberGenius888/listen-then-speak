import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
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

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[Playfair_Display] text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg p-6 shadow-sm border-none"
            >
              <AccordionTrigger className="font-bold text-lg text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray pt-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
