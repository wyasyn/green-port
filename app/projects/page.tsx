import { PageTitle, Projects } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Projects - My Latest Works'
}
export default function ProjectsPage() {
  return (
    <main>
        <PageTitle description="My Latest Work" name="Projects" />
        <section>
            <Projects />
        </section>
    </main>
  )
}
