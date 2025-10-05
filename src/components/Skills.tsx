import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Code2, Palette, Database, Rocket } from "lucide-react";

const iconMap: Record<string, any> = {
  code: Code2,
  design: Palette,
  database: Database,
  rocket: Rocket,
};

export const Skills = () => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const { data } = await supabase
      .from("skills")
      .select("*")
      .eq("is_active", true)
      .order("display_order", { ascending: true });
    
    if (data) {
      setSkills(data);
    }
  };

  const getRandomIcon = () => {
    const icons = Object.values(iconMap);
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="bg-gradient-primary bg-clip-text text-transparent">
            المهارات والخبرات
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            إتقان أحدث التقنيات لتقديم نتائج استثنائية
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = getRandomIcon();
            return (
              <Card
                key={skill.id}
                className="group relative bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6 text-center space-y-3">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Skill Name */}
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
