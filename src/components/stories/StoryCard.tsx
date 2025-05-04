
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

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
}

const StoryCard = ({ story }: StoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        
        <div className={`mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[500px]" : "max-h-0"}`}>
          <p className="text-queer-purpleDark whitespace-pre-line">{story.content}</p>
          
          {story.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {story.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-queer-softPurple text-queer-purple text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <Button
          variant="ghost"
          className="w-full mt-4 text-queer-purple hover:bg-queer-softPurple flex items-center justify-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" /> Read More
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
