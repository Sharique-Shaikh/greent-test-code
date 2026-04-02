import React, { useState } from 'react';
import {
  AccordionArrow,
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionTitle,
  AccordionNumber,
} from './AccordionStyles';
import Image from 'next/image';
import arrowUp from '@/public/assets/images/accordionOpen.svg';
import arrowDown from '@/public/assets/images/accordionClose.svg';

const Accordion = ({ items }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(index === openAccordionIndex ? -1 : index);
  };

  return (
    <div>
      <div>
        {items?.map((item, index) => (
          <AccordionContainer key={index} isOpen={index === openAccordionIndex}>
            <AccordionHeader onClick={() => toggleAccordion(index)}>
              <AccordionNumber isOpen={index === openAccordionIndex}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </AccordionNumber>
              <AccordionTitle>{item.title}</AccordionTitle>
              <AccordionArrow isOpen={index === openAccordionIndex}>
                <Image
                  src={index === openAccordionIndex ? arrowDown : arrowUp}
                  alt='arrow'
                />
              </AccordionArrow>
            </AccordionHeader>
            <AccordionContent isOpen={index === openAccordionIndex}>
              {item.content}
            </AccordionContent>
          </AccordionContainer>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
