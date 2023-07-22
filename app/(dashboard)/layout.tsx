import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/ui/Navbar';
import React from 'react';

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full relative'>
            <div className='hidden h-full md:w-72 md:flex md:flex-col bg-gray-800 md:fixed md:inset-y-0 z-[80]'>
                <Sidebar />
            </div>
            <main className='md:pl-72'>
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default dashboardLayout;