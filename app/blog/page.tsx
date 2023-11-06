import { PageTitle } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog'
}
export default function BlogPage() {
  return (
    <main>
        <PageTitle description="My Insights" name="Blog" />
        <section>
            Blog page
        </section>
    </main>
  )
}
