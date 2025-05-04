
import { useState } from 'react';
import { stories } from '@/data/stories';
import StoryCard from '@/components/stories/StoryCard';
import StoryDialog from '@/components/stories/StoryDialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StoryProps } from '@/components/stories/StoryCard';

const Stories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState<StoryProps | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleReadMore = (story: StoryProps) => {
    setSelectedStory(story);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="page-container">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title text-center gradient-text">Our Stories</h1>
        
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          Explore the lived experiences of Queer People of Color at Harvard through 
          personal narratives that reflect our diverse, intersectional community.
        </p>

        {/* Carousel Section */}
        <div className="relative mt-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {stories.map((story) => (
                <div key={story.id} className="min-w-full px-4">
                  <div className="max-w-lg mx-auto">
                    <StoryCard 
                      story={story} 
                      onReadMore={handleReadMore} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevStory}
              className="rounded-full border-queer-purple text-queer-purple hover:bg-queer-softPurple"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-queer-purple' : 'bg-queer-softPurple'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextStory}
              className="rounded-full border-queer-purple text-queer-purple hover:bg-queer-softPurple"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Grid View Fallback */}
        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">All Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard 
                key={story.id} 
                story={story} 
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            We're continually adding to this living archive. If you're a current or former 
            Harvard student who identifies as both queer and a person of color, we'd love to include your story.
          </p>
          <Button 
            className="bg-queer-purple hover:bg-queer-purpleDark text-white px-8 py-6 text-lg"
          >
            Submit Your Story
          </Button>
        </div>
      </div>

      {/* Story Dialog */}
      <StoryDialog 
        story={selectedStory}
        isOpen={isDialogOpen}
        onClose={closeDialog}
      />
    </div>
  );
};

export default Stories;
