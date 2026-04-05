"use client";

import Text from '@/app/components/ui/Text';

type AccordionItemProps = {
  idx: number;
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

export const AccordionItem = ({
  idx,
  title,
  content,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className={`border-b cursor-pointer duration-250 hover:bg-foreground/10 transition-colors`}>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-4 font-medium text-left transition-colors ease-in-out"
      >
        <span className="text-foreground"><span className="font-semibold text-foreground">{idx+1 < 10 ? `0${idx+1}` : `${idx+1}`}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="italic font-semibold">{title}</span></span>
        <span className="text-xl leading-none text-foreground">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 pb-4 text-gray-600">
          <Text as="p" color="text-foreground" className="text-left">{content}</Text>
        </div>
      </div>
    </div>
  );
};
