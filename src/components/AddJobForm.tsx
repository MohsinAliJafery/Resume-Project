"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type AddJobFormProps = {
  onAdd: (job: {
    id: string;
    title: string;
    location: string;
    postedDate: string;
    description: string;
    skills: string[];
  }) => void;
};

export function AddJobForm({ onAdd }: AddJobFormProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newJob = {
      id: `job-${Date.now()}`,
      title,
      location,
      description,
      postedDate: new Date().toISOString().split("T")[0],
      skills: skills.split(",").map((skill) => skill.trim()),
    };

    onAdd(newJob);
    setOpen(false);
    setTitle("");
    setLocation("");
    setDescription("");
    setSkills("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Job Description</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Job</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Job Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="skills">Skills (comma separated)</Label>
            <Input
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g. React, TypeScript, Node.js"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Save Job
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
