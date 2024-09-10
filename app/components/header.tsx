import { Facebook, Instagram, Xrp } from "iconsax-react";
import { CiMail } from "react-icons/ci";

export default function Header() {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/romeoansah32?igsh=OGkyNGR4NWN5eWVl",
      icon: <Instagram size="32" color="#d9e3f0" variant="Bulk" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/RomeoAnsah10506?t=bdSDgKWcjKLXzdG20uWxpg&s=09",
      icon: <Xrp size="32" color="#d9e3f0" variant="Bulk" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/ErQQbJySvzEaSQQN/?mibextid=qi2Omg",
      icon: <Facebook size="32" color="#d9e3f0" variant="Bulk" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/posts/owusu-ansah-romeo-adarkwah-a32486320_im-happy-to-share-that-im-starting-a-new-activity-7239026194556325888-XZcR?utm_source=share&utm_medium=member_android",
      icon: (
        <span className="icon-[ri--linkedin-line] text-2xl font-bold">In</span>
      ),
    },
  ];

  return (
    <header className="mx-20 md:mx-30 lg:mx=40 py-5 border-solid border-b-[0.1px] border-slate-500">
      <div className="flex items-center justify-between">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mailto:romeoansah32@gmail.com"
          className="flex items-center"
        >
          <div className="border-solid border-[0.1px] border-slate-500 p-3 rounded-full bg-slate-900">
            <CiMail size={16} className="text-slate-200" />
          </div>
          <div className="mx-2" />
          <span className="text-sm text-slate-300 hidden md:block">romeoansah32@gmail.com</span>
        </a>
        <div className="flex items-center">
          {socials.map((social, index) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="text-sm text-slate-300 flex items-center"
            >
              <span className="block md:hidden">{social.icon}</span>
              <span className="hidden md:block">{social.name}</span>
              {index < socials.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
