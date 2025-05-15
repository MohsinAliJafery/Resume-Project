// components/JobCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JobCardProps {
  title: string;
  location: string;
  postedDate: string;
}

export function JobCard({ title, location, postedDate }: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Posted:</strong> {postedDate}</p>
      </CardContent>
    </Card>
  );
}
