import React, { useEffect, useState } from 'react';
import D_Summary from './D_Summary';
import D_Header from './D_Header';
import D_Table from './D_Table';

const DashboardPage = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024); // Example threshold for desktop
        };

        // Initial check
        handleResize();

        // Add event listener to handle resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isDesktop) {
        return <p className='text-center'>This site is only accessible on desktop devices.</p>;
    }

    return (
        <>
            <D_Header />
            <D_Summary />
            <D_Table />
        </>
    );
};

export default DashboardPage;
