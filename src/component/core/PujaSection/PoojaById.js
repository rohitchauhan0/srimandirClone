import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { pujaEndPoints } from "../../../Services/AllApi";
import { apiConnector } from "../../../Services/ApiConnector";
import PoojaSwiper from "./PoojaSwiper";
import { GiByzantinTemple } from "react-icons/gi";
import Timer from "./Timer";
import { FaArrowRight } from "react-icons/fa6";
import PoojaProcess from "./PoojaProcess";
import PaymentCard from "./PaymentCard";
import PoojaNavbar from "./PoojaNavbar";
import TabSection from "./TabSection";
import GetRating from "../../common/GetRating";
import FAQS from "./FAQS";
import { IoMdCalendar } from "react-icons/io";
import user1 from "../../../Assets/user/imag1.avif";
import user2 from "../../../Assets/user/image2.avif";
import user3 from "../../../Assets/user/image3.avif";
import user4 from "../../../Assets/user/image4.avif";
import user5 from "../../../Assets/user/image5.jpg";
import Footer from "../../common/Footer";
import { formattedDate } from "../../../Utils/DateFormatter";

const PoojaById = () => {
  const { poojaId } = useParams();
  const { GET_PUJA_BY_ID_API } = pujaEndPoints;
  const [poojadetail, setpoojadetail] = useState("");
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await apiConnector("POST", GET_PUJA_BY_ID_API, {
          poojaId,
        });
        setpoojadetail(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [poojaId]);
  const targetDate = new Date(poojadetail.date).getTime();
  const targetDiv = useRef(null);

  const handleScrolltoDiv = () => {
    if (targetDiv.current) {
      targetDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [textColor1, settextColor1] = useState("");
  const [textColor2, settextColor2] = useState("");
  const [textColor3, settextColor3] = useState("");
  const [textColor4, settextColor4] = useState("");
  const [textColor5, settextColor5] = useState("");
  const [textColor6, settextColor6] = useState("");
  const [textColor7, settextColor7] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const aboutPooja = document.getElementById("aboutPooja");
      const poojaBenefits = document.getElementById("poojaBenefits");
      const aboutPujaProcess = document.getElementById("aboutPujaProcess");
      const aboutTemple = document.getElementById("aboutTemple");
      const aboutPayment = document.getElementById("aboutPayment");
      const aboutReviews = document.getElementById("reviews");
      const aboutFAQS = document.getElementById("FAQS");

      const isInView = (element, scrollPos) => {
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const buffer = -300; // Adjust this value as needed

        return (
          rect.top - buffer <= window.innerHeight && rect.bottom + buffer >= 0
        );
      };
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (isInView(aboutPooja, scrollPosition)) {
        settextColor1("text-orange-500");
      } else {
        settextColor1("text-gray-500 ");
      }

      if (isInView(poojaBenefits, scrollPosition)) {
        settextColor2("text-orange-500");
      } else {
        settextColor2("text-gray-500 ");
      }

      if (isInView(aboutPujaProcess, scrollPosition)) {
        settextColor3("text-orange-500");
      } else {
        settextColor3("text-gray-500 ");
      }
      if (isInView(aboutTemple, scrollPosition)) {
        settextColor4("text-orange-500");
      } else {
        settextColor4("text-gray-500 ");
      }
      if (isInView(aboutPayment, scrollPosition)) {
        settextColor5("text-orange-500");
      } else {
        settextColor5("text-gray-500 ");
      }
      if (isInView(aboutReviews, scrollPosition)) {
        settextColor6("text-orange-500");
      } else {
        settextColor6("text-gray-500 ");
      }
      if (isInView(aboutFAQS, scrollPosition)) {
        settextColor7("text-orange-500");
      } else {
        settextColor7("text-gray-500 ");
      }

      // Repeat the above process for other sections...
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className=" w-full min-h-screen max-w-screen-xl mx-auto lg:px-0 px-5 ">
        <PoojaNavbar poojaTitle={poojadetail.title} />
        <div className=" flex flex-col gap-32 lg:mt-40  ">
          <div className=" flex items-center lg:flex-row flex-col justify-center lg:justify-between  lg:px-0 px-2">
            <div className=" w-full lg:w-[45%] ">
              <PoojaSwiper poojaDetails={poojadetail} />
            </div>
            <div className=" lg:w-[45%] h-full flex flex-col gap-10 ">
              <h2 className=" text-2xl lg:text-4xl font-bold">
                {poojadetail.title}.....
              </h2>
              <div className=" flex flex-col items-start gap-4">
                <div className=" flex gap-4 text-[22px] items-center justify-center text-gray-500">
                  <GiByzantinTemple className=" text-orange-500" />
                  {poojadetail.address}
                </div>

                <div className=" flex gap-4 text-[20px] items-center justify-center text-gray-500">
                  <IoMdCalendar className=" text-orange-500" />
                  {/* {poojadetail.date} */}
                  {formattedDate(poojadetail.date)}
                </div>
                <Timer targetDate={targetDate} />
                <div className=" flex">
                  <img
                    src={user1}
                    alt=""
                    className=" w-[50px] h-[50px] border-2 border-white rounded-full object-cover"
                  />
                  <img
                    src={user2}
                    alt=""
                    className=" w-[50px] h-[50px] border-2 border-white rounded-full object-cover -ml-6"
                  />
                  <img
                    src={user3}
                    alt=""
                    className=" w-[50px] h-[50px] border-2 border-white rounded-full object-cover -ml-6"
                  />
                  <img
                    src={user4}
                    alt=""
                    className=" w-[50px] h-[50px] border-2 border-white rounded-full object-cover -ml-6"
                  />
                  <img
                    src={user5}
                    alt=""
                    className=" w-[50px] h-[50px] border-2 border-white rounded-full object-cover -ml-6"
                  />
                </div>
                <p className=" text-lg">
                  Till now{" "}
                  <span className=" text-orange-500">1,00,000+Devotees</span>{" "}
                  have participated in Pujas conducted by Sri Mandir Puja Seva.
                </p>
                <button
                  className=" w-full p-2 rounded-xl text-white font-bold cursor-pointer gradientButton relative overflow-hidden flex gap-2 items-center justify-center"
                  onClick={() => handleScrolltoDiv()}
                >
                  <div className=" w-[80px] h-[150px] bg-white -top-2 -left-2 rotate-45 absolute -skew-x-[45deg] opacity-40 animateButton"></div>
                  Participate <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <TabSection
          textColor1={textColor1}
          textColor2={textColor2}
          textColor3={textColor3}
          textColor4={textColor4}
          textColor5={textColor5}
          textColor6={textColor6}
          textColor7={textColor7}
        />
        <div className=" w-full min-h-screen flex lg:mt-0 mt-3 flex-col gap-8">
          <div className="flex flex-col gap-3" id="aboutPooja">
            <h2 className="text-2xl lg:text-4xl font-bold">
              {poojadetail.title}
            </h2>
            <p className=" text-gray-500 text-lg">{poojadetail.description}</p>
          </div>
          <div className=" w-full h-4 bg-gray-300 bg-opacity-60"></div>
          <div className=" flex flex-col gap-10">
            <h2 className=" text-4xl font-bold">Pooja Benefits</h2>
            <div
              className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3 mt-5"
              id="poojaBenefits"
            >
              {poojadetail?.poojaBenefits?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className=" w-[300px] max-h-[200px] flex  gap-3 rounded-xl p-3"
                  >
                    <img
                      src={data.icons}
                      alt=""
                      className=" w-[70px] h-[70px] object-cover rounded-full "
                    />
                    <div className=" flex items-center gap-3 flex-col">
                      <h2 className=" text-xxl font-bold">{data.title}</h2>
                      <p className=" text-sm text-gray-500">
                        {data.description?.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" w-full h-4 bg-gray-300 bg-opacity-60"></div>
            <div id="aboutPujaProcess">
              <PoojaProcess />
            </div>{" "}
            <div className=" w-full h-4 bg-gray-300 bg-opacity-60"></div>
            <div className=" flex flex-col gap-4 py-7" id="aboutTemple">
              <h2 className=" text-4xl font-bold">{poojadetail.templeName}</h2>
              <div className=" flex items-center lg:flex-row flex-col justify-between w-full">
                <img
                  src={poojadetail.image2}
                  alt=""
                  className=" w-full lg:w-[45%] h-[70%] object-cover rounded-xl"
                />
                <div className=" w-full flex flex-col items-center  gap-4 px-10">
                  <pre
                    className=" w-full text-gray-500 text-sm leading-5"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {poojadetail.templeDetail}
                  </pre>
                  <div className=" flex flex-col gap-2 bg-slate-200 p-2 rounded-xl">
                    <p>{poojadetail.personName}</p>
                    <p>with {poojadetail.personExperience} of experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={targetDiv} id="aboutPayment">
              <PaymentCard poojaId={poojaId} />
            </div>
            <div className=" w-full mt-20 max-w-screen-xl" id="reviews">
              <div className=" w-full   flex items-start gap-5 flex-col">
                <h2 className=" text-4xl font-bold">
                  What devotees Say about Sri Mandir Puja ?
                </h2>
                <p className=" text-2xl  text-gray-500">
                  Reviews and Ratings from our customers who performed online
                  Puja with us.
                </p>
              </div>
              <div className=" w-full">
                <GetRating />
              </div>
            </div>
            <div className=" w-full mt-20 max-w-screen-xl" id="reviews">
              <div className=" w-full   flex items-start gap-5 flex-col">
                <h2 className=" text-3xl font-bold">
                  Frequently asked Questions
                </h2>
              </div>

              <div className=" w-full mt-5" id="FAQS">
                <FAQS
                  title={"Why should I choose Sri Mandir for performing Puja?"}
                  text={
                    "SriMandir is the largest devotion technology company trusted by 1 Cr+ Hindus worldwide. We offer multiple services such as Praying app, Chadhava services, Puja services and Astrology services. SriMandir provides the most trusted information regarding Hindu shastras and festivals of Hindu Dharma. All our pujas are conducted by experienced pandit ji's at important pilgrim locations of India such as Haridwar, Varanasi, Kamakhya-Guwahati, Kolhapur-Mahalakshmi etc. Our experienced pandit ji's follow the right process as per the Shastras and also do your pujas with your name and gotra with the right ‘Bhava’ or emotion. The puja updates are always sent to your Whatsapp number and a recorded video is also shared with you. Additionally, prasad from the puja is delivered to your home. Hari Aum."
                  }
                />

                <FAQS
                  title={"I don’t know my Gotra, what should I do?"}
                  text={
                    "We would first suggest you to consult elders in your family to gather more information about your Gotra. If at all, no one in your family remembers the Gotra information, you can follow the guidance of the Shastras. As per the Shastras, if someone doesn’t know their Gotra they can consider their Gotra as Kashyap Gotra. So you can mention Kashyap Gotra in your Sankalpa form while completing the booking and proceed with your booking. Hari Aum."
                  }
                />

                <FAQS
                  title={"Who will perform the Puja?"}
                  text={
                    "SriMandir is trusted by 1 Cr+ Hindus worldwide. We believe that it is our responsibility and Dharma to do justice to the trust put by our users in our services. Consequently, we conduct every puja with proper rituals as defined in the shastras of that deity. All the pandit ji’s who conduct pujas for SriMandir have experience ranging from 10-30 years. The families of our pandit ji's have been working at the temple for generations and all of them revere the deity immensely. Not just the process and rituals, our pandit ji's also have the right ‘bhava’ or emotion while doing your pujas and praying for your well-being. Hari Aum."
                  }
                />

                <FAQS
                  title={"What will be done in this Puja?"}
                  text={
                    "Our pandit ji’s conducting pujas at the famous temples have exceptional knowledge and experience in Vedic rituals. Every puja through Sri Mandir is always conducted in your name and gotra, as mentioned in our Vedas. Our pandit ji will perform your puja with the right ‘bhava’ and rituals mentioned in the ancient scriptures. After completing the puja, pandit ji will pray for the well-being of your family and your success. Hari Aum."
                  }
                />

                <FAQS
                  title={"How will I know the Puja has been done in my name?"}
                  text={
                    "Sri Mandir is a trusted devotional brand where we perform every puja as per the Hindu shastras. Our experienced pandits of the temple will meticulously perform the Vedic rituals in your name and gotra and pray for your happiness and success. After the completion of the rituals, we will share all the puja updates to your Whatsapp number and a video of the puja will also be shared with you. Additionally, the prasad from the puja will be delivered to your home. Hari Aum."
                  }
                />

                <FAQS
                  title={"What will I get after the Puja is done?"}
                  text={
                    "Sri Mandir understands your concern, therefore once the puja is completed, we will send the puja video to your Whatsapp within 4 days, capturing the sacred moments of the ritual in your name and gotra. Additionally, the divine prasad from the puja will be carefully packaged and delivered right to your doorstep. This way, you will not only experience the divine energy of the puja through the personalised video but also receive the prasad, bringing the sanctity of the ritual directly to your home. Hari Aum."
                  }
                />
                <FAQS
                  title={"What are the other services offered by Sri Mandir?"}
                  text={
                    "Sri Mandir is the largest devotion technology brand trusted by Hindus all over the world. Sri Mandir offers the most reliable information on Hindu shastras and Hindu festivals. Sri Mandir also provides a variety of services, including a Prayer app, Chadhava services, Puja services, and Astrology services. Sri Mandir allows you to make offerings at famous shrines across the country from your home, including Mahakaleshwar, Siddhivinayak, Vaishno Devi, Baglamukhi Temple, etc. Hari Aum. So, no matter where you are in the world, Sri Mandir will always connect you with your favourite temples in India. Hari Aum."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
                  className="lg:hidden w-full p-2 sticky bottom-1 left-0 rounded-xl text-white font-bold cursor-pointer gradientButton overflow-hidden flex gap-2 items-center justify-center"
                  onClick={() => handleScrolltoDiv()}
                >
                  <div className=" w-[80px] h-[150px] bg-white -top-2 -left-2 rotate-45 absolute -skew-x-[45deg] opacity-40 animateButton"></div>
                  Book Now <FaArrowRight />
                </button>
      <Footer />
    </>
  );
};

export default PoojaById;
