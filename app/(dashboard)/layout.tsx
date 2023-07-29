import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/ui/Navbar';
import { getApiLimitCount } from '@/lib/api-limit';
import React from 'react';

const dashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const apiLimitCount = await getApiLimitCount();
    return (
        <div className='h-full relative'>
            <div className='hidden h-full md:w-72 md:flex md:flex-col bg-gray-800 md:fixed md:inset-y-0'>
                <Sidebar apiLimitCount={apiLimitCount} />
            </div>
            <main className='md:pl-72'>
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default dashboardLayout;