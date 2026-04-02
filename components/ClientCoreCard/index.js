import Image from 'next/image';
import {
  CardContent,
  CardTitle,
  ClientCard,
  ClientCoreIcon,
} from './ClientCoreCardStyle';

export default function ClientCoreCard({ data }) {
  console.log(data, 'data');
  return (
    <ClientCard>
      <ClientCoreIcon>
        <Image src={data?.imgData} alt='client' />
      </ClientCoreIcon>

      <CardTitle>{data?.title}</CardTitle>
      <CardContent>{data?.content}</CardContent>
    </ClientCard>
  );
}
