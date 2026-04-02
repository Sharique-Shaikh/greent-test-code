import Image from 'next/image';
import { ArrowContainer, ScheduleBtn } from './PrimaryButtonStyle';
import Arrow from '../../public/assets/images/Arrow.svg';

export default function ScheduleButton({
  btnTitle,
  btnWidth,
  textalign,
  bgColor = '#007f62',
  color = '#fff',
  onClick,
  bgHover = true,
}) {
  return (
    <ScheduleBtn
      btnWidth={btnWidth}
      textalign={textalign}
      bgColor={bgColor}
      color={color}
      onClick={onClick}
      bgHover={bgHover}
    >
      {btnTitle}
      <ArrowContainer>
        <Image src={Arrow} alt='arrow' />
      </ArrowContainer>
    </ScheduleBtn>
  );
}
