import { ABOUT_CONTENT } from "../constants/AboutConstants";
import { Accordion } from "../ui/Accordion";
import Text from "../ui/Text";

export default function AboutContent() {
  return (
    <div className="flex flex-col items-center justify-center w-[80%] lg:w-[50%] space-y-5 text-right">
      <Accordion items={ABOUT_CONTENT} />
    </div>
  );
}
