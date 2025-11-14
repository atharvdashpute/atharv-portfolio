import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    Message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzK7Pr8Nbj9cx7y5fcIL_5PBuCpfOB_nDURN8Ygmv8bozUA0NU642C-9cV1pT9swdEvYw/exec';
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Name', formData.Name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('Message', formData.Message);

      await fetch(scriptURL, { method: 'POST', body: formDataToSend });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ Name: "", email: "", Message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-subtle">
      <div
        ref={ref}
        className={`container max-w-5xl mx-auto transition-all duration-700 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-medium border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:dashputeatharv@gmail.com"
                      className="text-card-foreground hover:text-accent transition-colors"
                    >
                      dashputeatharv@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+918767606907"
                      className="text-card-foreground hover:text-accent transition-colors"
                    >
                      +91 8767606907
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-card-foreground">Pune, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-medium border border-border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Marathi", "Hindi"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-accent/20 text-accent rounded-lg font-medium border border-accent/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-medium border border-border">
            <form onSubmit={handleSubmit} name="submit-to-google-sheet" className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-accent"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-accent"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-2 focus:border-accent"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 transition-all"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
