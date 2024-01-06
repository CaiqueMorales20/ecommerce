// Functional Component
export default function Description() {
  // Rendering
  return (
    <div className="grid grid-cols-description gap-[125px] md:pb-[160px]">
      <div>
        <h2 className="text-h3 uppercase md:mb-[32px]">Features</h2>
        <p className="mb-[30px] text-body opacity-50">
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you are taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you
          will never miss a beat.
        </p>
        <p className="text-body opacity-50">
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>
      <div>
        <h2 className="text-h3 uppercase md:mb-[32px]">In the box</h2>
        <ul className="flex flex-col gap-[8px]">
          <li className="flex gap-[21px]">
            <span className="text-body text-primary">1x</span>
            <span className="text-body opacity-50">Headphone Unit</span>
          </li>
          <li className="flex gap-[21px]">
            <span className="text-body text-primary">2x</span>
            <span className="text-body opacity-50">Replacement Earcups</span>
          </li>
          <li className="flex gap-[21px]">
            <span className="text-body text-primary">1x</span>
            <span className="text-body opacity-50">User manual</span>
          </li>
          <li className="flex gap-[21px]">
            <span className="text-body text-primary">1x</span>
            <span className="text-body opacity-50">3.5mm 5m Audio Cable</span>
          </li>
          <li className="flex gap-[21px]">
            <span className="text-body text-primary">1x</span>
            <span className="text-body opacity-50">Travel Bag</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
