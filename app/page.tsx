import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { Spacing } from '@/components/Spacing'
import { States } from '@/components/States'

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <Hero />

      <Spacing size="md" />

      <States />

      <Spacing size='md' />

      <Skills />

    </main>
  )
}
