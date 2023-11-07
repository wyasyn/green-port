import { AboutSec, PageTitle, SectionTitle, Services, Skills } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Me'
}
export default function AboutPage() {
  return (
    <main>
        <PageTitle description="Who I Am" name="About Me" />
        <section>
          <AboutSec />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <SectionTitle title="Services" description="What I Do" />
          <Services />
        </section>
    </main>
  )
}
