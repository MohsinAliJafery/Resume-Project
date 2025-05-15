"use client";

import { useState } from "react";
import { jobs as initialJobs } from "@/data/jobs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddJobForm } from "@/components/AddJobForm";
import { Badge } from "@/components/ui/badge";

export default function JobsPage() {
  const [jobList, setJobList] = useState(initialJobs);

  const handleAddJob = (newJob: (typeof initialJobs)[number]) => {
    setJobList((prev) => [newJob, ...prev]);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jobs</h1>
        <AddJobForm onAdd={handleAddJob} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{job.location}</p>
              <p className="text-xs text-gray-400">Posted on: {job.postedDate}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
