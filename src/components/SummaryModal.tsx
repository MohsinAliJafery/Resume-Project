"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SummaryModal({
  summary,
  cvUrl,
}: {
  summary: string;
  cvUrl: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        View Summary
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>AI Summary</DialogTitle>
          </DialogHeader>
          <p className="text-sm mb-4">{summary}</p>
          <a href={cvUrl} download>
            <Button>Download CV</Button>
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
}
