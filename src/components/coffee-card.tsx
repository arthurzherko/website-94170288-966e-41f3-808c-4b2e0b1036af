import { Coffee } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CoffeeCardProps {
  title: string;
  description: string;
  rating?: number;
  onTry?: () => void;
  className?: string;
}

export function CoffeeCard({
  title,
  description,
  rating,
  onTry,
  className,
}: CoffeeCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Coffee className="size-6 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        {rating && (
          <CardDescription>Rating: {rating} / 5</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <Typography.P>{description}</Typography.P>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onTry}
          className="w-full"
          variant="secondary"
        >
          Try This Blend
        </Button>
      </CardFooter>
    </Card>
  );
}