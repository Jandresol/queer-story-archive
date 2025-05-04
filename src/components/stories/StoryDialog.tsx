import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StoryProps } from "./StoryCard";
import { X } from "lucide-react";

interface StoryDialogProps {
  story: StoryProps | null;
  isOpen: boolean;
  onClose: () => void;
}

const StoryDialog = ({ story, isOpen, onClose }: StoryDialogProps) => {
  if (!story) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto [&>button]:hidden">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">{story.name}'s Story</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>
          {story.year && (
            <DialogDescription className="text-queer-gray">
              {story.year}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="mt-6">
          <div className="prose prose-lg max-w-none">
          <div className="text-lg font-medium mb-4 text-queer-purpleDark">{story.excerpt}</div>
            <h2 className="text-2xl font-bold text-queer-purpleDark mb-2">Personal Journey & Intersectionality</h2>
            <div className="whitespace-pre-line text-queer-gray mb-4">{story.identity}</div>
            <h2 className="text-2xl font-bold text-queer-purpleDark mb-2">Navigating Harvard</h2>
            <div className="whitespace-pre-line text-queer-gray">{story.harvard}</div>
          </div>

          {story.tags && story.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {story.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-queer-softPurple text-queer-purple text-s rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoryDialog;