"use client";

import { useState } from "react";
import { candidates } from "@/data/candidates";
import { ArrowDown, ArrowUp, Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function CandidateMatchTable() {
  const [sortDesc, setSortDesc] = useState(true);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const sorted = [...candidates].sort((a, b) =>
    sortDesc ? b.matchScore - a.matchScore : a.matchScore - b.matchScore
  );

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => setSortDesc(!sortDesc)}
              >
                <div className="flex items-center">
                  Match Score
                  {sortDesc ? (
                    <ArrowDown className="ml-1 h-4 w-4" />
                  ) : (
                    <ArrowUp className="ml-1 h-4 w-4" />
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sorted.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {candidate.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {candidate.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {candidate.title}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{candidate.email}</div>
                  <div className="text-sm text-gray-500">{candidate.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Progress
                      value={candidate.matchScore}
                      className="h-2 w-20 mr-2"
                    />
                    <span className="text-sm font-medium">
                      {candidate.matchScore}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    variant={
                      candidate.matchScore > 85
                        ? "success"
                        : candidate.matchScore > 70
                        ? "default"
                        : "warning"
                    }
                  >
                    {candidate.matchScore > 85
                      ? "Top Match"
                      : candidate.matchScore > 70
                      ? "Strong"
                      : "Potential"}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCandidate(candidate)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCandidate && (
        <CandidateModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </div>
  );
}

function CandidateModal({
  candidate,
  onClose,
}: {
  candidate: Candidate;
  onClose: () => void;
}) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]">
        <DialogHeader>
          <DialogTitle>Candidate Profile</DialogTitle>
          <DialogDescription>
            {candidate.name} - {candidate.title}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">AI Summary</h3>
              <p className="mt-1 text-sm text-gray-900">{candidate.summary}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Key Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Experience</h3>
              <div className="mt-2 space-y-4">
                {candidate.experience.map((exp, i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4">
                    <h4 className="text-sm font-medium">{exp.role}</h4>
                    <p className="text-xs text-gray-500">
                      {exp.company} • {exp.duration}
                    </p>
                    <p className="text-xs mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Match Details
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Match Score:</span>
                  <span className="text-sm font-medium">
                    {candidate.matchScore}%
                  </span>
                </div>
                <Progress value={candidate.matchScore} className="h-2" />
                <div className="flex justify-between">
                  <span className="text-sm">Status:</span>
                  <Badge
                    variant={
                      candidate.matchScore > 85
                        ? "success"
                        : candidate.matchScore > 70
                        ? "default"
                        : "warning"
                    }
                  >
                    {candidate.matchScore > 85
                      ? "Top Match"
                      : candidate.matchScore > 70
                      ? "Strong"
                      : "Potential"}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Contact Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Email:</span>
                  <a
                    href={`mailto:${candidate.email}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {candidate.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Phone:</span>
                  <a
                    href={`tel:${candidate.phone}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {candidate.phone}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Location:</span>
                  <span className="text-sm">{candidate.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <a href={candidate.cvUrl} download target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </a>
              <Button variant="outline" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Full Profile
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}