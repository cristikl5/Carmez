const Moments = () => {
  return (
    <section className="py-20">
      <h2 className="text-[32px] text-center font-barlow font-medium text-3xl md:text-4xl lg:text-5xl text-dark">
        Momente
      </h2>
      <div className="mt-11 grid sm:grid-cols-2 gap-20 ">
        <div className="flex items-center justify-between h-full">
          <ul className="flex flex-col items-baseline justify-between h-full text-sm font-bold list-disc text-gray-500">
            <li>NOW</li>
            <li>2014</li>
            <li>2008</li>
            <li>2004</li>
            <li>2000</li>
            <li>1999</li>
            <li>1991</li>
            <li>1988</li>
            <li>1970-1985</li>
            <li>1964</li>
            <li>1955</li>
            <li>1947</li>
            <li className="text-black">1941-1944</li>
            <li>1908</li>
            <li>1904</li>
          </ul>
          <div className="flex flex-col font-bold  items-end">
            <span className="text-8xl  font-barlow text-gray-500">1947</span>
            <span className="text-8xl  font-barlow text-primary">
              1941-1944
            </span>
            <span className="text-8xl  font-barlow text-gray-500">1908</span>
          </div>
        </div>
        <div className="h-full">
          <h2 className="text-2xl font-medium !font-barlow text-primary !leading-8">
            RECONSTRUIRE
          </h2>
          <p className="font-medium mt-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <div className="mt-7">
            <img
              src="/images/about-us/reconsctruction.jpg"
              alt="reconstruction"
              className="w-full h-full object-contain rounded-[18px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moments;
