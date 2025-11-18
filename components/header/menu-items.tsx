import React, { useState } from "react";
import { Svg } from "../other";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MENUITEMS_LIST } from "@/utils/constant";
import { MenuItem } from "../shared/types";

const MenuItems = () => {
  const { push } = useRouter();
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const handleMenuItemClick = (
    menuItem: MenuItem,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    if (!menuItem.subTabs) {
      if (menuItem.target) {
        window.open(menuItem.slug, menuItem.target);
      } else {
        push(menuItem.slug);
      }
    }
  };
  const handleMouseEnter = (menuItem: MenuItem) => {
    if (menuItem.subTabs) {
      setHoveredItemId(hoveredItemId !== menuItem.id ? menuItem.id : null);
    } else {
      setHoveredItemId(null);
    }
  };
  //JSX
  return (
    <ul className="gap-4 flex-center">
      {MENUITEMS_LIST.map((menuItem) => (
        <li
          key={menuItem.id}
          className={cn(
            "flex-center gap-1 cursor-pointer relative p-2 2xl:px-4",
          )}
          onClick={(e) => handleMenuItemClick(menuItem, e)}
          onMouseEnter={() => handleMouseEnter(menuItem)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          <p
            className={cn(
              "font-helvetica text-nowrap text-[15px] leading-[21px] 2xl:text-lg text-primary-text",
              hoveredItemId === menuItem.id && "text-muted-text",
            )}
          >
            {menuItem.label}
          </p>
          {menuItem.subTabs && (
            <>
              {hoveredItemId === menuItem.id ? (
                <>
                  <Svg.Arrow.ChevronBack className="-rotate-90 text-muted-text" />
                  <div className="absolute left-0 flex-col gap-4 py-2 px-4 bg-white shadow-menuItem top-[32px]">
                    {menuItem.subTabs.map((subMenuItem, index) => {
                      return (
                        <p
                          key={subMenuItem.id}
                          onClick={() => {
                            if (subMenuItem.target) {
                              window.open(subMenuItem.slug, subMenuItem.target);
                            } else {
                              push(subMenuItem.slug);
                            }
                          }}
                          className={cn(
                            "font-helvetica text-nowrap text-[15px] leading-[21px] 2xl:text-lg text-secondary-text border-b border-b-border-foreground py-3 hover:text-popover-text",
                            menuItem.subTabs.length - 1 === index &&
                            "border-none",
                            subMenuItem.label === "Coming Soon" && "text-link",
                          )}
                        >
                          {subMenuItem.label}
                        </p>
                      );
                    })}
                  </div>
                </>
              ) : (
                <Svg.Arrow.ChevronBack className="rotate-90 text-primary-text" />
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

