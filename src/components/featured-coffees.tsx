import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import { CoffeeCard } from "@/components/coffee-card";

interface Coffee {
  id: string;
  title: string;
  description: string;
  rating: number;
}

interface FeaturedCoffeesProps {
  coffees: Coffee[];
  className?: string;
}

export function FeaturedCoffees({ coffees, className }: FeaturedCoffeesProps) {
  return (
    <div className={className}>
      <div className="mb-6">
        <Typography.H2>Featured Coffees</Typography.H2>
        <Typography.P className="text-muted-foreground">
          Discover our handpicked selection of exceptional coffee blends
        </Typography.P>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {coffees.map((coffee) => (
            <CarouselItem
              key={coffee.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <CoffeeCard
                title={coffee.title}
                description={coffee.description}
                rating={coffee.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0">
          <ChevronLeft className="size-4" />
        </CarouselPrevious>
        <CarouselNext className="right-0">
          <ChevronRight className="size-4" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}