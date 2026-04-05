"use client";

import { useState } from "react";
import { AccordionItem } from "./AccodrionItem";
import { AccordionItemData } from "../constants/AccordionTypes";

type AccordionProps = {
  items: AccordionItemData[];
  defaultOpenIndex?: number | null;
};

export const Accordion = ({
  items,
  defaultOpenIndex = null,
}: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex
  );

  return (
    <div className="w-full rounded-xl">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          idx={index}
          title={item.heading}
          content={item.text}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
        
      ))}
    </div>
  );
};