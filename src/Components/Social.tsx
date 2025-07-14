import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const Social = () => {
  const socialLinks = [
    { link: "https://github.com/Razib1998", icon: IconBrandGithub },
    {
      link: "https://www.linkedin.com/in/md-razib-sarker-5550a2300",
      icon: IconBrandLinkedin,
    },

    { link: "https://x.com/mdsarker143?s=21", icon: IconBrandTwitter },
  ];
  const socialIcons = socialLinks.map((socialLink, index) => {
    return (
      <a
        key={index}
        href={`${socialLink.link}`}
        target="_blank"
        className="text-lg  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out"
      >
        <div>
          <socialLink.icon stroke={1.5} className="-rotate-90" size={25} />
        </div>
      </a>
    );
  });

  return (
    <div className="flex !md:hidden text-textColor items-center gap-8 fixed bottom-32 -left-32 rotate-90">
      {socialIcons}
      <hr className="border w-40 rounded-full  bg-textColor border-textColor" />
    </div>
  );
};
export default Social;
