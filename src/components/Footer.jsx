import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  const {
    INSTAGRAM_URL,
    FACEBOOK_URL,
    WHATSAPP_NUMBER,
    WHATSAPP_NUMBER_FORMAT,
  } = process.env;
  const message = "HI I AM..";
  return (
    <footer className="w-full h-[35vh] border-t-2 bg-main-text relative bg-footer-background bg-center bg-cover">
      <div className="inset-0 bg-black absolute opacity-60"></div>

      <div className="text-main-text absolute flex flex-col gap-2 font-semibold inset-0 p-4">
        <div>Contact :</div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          aria-label="whatsapp link"
          className="border rounded-full bg-black p-1 px-2 w-[40%] max-[640px]:w-[80%] text-[65%] md:w-[45%] md:text-[80%] sm:text-[80%] lg:w-[35%] xl:w-[25%] 2xl:w-[25%] font-light grid grid-cols-3 justify-center items-center"
        >
          <WhatsappLogo size={28} color="#c2c1c1" />
          <span className="col-span-2 group/whatsapp w-fit">
            {WHATSAPP_NUMBER_FORMAT}
            <div className="w-0 h-[2px] bg-main-text group-hover/whatsapp:w-full transition-all duration-200" />
          </span>
        </a>
        <a
          href={`https://www.instagram.com/${INSTAGRAM_URL}`}
          target="_blank"
          aria-label="instagram profile"
          className="border rounded-full bg-black p-1 px-2 w-[40%] max-[640px]:w-[80%] text-[65%] md:w-[45%] md:text-[80%] sm:text-[80%] lg:w-[35%] xl:w-[25%] 2xl:w-[25%] font-light grid grid-cols-3 justify-center items-center"
        >
          <InstagramLogo size={28} color="#c2c1c1" />
          <span className="col-span-2 group/instagram w-fit">
            {`@${INSTAGRAM_URL}`}
            <div className="w-0 h-[2px] bg-main-text group-hover/instagram:w-full transition-all duration-200" />
          </span>
        </a>
        <a
          href={`https://www.facebook.com/${FACEBOOK_URL}`}
          target="_blank"
          aria-label="facebook profile"
          className="border rounded-full bg-black p-1 px-2 w-[40%] max-[640px]:w-[80%] text-[65%] md:w-[45%] md:text-[80%] sm:text-[80%] lg:w-[35%] xl:w-[25%] 2xl:w-[25%] font-light grid grid-cols-3 justify-center items-center"
        >
          <FacebookLogo size={28} color="#c2c1c1" />
          <span className="col-span-2 group/facebook w-fit">
            {`@${FACEBOOK_URL}`}
            <div className="w-0 h-[2px] bg-main-text group-hover/facebook:w-full transition-all duration-200" />
          </span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
