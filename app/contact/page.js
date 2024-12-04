import {
  FaEnvelope,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import {
  discord,
  email,
  github,
  instagram,
  linkedin,
  telegram,
  telegramId,
} from "../_lib/vars";

export const metadata = {
  title: "Contact | Diazepam",
};

function ContactLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-primary_800/70 p-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:bg-primary_700 transform hover:scale-105"
    >
      <Icon className="text-secondaryLighter text-3xl mr-4" />
      <span className="text-primary_100 text-xl font-semibold hover:text-secondaryLight">
        {label}
      </span>
    </a>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-primary_900/90 text-primary_100 flex flex-col items-center py-14 px-4 sm:px-20">
      <h1 className="text-5xl font-extrabold mb-10 animate-fadeIn">
        Contact Me
      </h1>
      <p className="text-lg text-primary_300 mb-12 max-w-3xl text-center animate-slideLeft">
        Feel free to reach out to me through any of the following platforms.
        I&apos;m always open to connecting, sharing ideas, and discussing
        anything related to music or beyond.
      </p>
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 sm:gap-8 gap-2 animate-slideLeft">
        <ContactLink href={email} icon={FaEnvelope} label="Email" />
        <ContactLink href={instagram} icon={FaInstagram} label="Instagram" />
        <ContactLink href={telegramId} icon={FaTelegram} label="Telegram" />
        <ContactLink href={linkedin} icon={FaLinkedin} label="LinkedIn" />
        <ContactLink href={discord} icon={FaDiscord} label="Discord" />
        <ContactLink href={github} icon={FaGithub} label="GitHub" />
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Join My Community!</h2>
        <p className="text-primary_300 mb-8 max-w-lg mx-auto">
          Be a part of our growing community of music enthusiasts. Share your
          thoughts, ideas, and feedback, and stay updated with the latest news
          and releases.
        </p>
        <a
          href={telegram}
          className="bg-secondaryBase text-primary_100 py-3 px-8 rounded-full hover:bg-secondaryLight transition duration-300"
        >
          Join Now
        </a>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Suggest a Topic!</h2>
        <p className="text-primary_300 mb-8 max-w-lg mx-auto">
          Have a topic you&apos;d like to discuss or a question you&apos;d like
          answered? Let us know and we might feature it in a future update or
          post.
        </p>
        <a
          href="/suggest"
          className="bg-secondaryBase text-primary_100 py-3 px-8 rounded-full hover:bg-secondaryLight transition duration-300"
        >
          Suggest Now
        </a>
      </div>
    </div>
  );
}
