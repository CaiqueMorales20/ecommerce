import Image from 'next/image'

// Functional Component
export default function Footer() {
  // Rendering
  return (
    <div className="bg-dark pb-[48px] pt-[75px]">
      <div className="container flex ">
        <div className="max-w-[540px]">
          <Image
            className="mb-[36px]"
            src="/logo.svg"
            alt="Logo"
            width={143}
            height={25}
          />
          <p className="mb-[56px] text-body text-white opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - were open 7 days a week.
          </p>
          <p className="mb-[56px] text-body text-white opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}
