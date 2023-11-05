import { Hero, Projects, SectionTitle, Services, Testimonials } from "@/components";


export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <SectionTitle title="Services" description="What I Do" />
        <Services />
      </section>
      <section>
        <SectionTitle title="Projects" description="Selected Work" />
        <Projects />
      </section>
      <section>
      <SectionTitle title="Testimonials" description="What Clients Say About Me" />
        <Testimonials />
      </section>
    </main>
  )
}
