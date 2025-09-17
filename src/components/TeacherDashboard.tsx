import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, UserCheck, UserX, Clock, BarChart3, AlertTriangle, Calendar, TrendingUp } from "lucide-react";

const TeacherDashboard = () => {
  const classStats = {
    totalStudents: 32,
    present: 28,
    absent: 4,
    attendanceRate: 87.5
  };

  const todayClasses = [
    { time: "09:00", subject: "Mathematics - Grade 10A", room: "A-101", students: 32, present: 30, status: "completed" },
    { time: "10:30", subject: "Advanced Math - Grade 11B", room: "A-101", students: 28, present: 25, status: "completed" },
    { time: "13:30", subject: "Mathematics - Grade 10B", room: "A-101", students: 35, present: 0, status: "upcoming" }
  ];

  const absentees = [
    { name: "Sarah Johnson", class: "10A", reason: "Sick Leave", duration: "2 days" },
    { name: "Mike Chen", class: "11B", reason: "Family Emergency", duration: "1 day" },
    { name: "Emma Davis", class: "10A", reason: "Medical Appointment", duration: "Half day" },
    { name: "John Smith", class: "11B", reason: "Unknown", duration: "1 day" }
  ];

  const weeklyTrends = [
    { day: "Mon", attendance: 92 },
    { day: "Tue", attendance: 88 },
    { day: "Wed", attendance: 90 },
    { day: "Thu", attendance: 85 },
    { day: "Fri", attendance: 94 }
  ];

  const alerts = [
    { type: "warning", message: "John Smith has been absent for 3 consecutive days", class: "11B" },
    { type: "info", message: "Grade 10A has achieved 95% attendance this week", class: "10A" },
    { type: "alert", message: "Unusual absence pattern detected in Grade 11B", class: "11B" }
  ];

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Dr. Smith! 👨‍🏫</h1>
          <p className="text-muted-foreground">Here's your classroom overview for today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-success text-white border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{classStats.present}</CardTitle>
              <CardDescription className="text-white/80">Students Present</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-destructive">{classStats.absent}</CardTitle>
              <CardDescription>Students Absent</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-primary text-primary-foreground border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{classStats.attendanceRate}%</CardTitle>
              <CardDescription className="text-primary-foreground/80">Attendance Rate</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-accent text-white border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">3</CardTitle>
              <CardDescription className="text-white/80">Classes Today</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Classes */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Today's Classes
                </CardTitle>
                <CardDescription>Tuesday, March 12, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayClasses.map((classItem, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">{classItem.subject}</h4>
                          <div className="text-sm text-muted-foreground">
                            {classItem.time} • Room {classItem.room}
                          </div>
                        </div>
                        <Badge 
                          variant={classItem.status === "completed" ? "secondary" : "outline"}
                        >
                          {classItem.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{classItem.students} enrolled</span>
                        </div>
                        
                        {classItem.status === "completed" && (
                          <>
                            <div className="flex items-center gap-2">
                              <UserCheck className="h-4 w-4 text-secondary" />
                              <span className="text-sm text-secondary">{classItem.present} present</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <UserX className="h-4 w-4 text-destructive" />
                              <span className="text-sm text-destructive">{classItem.students - classItem.present} absent</span>
                            </div>
                          </>
                        )}
                        
                        {classItem.status === "upcoming" && (
                          <Button size="sm" variant="outline">
                            <Clock className="mr-2 h-4 w-4" />
                            Start Class
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Absentees List */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserX className="h-5 w-5 text-destructive" />
                  Today's Absentees
                </CardTitle>
                <CardDescription>Students who are absent today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {absentees.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{student.name}</div>
                        <div className="text-sm text-muted-foreground">Class {student.class}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{student.reason}</div>
                        <div className="text-xs text-muted-foreground">{student.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alerts & Notifications */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  Alerts & Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <AlertTriangle className={`h-4 w-4 mt-0.5 ${
                        alert.type === "warning" ? "text-accent" : 
                        alert.type === "info" ? "text-secondary" : "text-destructive"
                      }`} />
                      <div className="flex-1">
                        <div className="text-sm text-foreground">{alert.message}</div>
                        <div className="text-xs text-muted-foreground mt-1">Class {alert.class}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Weekly Attendance Trend */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  Weekly Trend
                </CardTitle>
                <CardDescription>Attendance this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyTrends.map((day, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{day.day}</span>
                        <span className="font-medium">{day.attendance}%</span>
                      </div>
                      <Progress value={day.attendance} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Class Performance */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle>Class Performance</CardTitle>
                <CardDescription>Overall statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-secondary/10">
                    <div className="text-2xl font-bold text-secondary">10A</div>
                    <div className="text-sm text-muted-foreground">Best Class</div>
                    <div className="text-xs text-secondary">95% avg</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-accent/10">
                    <div className="text-2xl font-bold text-accent">11B</div>
                    <div className="text-sm text-muted-foreground">Needs Attention</div>
                    <div className="text-xs text-accent">82% avg</div>
                  </div>
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
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Classes
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Full Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Contact Parents
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;