import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react'
const MobileSidebar = () => {
    return (
        <Button className='md:hidden' size={"icon"} variant={"ghost"}>
            <Menu />
        </Button>
    );
};

export default MobileSidebar;