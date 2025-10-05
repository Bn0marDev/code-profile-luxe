import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Hero = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .limit(1)
        .maybeSingle();
      
      setProfile(data);
    };
    
    fetchProfile();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-accent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border-2 border-border backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">متاح للمشاريع الحرة</span>
          </div>

          {/* Main Heading with Highlighted Name */}
          <div className="animate-fade-in">
            <h1 className="text-foreground">
              مرحباً، أنا <span className="name-highlight">موسى</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مطور ويب محترف متخصص في بناء تجارب رقمية استثنائية بأحدث التقنيات
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              استعرض المشاريع
              <ArrowDown className="mr-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              تواصل معي
              <Mail className="mr-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <a 
              href="#" 
              className="p-3 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-card transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-card transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-card transition-all duration-300 hover:scale-110"
              aria-label="البريد الإلكتروني"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
