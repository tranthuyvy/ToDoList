import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-600 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:mr-4">
          <a href="/" className="flex items-center">
            <img
              src="https://statics.cdn.200lab.io/f/20230830172851/200lab-logo-beta.png"
              alt="logo"
              className="w-36 ml-10 mb-4"
            />
          </a>

          <div className="flex px-8">
            <a
              href="https://www.facebook.com/edu.200lab"
              className="rounded-full border mx-4 mb-8 p-1 hover:bg-red ease-out duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://200lab.io/"
              className="rounded-full border mr-4 mb-8 p-1 hover:bg-red ease-out duration-300"
            >
              <TbWorld />
            </a>
            <a
              href="https://www.youtube.com/@200LabEducation"
              className="rounded-full border mr-4 mb-8 p-1 hover:bg-red ease-out duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="lg:mr-4">
          <p className="text-[15px] font-semibold">Công ty TNHH công nghệ 200LAB</p>
          <p className="text-xs">
            <br />
            <p className="mt-1">MST: 0317035178</p>
            <br />
            <p className="mt-1">70 Huỳnh Văn Bánh, P.15, Quận Phú Nhuận, TP.HCM</p>
            <br />
            <b className="">Hotline: 0938852108</b>
          </p>
        </div>

        <div>
          <p className="uppercase text-xs text-white font-bold">
            Liên Hệ
          </p>

          <a
            className="text-white hover:text-red ease-out duration-300 text-[14px] mb-3 font-semibold"
            href="mailto:customerservice@highlandscoffee.com.vn"
          >
            edu@200lab.io
          </a>
          <br />

          <p className="text-white uppercase tracking-normal text-[12px] font-semibold mt-3">
            MON-FRI, 9AM - 5PM
          </p>

        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <p className="text-xs mb-2 md:mb-0">
          © {currentYear} 200Lab. All rights reserved
        </p>

        <div className="text-center md:text-right">
          <a
            className="text-white hover:text-red focus:text-red ease-out duration-300 mr-3 text-xs"
            href="/disclaimer"
          >
            Disclaimer
          </a>

          <a
            className="border-l border-white pl-3 text-white hover:text-red focus:text-red ease-out duration-300 text-xs"
            href="/privacy-notice"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
