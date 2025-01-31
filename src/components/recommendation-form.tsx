import { useState } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";

interface RecommendationFormProps {
  onSubmit: (preferences: {
    roastLevel: string;
    brewMethod: string;
    flavor: string;
  }) => void;
  className?: string;
}

export function RecommendationForm({
  onSubmit,
  className,
}: RecommendationFormProps) {
  const [roastLevel, setRoastLevel] = useState("");
  const [brewMethod, setBrewMethod] = useState("");
  const [flavor, setFlavor] = useState("");

  const handleSubmit = () => {
    onSubmit({ roastLevel, brewMethod, flavor });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bot className="size-6 text-primary" />
          <CardTitle>Coffee Preferences</CardTitle>
        </div>
        <Typography.P className="text-muted-foreground">
          Let AI find your perfect coffee match
        </Typography.P>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Select value={roastLevel} onValueChange={setRoastLevel}>
          <SelectTrigger>
            <SelectValue placeholder="Select roast level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light Roast</SelectItem>
            <SelectItem value="medium">Medium Roast</SelectItem>
            <SelectItem value="dark">Dark Roast</SelectItem>
          </SelectContent>
        </Select>

        <Select value={brewMethod} onValueChange={setBrewMethod}>
          <SelectTrigger>
            <SelectValue placeholder="Select brew method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="drip">Drip Coffee</SelectItem>
            <SelectItem value="espresso">Espresso</SelectItem>
            <SelectItem value="french">French Press</SelectItem>
            <SelectItem value="pourover">Pour Over</SelectItem>
          </SelectContent>
        </Select>

        <Select value={flavor} onValueChange={setFlavor}>
          <SelectTrigger>
            <SelectValue placeholder="Select flavor profile" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fruity">Fruity</SelectItem>
            <SelectItem value="nutty">Nutty</SelectItem>
            <SelectItem value="chocolate">Chocolate</SelectItem>
            <SelectItem value="floral">Floral</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={handleSubmit}
          className="mt-2"
          disabled={!roastLevel || !brewMethod || !flavor}
        >
          Get Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}