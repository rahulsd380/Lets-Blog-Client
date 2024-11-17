import { ICONS } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type THeading = {
    title: string;
    isBordervisible: boolean;
    isLinkAvailable: boolean;
    path?: string;
}

const Heading: React.FC<THeading> = ({ title, isBordervisible, isLinkAvailable, path }) => {
    return (
        <div className={`${isBordervisible ? "border-b border-primary-50 pb-3" : "border-none pb-0"} font-Inter flex items-center justify-between`}>
            <h1 className='text-black text-2xl font-semibold leading-[38px]'>{title}</h1>
            {
                isLinkAvailable && path && ( 
                    <Link href={path} className='text-primary-10 font-semibold leading-7 flex items-center gap-[10px]'>
                        View All
                        <Image src={ICONS.view} alt="view-icon" className="size-6" />
                    </Link>
                )
            }
        </div>
    );
};

export default Heading;
