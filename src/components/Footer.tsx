import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} موسى. تم البناء بـ
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            وأحدث التقنيات
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              شروط الخدمة
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              تواصل معي
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
