import { ICONS } from '@/public/assets';
import Image from 'next/image';
import './advertisecard.css'

interface AdvertisementCardProps {
    description: string;
    buttonText: string;
}


const AdvertisementCard: React.FC<AdvertisementCardProps> = ({ description, buttonText }) => {
  return (
    <div className="flex flex-col left pb-[56px] pt-[24px] w-[20%] border gap-3 px-[16px] border-[#524CC6] rounded-md">
      <Image src={ICONS.advertismentImage} alt="blog banner" />
      <h4>{description}</h4>
      <button className='w-full border-[1.5px] px-[15px] py-[8px] border-[#524CC6] text-[#524CC6] rounded-md'>
        <h5 className='font-semibold'>{buttonText}</h5>
      </button>
    </div>
  );
}



export default AdvertisementCard;