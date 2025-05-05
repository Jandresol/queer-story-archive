
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title text-center mb-12 gradient-text">About The Project</h1>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg md:text-xl text-center mb-8">
            The Queer Archives Project documents and celebrates the lived experiences of 
            Queer People of Color at Harvard, creating a living historical record that affirms 
            identity, preserves our stories, and builds community across generations.
          </p>

          <div className="mb-12 aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-r from-queer-softPurple via-white to-queer-softPink flex items-center justify-center">
            <div className="text-2xl font-display gradient-text">Archive Image</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            The Queer Archives Project began as an initiative to document the often-overlooked 
            intersectional experiences of Queer People of Color at Harvard. Recognizing the lack of 
            historical documentation that specifically addresses the unique challenges, triumphs, 
            and lived realities of QPOC students, we set out to create a platform that would preserve 
            these important narratives.
          </p>
          <p className="mb-4">
            Initially conceived as a print zine, the project evolved into a digital archive to better 
            serve our community and reach a wider audience. While we started with a small collection 
            of stories, our vision is to grow this archive into a comprehensive resource that spans 
            generations of QPOC experiences at Harvard.
          </p>
          <p>
            The digital format allows us to combine the creative, personal energy of a zine with the 
            accessibility and scalability of a website, creating a living document that can continue 
            to grow and evolve alongside our community.
          </p>

          <div className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-queer-softPurple/50 border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Project Goals</h3>
                  <ul className="space-y-2">
                    <li>Affirm the identities and experiences of Queer POC at Harvard</li>
                    <li>Document our history for current and future generations</li>
                    <li>Create community through shared stories and experiences</li>
                    <li>Challenge erasure and invisibility in historical narratives</li>
                    <li>Provide a platform for creative expression and solidarity</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-queer-softPink/50 border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Our Values</h3>
                  <ul className="space-y-2">
                    <li>Intersectionality and inclusivity</li>
                    <li>Community care and support</li>
                    <li>Historical preservation and documentation</li>
                    <li>Creative expression and authenticity</li>
                    <li>Respect for privacy and individual choice</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking Forward</h2>
          <p className="mb-4">
            As the Queer Archives Project grows, we aim to expand our collection of stories, 
            incorporate different media formats, and develop categorization systems that make 
            it easier to explore the archive by themes, identities, time periods, and more.
          </p>
          <p>
            We invite all Queer POC members of the Harvard community—past and present—to 
            consider contributing their stories to this growing archive. Whether through written 
            narratives, visual art, audio recordings, or other creative formats, your experiences 
            are a valuable part of our collective history.
          </p>
        </div>

        {/* Team Section */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team Member 1 */}
            <div className="story-card flex flex-col items-center p-6">
              <div className="w-32 h-32 rounded-full bg-gradient-rainbow flex items-center justify-center mb-4">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQF8ph3z_xmqag/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1681505900141?e=2147483647&v=beta&t=TleJ4Ky6A33K77R2R6y4UjfZLaPFHQpvRom8BEtTVBA" alt="Jasmine Andresol" className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Jasmine Andresol</h3>
              <p className="text-queer-gray text-center">Website Designer</p>
            </div>

            {/* Team Member 2 */}
            <div className="story-card flex flex-col items-center p-6">
              <div className="w-32 h-32 rounded-full bg-gradient-rainbow flex items-center justify-center mb-4">
                <span className="text-white text-2xl">HJ</span>
              </div>
              <h3 className="text-xl font-bold">Helena Jackson</h3>
              <p className="text-queer-gray text-center">Project Researcher</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Involved</h2>
          <p className="mb-6">
            Interested in contributing your story or helping with the project? 
            Reach out to us at <a href="mailto:queerarchives@harvard.edu" className="text-queer-purple font-semibold">queerarchives@harvard.edu</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
