import Image from "next/image"
import { Github, Globe, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Analytics } from "@vercel/analytics/react"

import Navbar from "./components/navbar"
import ExperienceCard from "./components/experience-card"
import ProjectCard from "./components/project-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background pt-14">
      <Analytics/>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative w-32 h-32">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-big-1MGpx7UWeWOlh4Eehn7G1it773W2zu.jpeg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Nipun Batra</h1>
              <h2 className="text-xl">AI/ML, FullStack, Mobile Dev</h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="prose dark:prose-invert max-w-none space-y-6">
            <p>
              Hi, I'm Nipun Batra, a passionate Software Engineer pursuing a B.S. in Computer Science at the University
              of California, Santa Cruz, graduating in June 2026. I specialize in AI/ML, full-stack, and mobile
              development, with hands-on experience in Python, LLMs, PyTorch/TensorFlow, Agentic Workflows, JavaScript,
              Kotlin/Swift/React Native, React/Angular, and C/C++.
            </p>
            <p>
              I've applied my AI expertise in high-impact hackathons, winning TreeHacks 2025 (AI Agent Excellence Award)
              and Cal Hacks with AI-driven projects that leverage agentic systems and machine learning to solve
              real-world challenges.
            </p>
            <p>
              Outside of coding, I am an Eagle Scout, enjoy the outdoors, and love to play any sport (soccer is the best
              though).
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="grid gap-6">
            <ExperienceCard
              company="Fidelity Investments"
              role="Software Engineer Intern"
              period="June 2024 - August 2024"
              logoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fidelity-logo-Tkbgk0xwNulwo7rNZaHsrXNbzjcYn6.jpeg"
              description={[
                "Enhanced core functionality for all enterprise iOS and Android mobile apps (35+ million users) by developing new Enterprise Profile pages with Kotlin/Jetpack Compose, GraphQL, and internal components, migrating from legacy and Java/XML code, improving user experience, code organization, and app performance",
                "Presented work and bug findings to 450+ stakeholders, high-ranking Mobile Engineer Leaders, and engineers",
                "Fostered collaboration and built strategic relationships by proactively networking with senior leaders across AI Innovation, Product Ownership, and Fund Asset Management departments",
              ]}
              tags={["Kotlin", "GraphQL", "Jetpack Compose", "Internal components", "Java", "XML"]}
            />

            <ExperienceCard
              company="Code Ninjas"
              role="Code Sensei (Instructor)"
              period="May 2022 - September 2023"
              logoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/code-ninjas-logo-6DR9VlqyrUye2dOo2Oxo5uVZDjTLwM.png"
              description={[
                "Directed Camps of 15+ kids, teaching numerous STEM, problem-solving, and critical-thinking skills",
                "Educated and guided kids of various ages in learning Javascript, Scratch, Unity, and coding principles",
              ]}
              tags={["Javascript", "Scratch", "Unity", "Roblox", "Coding Principles", "Leadership", "Teaching"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="AI Agent Health/Location Monitoring System"
              description="Built an AI agent to monitor the health and safety of first responders and military personnel in real time using biometric and geolocation data."
              link="https://devpost.com/software/jarvis-mhfy78"
              tags={["Python", "DAIN", "Nvidia Brev.dev", "TensorFlow", "Terra API", "Typescript"]}
            />

            <ProjectCard
              title="First Responder AI Application"
              description="Developed and designed an innovative emergency response system leveraging satellite communication and an agentic system."
              link="https://devpost.com/software/fred-bpszwn"
              tags={["Python", "Ollama", "Langchain", "Skylo", "Swift", "Gemini", "Raspberry Pi"]}
            />

            <ProjectCard
              title="SCMAC Mobile App"
              description="A mobile app developed with UCSC Blueprint to streamline operations for the Santa Cruz Mountain Art Center."
              link="https://www.mountainartcenter.org/"
              tags={["React Native", "TypeScript", "Firebase", "Figma", "Google Authentication"]}
            />

            <ProjectCard
              title="Images Organizer CLI"
              description="Developed a Python script that organizes all images on device by year and month (inspired by peers' troubles)"
              link="https://github.com/nipunbatra8/CS50-Project-Images-Organizer-"
              tags={["Python", "Scripting"]}
            />

            <ProjectCard
              title="Stock Portfolio Website"
              description="A stock portfolio tracker allowing users to manage and analyze stock investments with visualized performance. Utilized in my stock trading learning journey."
              link="https://github.com/nipunbatra8/stock-portfolio-website"
              tags={["Python", "MySQL", "Flask", "jQuery", "Finance"]}
            />

            <ProjectCard
              title="FoodMine Project"
              description="A personalized food recommendation system using TypeScript and MongoDB, offering suggestions based on user preferences."
              link="https://github.com/nipunbatra8/foodmine"
              tags={["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB"]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold">University of California, Santa Cruz</h3>
                  <p className="text-muted-foreground">B.S. Computer Science</p>
                  <p className="text-muted-foreground">Anticipated graduation date: June 2026</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Relevant Coursework:</p>
                  <p className="text-muted-foreground">
                    Data Structures & Algorithms, Discrete Math, Multivariable Calculus, Linear Algebra, Computer
                    Systems and C Programming, Engineering Principles of Electronics, Machine Learning
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Scholar's Honors Program</li>
                    <li>Dean's Honors List</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Other Experience Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Other Experience</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blueprint.jpg-paivBA1RtKVHtRhpfr2y47iTQtVAkM.jpeg"
                      alt="UCSC Blueprint logo"
                      fill
                      className="rounded-md object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">UCSC Blueprint</h3>
                    <p className="text-muted-foreground">VP of Technology (Previously Project Lead and Developer)</p>
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>
                        Led a team of 8 designers and developers to build the Mobile Application for Santa Cruz Mountain
                        Art Center non-profit for publishing in iOS App and Google Play stores
                      </li>
                      <li>
                        Built a Mobile App for the Native Animal Rescue non-profit with a team of 7 designers &
                        developers
                      </li>
                      <li>
                        Point person for the development of the homepage, authentication, back-end incorporation, and
                        sign-ups
                      </li>
                      <li>Tech Stack: React Native, Firebase, TypeScript, Google Authentication, Figma</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ahs-x97ipH5nSbKQvsF5uQhl7eUKkZvdFx.jpeg"
                      alt="Arcadia High School logo"
                      fill
                      className="rounded-md object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">App Development Team, Arcadia High School</h3>
                    <p className="text-muted-foreground">Developer</p>
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>
                        Facilitated, debugged, communicated new ideas, and managed the backend of the "Arcadia High
                        Mobile" app (in iOS and Google Play stores) using Firebase, Javascript, Swift, and Java
                      </li>
                      <li>Programmed the schedule editor interface for easy access to edit the app calendar</li>
                      <li>
                        Increased daily users by 30% and assisted in prototyping our Virtual NFC ID Card scanner in the
                        library
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Research, University of Buffalo, NY</h3>
                  <p className="text-muted-foreground">Student Researcher</p>
                  <p className="text-sm text-muted-foreground">May 2022 - August 2022</p>
                  <ul className="mt-4 list-disc pl-4 space-y-2">
                    <li>
                      Collaborated with Professor Tim Thomay at the University of Buffalo, NY, analyzing possibilities
                      of connections of IBM Quantum Computer and AI/Machine Learning in real-world applications
                    </li>
                    <li>Developing a medical AI mobile application using my research of quantum machine learning</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/nipunbatra8" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://nipunbatra8.github.io/" target="_blank" rel="noopener noreferrer">
                <Globe className="h-6 w-6" />
                <span className="sr-only">Website</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:nipunbatra8@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/nipun-batra-/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

