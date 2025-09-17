import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Brain, Calendar, BarChart3, Smartphone, QrCode } from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Automated Attendance",
      description: "QR codes, Bluetooth, or facial recognition for seamless attendance tracking"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Smart Scheduling",
      description: "Integrated timetables with personalized daily routines and task management"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Personalization",
      description: "Intelligent recommendations for learning activities during free periods"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards for students, teachers, and administrators"
    }
  ];

  const benefits = [
    "Eliminate manual attendance tracking",
    "Maximize productive use of free time",
    "Real-time insights and analytics",
    "Seamless integration with existing systems",
    "Mobile-first design for students and teachers",
    "GDPR compliant data protection"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Smart Educational
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Attendance & Learning
            </span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Revolutionary system combining automated attendance tracking with AI-powered personalized learning recommendations for maximum educational productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Smartphone className="mr-2 h-5 w-5" />
              Student App
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10">
              <Users className="mr-2 h-5 w-5" />
              Teacher Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Educational Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From automated attendance to personalized learning paths, everything you need in one platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transform Your Educational Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive system eliminates administrative overhead while maximizing learning opportunities through intelligent automation and personalization.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-gradient-success text-white border-0 shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">95%</CardTitle>
                  <CardDescription className="text-white/80">
                    Attendance Accuracy
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-accent text-white border-0 shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">3x</CardTitle>
                  <CardDescription className="text-white/80">
                    Productivity Increase
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-primary text-primary-foreground border-0 shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">24/7</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Real-time Monitoring
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">100%</CardTitle>
                  <CardDescription>
                    Mobile Compatible
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Revolutionize Education?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of institutions already using our platform to enhance learning outcomes and streamline operations.
          </p>
          <Button size="lg" className="text-lg px-8 shadow-glow">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;