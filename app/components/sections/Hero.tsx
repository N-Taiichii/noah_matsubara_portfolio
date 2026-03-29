import ThemeToggle from "../layout/ThemeToggle";
import Text from "../ui/Text";

export default function Hero() {
  return (
    <div className="w-full scroll-smooth overflow-x-hidden">
      <ThemeToggle />
      <div className="w-full h-screen p-10">
        <div className="border-1 border-brand-dark dark:border-brand-light w-full h-full">
          <div className="m-5 w-full flex flex-col justify-start items-start">
            <div>
              <Text as="h1" className="text-brand-dark dark:text-brand-light">Noah Matsubara</Text>
              <Text as="p" className="text-brand-dark dark:text-brand-light">Full Stack Web Developer</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
