import { ReactNode } from 'react';

const Container = ({children}:{children:ReactNode}) => {
    return (
        <div className='max-w-[1440px] w-full mx-auto  px-4 md:px-8 xl:px-[150px]'>
            {children}
        </div>
    );
};

export default Container;