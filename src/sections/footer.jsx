import React from "react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const AppFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"

              name ="MORENT"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 pb-8">
            <div className="flex flex-col gap-5">
              <Footer.Title title="About" />
              <Footer.LinkGroup col className="gap-3 text-[#13131399]">
                <Footer.Link href="#">How it works</Footer.Link>
                <Footer.Link href="#">Featured</Footer.Link>
                <Footer.Link href="#">Partnership</Footer.Link>
                <Footer.Link href="#">Bussiness Relation</Footer.Link>


              </Footer.LinkGroup>
            </div>
            <div  className="flex flex-col gap-5">
              <Footer.Title title="Community" />
              <Footer.LinkGroup col className="gap-3 text-[#13131399]">
                <Footer.Link href="#">Socials</Footer.Link>
                <Footer.Link href="#">Events</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Podcast</Footer.Link>

              </Footer.LinkGroup>
            </div>
            <div  className="flex flex-col gap-5">
              <Footer.Title title="Socials" />
              <Footer.LinkGroup col className="gap-3 text-[#13131399]">
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>

              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
