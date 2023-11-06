import { PageTitle } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Me'
}
export default function AboutPage() {
  return (
    <main>
        <PageTitle description="My Information" name="About Me" />
        <section>
            About page
        </section>
    </main>
  )
}
