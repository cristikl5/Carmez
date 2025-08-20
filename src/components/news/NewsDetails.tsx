import { useParams } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";

const Quote = () => {
  return (
    <div className="bg-white p-8 border-l-4 border-primary font-ibarra rounded-[18px] font-normal italic text-2xl leading-8">
      “ Traveling can expose you to new environments and potential health risks,
      so it's crucial to take precautions to stay safe and healthy. ”
    </div>
  );
};

const NewsDetails = () => {
  const { title } = useParams();

  return (
    <section className="py-24 sm:py-36">
      <div className="fluid-container">
        <Breadcrumbs hideTitle />
        <div className="details-fluid-container">
          <div className="space-y-5">
            <h1 className="font-semibold font-barlow text-4xl">{title}</h1>
            <span className="font-normal text-sm text-gray-400">
              August 20, 2022
            </span>
          </div>
          <div className="mt-8 space-y-8">
            <img
              src="/images/news/carnacior-details.jpg"
              alt={title}
              className="object-contain rounded-[18px]"
            />
            <p className="text-gray-400 font-normal leading-7">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
              <br />
              <br />
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
            <div className="space-y-4">
              <h4 className="font-bold text-2xl">Research Your Destination</h4>
              <p className="text-gray-400 font-normal leading-7">
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
                ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
                euismod elementum nisi quis eleifend quam adipiscing vitae.
                Viverra adipiscing at in tellus.
              </p>
            </div>
            <Quote />
            <img
              src="/images/news/carnacior-details-2.jpg"
              alt={title}
              className="object-contain rounded-[18px]"
            />
            <div className="space-y-4">
              <h4 className="font-bold text-2xl">Pack Lightly and Smartly</h4>
              <p className="text-gray-400 font-normal leading-7">
                Packing can be a daunting task, but with some careful planning
                and smart choices, you can pack light and efficiently. Start by
                making a packing list and sticking to it, focusing on versatile
                and comfortable clothing that can be mixed and matched. Invest
                in quality luggage and packing organizers to maximize space and
                minimize wrinkles.
                <br />
              </p>
            </div>{" "}
            <div className="space-y-4">
              <h4 className="font-bold text-2xl">Stay Safe and Healthy</h4>
              <p className="text-gray-400 font-normal leading-7">
                Traveling can expose you to new environments and potential
                health risks, so it's crucial to take precautions to stay safe
                and healthy. This includes researching any required vaccinations
                or medications, staying hydrated, washing your hands frequently,
                and using sunscreen and insect repellent. It's also essential to
                keep your valuables safe and secure and to be aware of your
                surroundings at all times.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
