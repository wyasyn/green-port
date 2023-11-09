import { ContactLinks, Map, PageTitle } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Me'
}
export default function AboutPage() {
  return (
    <main>
        <PageTitle description="Let's Connect" name="Contact Me" />
        <section>
            <ContactLinks />
        </section>
        <section>
          <Map />
        </section>
    </main>
  )
}
