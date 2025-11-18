import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Svg } from '../other';
import { MENUITEMS_LIST } from '@/utils/constant';
import { Button } from '../ui/button';
import { getValuesIdentifierAppLink } from '@/lib/utils';
import { motion } from "framer-motion";
import { getMenuItemsMotionProps } from '@/utils/motion';
import { MenuItem } from '../shared/types';

const MenuItemsMobile = ({ handleMenuOpen }: { handleMenuOpen: () => void }) => {
    const { push } = useRouter();
    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    // handleMenuItemClick
    const handleMenuItemClick = (menuItem: MenuItem) => {
        if (menuItem.subTabs) {
            setHoveredItemId(hoveredItemId !== menuItem.id ? menuItem.id : null);
        } else {
            if (menuItem.target) {
                window.open(menuItem.slug, menuItem.target);
            } else {
                push(menuItem.slug);
                handleMenuOpen();
                setHoveredItemId(null);
            }
        }
    }
    // useEffect
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                handleMenuOpen()
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuRef]);
    const appLink = React.useMemo(() => getValuesIdentifierAppLink(), [])
    //JSX
    return (
        <motion.div
            ref={menuRef}
            {...getMenuItemsMotionProps()}
            className='bg-white shadow-menuItemMobile absolute top-[80px] left-2 right-2 
                md:left-auto md:right-2 md:w-[480px] py-8 px-6 flex xl:hidden flex-col'>
            <div className='overflow-y-auto  max-h-[calc(100vh-160px)]'>
                <ul className='flex flex-col gap-4'>
                    {MENUITEMS_LIST.map((menuItem) => {
                        return (
                            <li key={menuItem.id}
                                onClick={() => handleMenuItemClick(menuItem)}
                                className='flex flex-col w-full border-b border-b-border-foreground pb-4 cursor-pointer'>
                                <div className='w-full flex justify-between items-center'>
                                    <p className={cn(
                                        'font-helvetica text-nowrap text-[16px] leading-[24px] text-primary-text',
                                        hoveredItemId && 'text-secondary-text',
                                        hoveredItemId === menuItem.id && 'text-muted-text'
                                    )}>
                                        {menuItem.label}
                                    </p>
                                    {menuItem.subTabs && (
                                        <>
                                            {hoveredItemId === menuItem.id ? (
                                                <Svg.Arrow.ChevronBack className='-rotate-90 text-muted-text' />
                                            ) : (
                                                <Svg.Arrow.ChevronBack
                                                    className='shrink-0 rotate-90 text-primary-text' />
                                            )}
                                        </>
                                    )}
                                </div>
                                {menuItem.subTabs && hoveredItemId === menuItem.id && (
                                    <ul className='flex flex-col gap-4 mt-4'>
                                        {menuItem.subTabs.map((subMenuItem, index) => (
                                            <li className={cn('border-b border-b-border-foreground pb-2 cursor-pointer',
                                                index === menuItem.subTabs.length - 1 && 'border-none')}
                                                key={subMenuItem.id}
                                                onClick={() => {
                                                    if (subMenuItem.target) {
                                                        window.open(subMenuItem.slug, subMenuItem.target)
                                                    } else {
                                                        push(subMenuItem.slug)
                                                    }
                                                }}>
                                                <p className={cn('font-helvetica text-nowrap text-[16px] leading-[24px] text-primary-text',
                                                    subMenuItem.label === 'Coming Soon' && 'text-link'
                                                )}>
                                                    {subMenuItem.label}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
                <div className='w-full flex flex-col gap-4 mt-6'>
                    <Button onClick={() => window.open(appLink, '_blank')} className='font-bold w-full'>Get Your Report</Button>
                    <Button variant='outline' className='font-normal w-full'
                        onClick={() => window.open(appLink, '_blank')}>Sign In</Button>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuItemsMobile;
