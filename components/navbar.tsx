import { Navbar, NavbarBrand, NavbarContent, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ThemeSwitcher } from "./theme-switcher";

import { QrCodeIcon } from '@heroicons/react/24/outline'

import icons from "@/config/constants";

export const NavBar = () => {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <QrCodeIcon className="h-6 w-6 text-yellow-500" />
                <Link href="/" className="ml-2 font-bold text-inherit">QR - Scan It Easy</Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <ThemeSwitcher />

                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            color="primary" href="#"
                            variant="flat"
                            endContent={icons.resources}
                            radius="sm"
                        >
                            Resources
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="QR - Scan It Easy - features"
                        className="w-[200px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            href="/qr/url"
                            key="url_qr"
                            description="Generate a qr code for url"
                            startContent={icons.url}
                        >
                            URL
                        </DropdownItem>
                        <DropdownItem
                            href="/qr/v-card"
                            key="vcard_qr"
                            description="VCF (Virtual Contact File)"
                            startContent={icons.phone}
                        >
                            VCard
                        </DropdownItem>
                        <DropdownItem
                            href="/qr/wifi"
                            key="wifi_qr"
                            description="WIFI QR code"
                            startContent={icons.wifi}
                        >
                            WIFI
                        </DropdownItem>
                        <DropdownItem
                            href="/qr/text"
                            key="text_qr"
                            description="Text QR code"
                            startContent={icons.document}
                        >
                            Text
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}

export default Navbar