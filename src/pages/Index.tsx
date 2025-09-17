import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import StudentDashboard from "@/components/StudentDashboard";
import TeacherDashboard from "@/components/TeacherDashboard";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [currentView, setCurrentView] = useState("landing");

  const renderCurrentView = () => {
    switch (currentView) {
      case "student":
        return <StudentDashboard />;
      case "teacher":
        return <TeacherDashboard />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      {renderCurrentView()}
    </div>
  );
};

export default Index;
