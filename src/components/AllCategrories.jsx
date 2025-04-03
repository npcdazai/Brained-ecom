"use client"

import { Button } from "@chakra-ui/react"
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "../components/ui/drawer"
import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { MdKeyboardArrowDown } from "react-icons/md"

const AllCategrories = () => {
    const [open, setOpen] = useState(false)

    return (
        <DrawerRoot placement={"start"} size={"xs"} open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button borderRadius="none" color="#fff" fontSize="xs" bgColor="#00B207" >
                    <IoMenu />
                    All Categories
                    <MdKeyboardArrowDown />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </DrawerBody>
                <DrawerFooter>
                    <DrawerActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerActionTrigger>
                    <Button>Save</Button>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    )
}

export default AllCategrories