import { Hero, SectionTitle, Services } from "@/components";


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
    </main>
  )
}
