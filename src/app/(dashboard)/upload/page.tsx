"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { JobSelectDropdown } from "@/components/JobSelectDropdown";
import { FileUploadDropzone } from "@/components/FileUploadDropzone";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UploadPage() {
  const [selectedJob, setSelectedJob] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [tabValue, setTabValue] = useState("selectJob");
  const router = useRouter();

  const handleSubmit = () => {
    if ((!selectedJob && tabValue === "selectJob") || 
        (tabValue === "manualEntry" && (!jobTitle || !jobDescription)) || 
        files.length === 0) {
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/matches");
    }, 5000);
  };

  const isSubmitDisabled = () => {
    if (files.length === 0) return true;
    if (tabValue === "selectJob" && !selectedJob) return true;
    if (tabValue === "manualEntry" && (!jobTitle || !jobDescription)) return true;
    return false;
  };

  return (
    <main className="p-6 relative min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Upload CVs</h2>

      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="selectJob">Select Existing Job</TabsTrigger>
          <TabsTrigger value="manualEntry">Enter Job Details</TabsTrigger>
        </TabsList>

        <TabsContent value="selectJob">
          <div className="space-y-6 mt-4">
            <JobSelectDropdown value={selectedJob} onChange={setSelectedJob} />
            <FileUploadDropzone onFilesSelected={setFiles} />
          </div>
        </TabsContent>

        <TabsContent value="manualEntry">
          <div className="space-y-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title*</Label>
              <Input
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Senior Frontend Developer"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobDescription">Job Description*</Label>
              <Textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste or write the job description here..."
                rows={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requiredSkills">Required Skills (Optional)</Label>
              <Input
                id="requiredSkills"
                value={requiredSkills}
                onChange={(e) => setRequiredSkills(e.target.value)}
                placeholder="e.g. React, TypeScript, Node.js (comma separated)"
              />
            </div>

            <FileUploadDropzone onFilesSelected={setFiles} />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-6">
        <Button
          disabled={isSubmitDisabled() || isProcessing}
          onClick={handleSubmit}
          className="w-60"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Run AI Matching"
          )}
        </Button>
      </div>

      {isProcessing && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
          <Loader2 className="h-8 w-8 animate-spin text-gray-600 mb-4" />
          <p className="text-lg font-medium text-gray-800">
            AI is finding the best matches...
          </p>
        </div>
      )}
    </main>
  );
}