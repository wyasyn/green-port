import { FeaturedBlog, FeaturedProjects, Hero, Projects, SectionTitle, SeeMore, Services, Testimonials } from "@/components";


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
        <FeaturedProjects />
        <SeeMore link="/projects" />
      </section>
      <section>
        <SectionTitle title="Testimonials" description="What Clients Say About Me" />
        <Testimonials />
      </section>
      <section>
        <SectionTitle title="My Insights" description="Featured Blog" />
        <FeaturedBlog />
        <SeeMore link="/blog" />
      </section>
    </main>
  )
}
