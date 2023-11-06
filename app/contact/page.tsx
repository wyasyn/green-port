import { PageTitle } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Me'
}
export default function AboutPage() {
  return (
    <main>
        <PageTitle description="Lets Talk" name="Contact Me" />
        <section>
            Contact page
        </section>
    </main>
  )
}
