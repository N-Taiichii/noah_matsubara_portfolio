import { CONTACT_CONTENT } from "../constants/ContactConstants";

import Text from "../ui/Text";

export default function ContactContent() {
  return (
    <div className="flex flex-col items-center justify-center w-[80%] lg:w-[60%] gap-y-20 gap-x-10">
      {CONTACT_CONTENT.map((block) => (
        <div className="flex flex-col space-y-0 justify-center items-center w-full">
          <a
            href={block.url}
            target="_blank"
            className="relative left-0 hover:text-brand-accent transition ease-in-out duration-300"
          >
            <Text as="p">{block.url}</Text>
          </a>
        </div>
      ))}
    </div>
  );
}
