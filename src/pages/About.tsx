
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

          <div className="w-full mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://www.harvard.edu/wp-content/uploads/2021/06/052521_Lehman_Lights_3221edit.png?w=1024&h=512&crop=1" 
              alt="Marsha P. Johnson and Sylvia Rivera at the Stonewall" 
              className="w-full h-full object-contain object-center"
              />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            The Queer Archives Project began as an initiative to document the often-overlooked 
            intersectional experiences of Queer People of Color at Harvard. Recognizing the lack of 
            historical documentation that specifically addresses the unique challenges, triumphs, 
            and lived realities of POC students, we set out to create a platform that would preserve 
            these important narratives.
          </p>
          <p className="mb-4">
            Our project is rooted in the belief that every story matters. By collecting and sharing 
            personal narratives, we aim to affirm the identities of Queer POC at Harvard, challenge 
            erasure and invisibility in historical narratives, and create a sense of community through 
            shared experiences.
          </p>
          <p className="mb-4">
          This project is a collaborative effort that brings together members of the Queer Harvard community. 
          Initially imagined as a physical publication, it grew into a digital platform to broaden our reach and 
          offer a more accessible, interactive experience. We invited Queer POC at Harvard to share their stories 
          through written responses, reaching out via email, social media, and in-person conversations. 
          The website merges the personalization of a written publication with the scalability of a 
          digital platform, creating a living document that continues to evolve alongside our community.
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
          <p>
            We invite all Queer POC members of the Harvard community, past and present, to 
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
              <img src="https://media.licdn.com/dms/image/v2/D4E03AQFi-3wMCUoVaw/profile-displayphoto-shrink_800_800/B4EZYLtsthGYAc-/0/1743953252239?e=1752105600&v=beta&t=9WLIMP-HTEspDd104gTTz-bCedSLr0fXSbH2geswRxk" alt="Helena Jackson" className="rounded-full w-full h-full object-cover" />
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
