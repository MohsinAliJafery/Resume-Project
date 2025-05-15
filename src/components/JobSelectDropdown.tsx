// components/JobSelectDropdown.tsx
"use client";

import { jobs } from "@/data/jobs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export function JobSelectDropdown({ value, onChange }: Props) {
  return (
    <div className="space-y-2">
      <Label>Select a Job</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a job" />
        </SelectTrigger>
        <SelectContent>
          {jobs.map((job) => (
            <SelectItem key={job.id} value={job.id}>
              {job.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
