import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, User, Users, BookOpen, Settings, Menu, X } from "lucide-react";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "landing", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "student", label: "Student", icon: <User className="h-4 w-4" /> },
    { id: "teacher", label: "Teacher", icon: <Users className="h-4 w-4" /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <Card className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-card border-0 shadow-elevated hidden md:block">
        <div className="flex items-center gap-2 p-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={currentView === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange(item.id)}
              className={`flex items-center gap-2 ${
                currentView === item.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "hover:bg-muted/50"
              }`}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>
      </Card>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMobileMenu}
          className="fixed top-4 right-4 z-50 bg-gradient-card border-0 shadow-elevated"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40" onClick={toggleMobileMenu} />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <Card className="fixed top-16 right-4 z-50 bg-gradient-card border-0 shadow-elevated min-w-[200px]">
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full justify-start flex items-center gap-2 ${
                    currentView === item.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted/50"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </div>
          </Card>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <Card className="fixed bottom-4 left-4 right-4 z-50 bg-gradient-card border-0 shadow-elevated md:hidden">
        <div className="flex items-center justify-around p-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={currentView === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange(item.id)}
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
                currentView === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted/50"
              }`}
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </Card>
    </>
  );
};

export default Navigation;