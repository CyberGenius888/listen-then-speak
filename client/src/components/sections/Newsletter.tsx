import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real application, this would send the data to a newsletter service
    // Such as Mailchimp, ConvertKit, etc.
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        variant: "default"
      });
      
      // Reset form
      setFullName('');
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 bg-[#FF7A00]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Subscribe To My Newsletter</h2>
            <p className="text-xl md:text-2xl font-medium mb-8">Weekly Tips to Break Free and Level Up</p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-left text-lg font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="First Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-left text-lg font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full transition duration-300"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}