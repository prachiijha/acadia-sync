import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, BookOpen, Target, Calendar, TrendingUp, QrCode, MapPin } from "lucide-react";

const StudentDashboard = () => {
  const attendanceData = {
    percentage: 92,
    present: 23,
    total: 25,
    status: "Present"
  };

  const todaySchedule = [
    { time: "09:00", subject: "Mathematics", room: "A-101", status: "completed" },
    { time: "10:30", subject: "Physics", room: "B-205", status: "completed" },
    { time: "12:00", subject: "Free Period", room: "-", status: "current" },
    { time: "13:30", subject: "Chemistry", room: "C-301", status: "upcoming" },
    { time: "15:00", subject: "English", room: "A-203", status: "upcoming" }
  ];

  const personalizedTasks = [
    { title: "Complete Math Practice Quiz", type: "Academic", duration: "15 min", priority: "high" },
    { title: "Read Chapter 5 - Organic Chemistry", type: "Study", duration: "20 min", priority: "medium" },
    { title: "Career Exploration: Software Engineering", type: "Career", duration: "10 min", priority: "low" }
  ];

  const achievements = [
    { title: "Perfect Week", description: "100% attendance this week", icon: "🏆" },
    { title: "Study Streak", description: "7 days of consistent learning", icon: "🔥" },
    { title: "Quiz Master", description: "Completed 5 practice quizzes", icon: "🎯" }
  ];

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Good Morning, Alex! 👋</h1>
          <p className="text-muted-foreground">Ready to make today productive? Here's your personalized dashboard.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-success text-white border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{attendanceData.percentage}%</CardTitle>
              <CardDescription className="text-white/80">Attendance Rate</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-foreground">3</CardTitle>
              <CardDescription>Classes Today</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-accent text-white border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">45</CardTitle>
              <CardDescription className="text-white/80">Free Minutes</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-primary text-primary-foreground border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">7</CardTitle>
              <CardDescription className="text-primary-foreground/80">Tasks Completed</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Status & Quick Actions */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-secondary" />
                      Current Status
                    </CardTitle>
                    <CardDescription>Free Period - Library (Room 205)</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button className="flex-1" size="sm">
                    <QrCode className="mr-2 h-4 w-4" />
                    Scan QR Code
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    <Clock className="mr-2 h-4 w-4" />
                    Check Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Today's Schedule
                </CardTitle>
                <CardDescription>Tuesday, March 12, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaySchedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                      <div className="text-sm font-medium text-muted-foreground min-w-[60px]">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{item.subject}</div>
                        {item.room !== "-" && (
                          <div className="text-sm text-muted-foreground">Room {item.room}</div>
                        )}
                      </div>
                      <div>
                        {item.status === "completed" && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                        {item.status === "current" && (
                          <Badge variant="secondary">Current</Badge>
                        )}
                        {item.status === "upcoming" && (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personalized Tasks */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Recommended for Free Time
                </CardTitle>
                <CardDescription>AI-curated tasks based on your learning goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalizedTasks.map((task, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground">{task.title}</h4>
                        <Badge 
                          variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{task.type}</span>
                        <span>•</span>
                        <span>{task.duration}</span>
                      </div>
                      <Button size="sm" className="mt-3">
                        Start Task
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Attendance Progress */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle>Attendance Progress</CardTitle>
                <CardDescription>This month's performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall</span>
                    <span className="font-medium">{attendanceData.percentage}%</span>
                  </div>
                  <Progress value={attendanceData.percentage} />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{attendanceData.present}</div>
                    <div className="text-sm text-muted-foreground">Present</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-destructive">{attendanceData.total - attendanceData.present}</div>
                    <div className="text-sm text-muted-foreground">Absent</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Full Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="mr-2 h-4 w-4" />
                  Set Learning Goals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Progress Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;