import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Briefcase, UserCheck, Clock, ArrowUp, BarChart2, Upload } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  const stats = {
    jobs: 8,
    candidates: 27,
    matched: 15,
    pending: 4,
    matchRate: 72,
    recentActivities: [
      { action: "uploaded", count: 3, job: "Frontend Developer", time: "2 hours ago" },
      { action: "added", item: "job", title: "Backend Engineer - Remote", time: "5 hours ago" },
      { action: "matched", count: 4, job: "UI Designer", time: "1 day ago" },
    ],
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <div className="text-sm text-gray-500">Last updated: Today, {new Date().toLocaleTimeString()}</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.jobs}</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Candidates</CardTitle>
            <UserCheck className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.candidates}</div>
            <p className="text-xs text-muted-foreground">+8 from last week</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Successful Matches</CardTitle>
            <BarChart2 className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.matched}</div>
            <div className="flex items-center">
              <ArrowUp className="h-3 w-3 text-green-500" />
              <span className="text-xs text-green-500 ml-1">+12% match rate</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending CVs</CardTitle>
            <Clock className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
            <Progress value={stats.matchRate} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">{stats.matchRate}% match rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2 text-blue-500" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start pb-4 border-b last:border-b-0 last:pb-0">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    {activity.action === "uploaded" && <Upload className="h-4 w-4 text-blue-600" />}
                    {activity.action === "added" && <Briefcase className="h-4 w-4 text-blue-600" />}
                    {activity.action === "matched" && <UserCheck className="h-4 w-4 text-blue-600" />}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {activity.action === "uploaded" && `Uploaded ${activity.count} CVs for "${activity.job}"`}
                      {activity.action === "added" && `Added new ${activity.item}: "${activity.title}"`}
                      {activity.action === "matched" && `Matched ${activity.count} candidates for "${activity.job}"`}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Match Rate</span>
                  <span className="font-medium">{stats.matchRate}%</span>
                </div>
                <Progress value={stats.matchRate} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Active Jobs</span>
                  <span className="font-medium">5/8</span>
                </div>
                <Progress value={(5/8)*100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">CVs Processed</span>
                  <span className="font-medium">23/27</span>
                </div>
                <Progress value={(23/27)*100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}