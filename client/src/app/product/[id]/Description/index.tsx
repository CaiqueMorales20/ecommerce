type IDescription = {
  feature1?: string
  feature2?: string
  box?: { name?: string | undefined }[]
}

// Functional Component
export default function Description({ feature1, feature2, box }: IDescription) {
  // Rendering
  return (
    <div className="grid gap-[88px] pb-[88px] md:grid-cols-description md:gap-[125px] md:pb-[160px] ">
      {feature1 || feature2 ? (
        <div>
          <h2 className="pb-[24px] text-h6 uppercase md:mb-[32px] md:text-h3">
            Features
          </h2>
          <p className="mb-[30px] text-body opacity-50">{feature1}</p>
          <p className="text-body opacity-50">{feature2}</p>
        </div>
      ) : (
        <></>
      )}
      {box?.length ? (
        <div>
          <h2 className="pb-[24px] text-h6 uppercase md:mb-[32px] md:text-h3">
            In the box
          </h2>
          <ul className="flex flex-col gap-[8px]">
            {box?.map((item, index) => {
              return (
                <li className="flex gap-[21px]" key={index}>
                  <span className="text-body text-primary">1x</span>
                  <span className="text-body opacity-50">{item.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
