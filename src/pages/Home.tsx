
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-queer-softPurple via-queer-softPink to-queer-softBlue opacity-70"
          aria-hidden="true"
        ></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-queer-purple/20 blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-queer-magenta/20 blur-3xl" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in gradient-text">
              Queer Archives Project
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-queer-purpleDark animate-fade-in">
              Documenting and celebrating the lived experiences of Queer People of Color at Harvard
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <Button 
                asChild
                className="bg-queer-purple hover:bg-queer-purpleDark text-white px-8 py-6 text-lg"
              >
                <Link to="/stories">
                  Explore Stories
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-queer-purple text-queer-purple hover:bg-queer-softPurple px-8 py-6 text-lg"
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Mission</h2>
          <div className="gradient-border">
            <div className="gradient-border-content">
              <p className="text-lg md:text-xl text-center">
                The Queer Archives Project documents and celebrates the intersectional experiences of 
                Queer People of Color at Harvard, creating a living historical record that affirms identity, 
                preserves our stories, and builds community across generations.
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="story-card p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-queer-softPurple flex items-center justify-center mb-4">
                <span className="text-3xl">🏳️‍🌈</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Affirm Identity</h3>
              <p className="text-queer-gray">Creating spaces where QPOC experiences are recognized, valued, and celebrated.</p>
            </div>
            
            <div className="story-card p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-queer-softPink flex items-center justify-center mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Document History</h3>
              <p className="text-queer-gray">Preserving our stories for future generations of Queer People of Color.</p>
            </div>
            
            <div className="story-card p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-queer-softBlue flex items-center justify-center mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Build Community</h3>
              <p className="text-queer-gray">Fostering connections and solidarity through shared experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story Preview */}
      <section className="py-16 bg-gradient-to-r from-queer-softPurple to-queer-softPink">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Featured Story</h2>
          <div className="max-w-2xl mx-auto story-card">
            <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
              <div className="w-full h-full bg-gradient-rainbow flex items-center justify-center">
                <span className="text-white text-lg">Featured Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Finding Home in Multiple Identities</h3>
              <p className="text-queer-gray mb-4">A journey of navigating intersectional identities and building community at Harvard.</p>
              <Button 
                asChild
                variant="outline" 
                className="w-full justify-center border-queer-purple text-queer-purple hover:bg-queer-softPurple"
              >
                <Link to="/stories" className="flex items-center gap-2">
                  Read Full Story <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Join Our Archive</h2>
          <p className="text-lg mb-8">
            Help us build a comprehensive historical record of Queer POC experiences at Harvard.
            Your story matters, and we'd love to include it in our growing archive.
          </p>
          <Button
            className="bg-queer-purple hover:bg-queer-purpleDark text-white px-8 py-6 text-lg"
            onClick={() => window.open('https://docs.google.com/forms/d/1wwmV7P0s2AM4RvK7wWNYHY8psUxARF4OIPdAcVtzXlM/viewform', '_blank')} 
          >
            Share Your Story
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
