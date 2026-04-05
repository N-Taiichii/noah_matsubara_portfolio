import { PROJECT_CONTENT } from "../constants/ProjectConstants";

import Text from "../ui/Text";

export default function ProjectsContent() {
  return (
    <div className="flex flex-col items-center justify-center w-[80%] lg:w-[50%] space-y-5">
      {PROJECT_CONTENT.map((block) => (
        <div className="text-right flex flex-col justify-end items-end w-full">
          <a href={block.url} target="_blank">
            <Text as="h1" className="text-right w-full">
              {block.heading}
            </Text>
            <Text as="p" className="text-right w-full">
              {block.description}
            </Text>
          </a>
        </div>
      ))}
    </div>
  );
}
