"use client"
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from './Sidebar';
const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) return null;

    return (
        <Sheet>
            <SheetTrigger>
                <Button className='md:hidden' size={"icon"} variant={"ghost"}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className='p-0' side={"left"}>
                <Sidebar />
            </SheetContent>
        </Sheet>

    );
};

export default MobileSidebar;