'use client'
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
// import Logo from '@/assests/Oratorieslogo.png'


const handleSlider = () => {
    if (isOpen !== undefined && setIsOpen !== undefined) {
      setIsOpen(!isOpen);
    }
  };

const NavigationMenuDemo = () => {
    
    return (

        <section className="flex flex-row justify-between pt-7">
        
        <Link
        href="/"
        className="ml-24"
        onClick={handleSlider}
        passHref>
        {/* <Image src={Logo} className="h-13 w-15 " alt="logo" /> */}
        <span className="text-xl inline-block font-bold">ORATORIS</span>
      </Link>
        <NavigationMenu.Root className="relative z-10 flex w-screen justify-center" >
            <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 hidden lg:flex">
                <NavigationMenu.Item>

                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 text-[15px] font-medium leading-none">
                        Learn{" "}
                        <CaretDownIcon
                            className="relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto outline bg-slate-400">
                        <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                            <li className="row-span-3 grid">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline  "
                                        href="/"
                                    >
                                        <svg
                                            aria-hidden
                                            width="38"
                                            height="38"
                                            viewBox="0 0 25 25"
                                            fill="white"
                                        >
                                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                                            <path d="M12 0H4V8H12V0Z"></path>
                                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                                        </svg>
                                        <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                                            Radix Primitives
                                        </div>
                                        <p className="text-[14px] leading-[1.3] text-mauve4">
                                            Unstyled, accessible components for React.
                                        </p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>
                            
							<ListItem href="https://stitches.dev/" title="Stitches">
								CSS-in-JS with best-in-class developer experience.
							</ListItem>
							<ListItem href="/colors" title="Colors">
								Beautiful, thought-out palettes with auto dark mode.
							</ListItem>
							<ListItem href="https://icons.radix-ui.com/" title="Icons">
								A crisp set of 15x15 icons, balanced and consistent.
							</ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>


{/* new */}
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 text-[15px] font-medium leading-none">
                        Overview{" "}
                        <CaretDownIcon
                            className="relative top-px  transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto bg-slate-400">
                        <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                            <ListItem
                                title="Introduction"
                                href="/primitives/docs/overview/introduction"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </ListItem>
                            <ListItem
                                title="Getting started"
                                href="/primitives/docs/overview/getting-started"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </ListItem>
                            <ListItem title="Styling" href="/primitives/docs/guides/styling">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </ListItem>
                            <ListItem
                                title="Animation"
                                href="/primitives/docs/guides/animation"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </ListItem>
                            <ListItem
                                title="Accessibility"
                                href="/primitives/docs/overview/accessibility"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </ListItem>
                            <ListItem
                                title="Releases"
                                href="/primitives/docs/overview/releases"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
{/* new */}

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="block select-none rounded px-3 text-[15px] font-medium leading-none"
                        href="https://github.com/anshhvarma/ORATORIS"
                    >
                        Github
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
                    <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-black" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
                <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
        </NavigationMenu.Root>
        <div className="mr-24 text-xl hidden lg:flex"> 
            Search 
        </div>
        </section>
    );
};

const ListItem = React.forwardRef(
    ({ className, children, title, ...props }, forwardedRef) => (
        <li>
            <NavigationMenu.Link asChild>
                <a
                    className={classNames(
                        "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
                        className,
                    )}
                    {...props}
                    ref={forwardedRef}
                >
                    <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
                        {title}
                    </div>
                    <p className="leading-[1.4] text-mauve11">{children}</p>
                </a>
            </NavigationMenu.Link>
        </li>
    )
);

ListItem.displayName = "ListItem";

export default NavigationMenuDemo;
