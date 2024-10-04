import React from 'react'


const Home = () => {
  return (
    <section>
        <navbar />
     <div className="flex flex-col items-center gap-4">
        <div className="grid scroll-m-20 mt-64 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">
          Oratoris
          <br /> We Bring Your skills to Life!
        </div>
        <p className="max-w-[700px] w-full text-lg text-muted-foreground text-center">
          {/* {siteConfig.description} */}
        </p>
      </div>
   </section>
  )
}

export default Home