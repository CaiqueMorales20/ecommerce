import Pitch from '@/components/Pitch'
import Ads from './(home)/Ads'
import Hero from './(home)/Hero'
import Showcase from '@/components/Showcase'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container">
        <Showcase />
        <Ads />
        <Pitch />
      </div>
    </main>
  )
}
