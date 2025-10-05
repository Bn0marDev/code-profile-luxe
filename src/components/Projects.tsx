import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("display_order", { ascending: true });
    
    if (data) {
      setProjects(data);
    }
  };

  const handleLike = async (projectId: string) => {
    if (likedProjects.has(projectId)) {
      toast.info("Already liked this project");
      return;
    }

    const deviceId = localStorage.getItem("deviceId") || crypto.randomUUID();
    localStorage.setItem("deviceId", deviceId);

    const { error } = await supabase
      .from("project_likes")
      .insert({ project_id: projectId, device_id: deviceId });

    if (!error) {
      await supabase.rpc("increment_like_count", { project_id: projectId });
      setLikedProjects(new Set([...likedProjects, projectId]));
      toast.success("Project liked!");
      fetchProjects();
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, combining innovative design with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-accent overflow-hidden">
                {project.preview_url && (
                  <img
                    src={project.preview_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                
                {project.is_featured && (
                  <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground border-0">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                      <Badge key={tech} variant="outline" className="border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(project.id)}
                      className="hover:text-primary transition-colors"
                    >
                      <Heart
                        className={`h-5 w-5 mr-1 ${
                          likedProjects.has(project.id) ? "fill-primary text-primary" : ""
                        }`}
                      />
                      {project.like_count || 0}
                    </Button>
                    
                    {project.download_enabled && (
                      <span className="flex items-center text-sm text-muted-foreground">
                        <Download className="h-4 w-4 mr-1" />
                        {project.download_count || 0}
                      </span>
                    )}
                  </div>

                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-primary/10 hover:text-primary"
                  >
                    View
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
