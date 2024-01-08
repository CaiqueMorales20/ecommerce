import Pitch from './(components)/Pitch'
import Showcase from './(components)/Showcase'
import Ads from './(home)/Ads'
import Hero from './(home)/Hero'

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
