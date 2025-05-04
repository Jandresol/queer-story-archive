
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface StoryProps {
  id: string;
  name: string;
  image: string;
  excerpt: string;
  content: string;
  year?: string;
  tags?: string[];
}

interface StoryCardProps {
  story: StoryProps;
  onReadMore: (story: StoryProps) => void;
}

const StoryCard = ({ story, onReadMore }: StoryCardProps) => {
  return (
    <Card className="story-card overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-queer-purple to-queer-magenta flex items-center justify-center text-white"
          aria-label={`Image for ${story.name}'s story`}
        >
          {story.name}'s Story
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{story.name}</h3>
          {story.year && <span className="text-sm text-queer-gray">{story.year}</span>}
        </div>
        
        <p className="mt-2 text-queer-gray">{story.excerpt}</p>
        
        <Button
          variant="ghost"
          className="w-full mt-4 text-queer-purple hover:bg-queer-softPurple flex items-center justify-center"
          onClick={() => onReadMore(story)}
        >
          <span>Read Full Story</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
