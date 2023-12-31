"use client"

import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import Link from "next/link"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

const StyleGuide = () => {
    const [date, setDate] = React.useState()
    return (
        <>
            <div className="flex flex-col gap-y-4 p-24">
                <h1>HEADING 1</h1>
                <h2>HEADING 2</h2>
                <h3>HEADING 3</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laboriosam in fugit excepturi impedit, necessitatibus repudiandae, suscipit ullam, praesentium doloremque porro debitis rerum velit. Eius ea magni necessitatibus autem eaque, sunt maiores qui totam adipisci cum blanditiis labore odio veritatis ipsa nihil. Ipsam, quam deserunt corporis error delectus porro officiis?
                </p>
            </div>
            <div className="bg-black p-24 flex flex-col gap-y-4">

                {/* LINK */}
                <Link href='/'>Click Now!!</Link>

                {/* BUTTON */}
                <Button variant='default'>Button 1</Button>
                <Button variant='orange'>Button 2</Button>
                <Button variant='input'>Button 3</Button>
                <Button variant='input' size='sm'>Button sm</Button>

                {/* LABEL AND INPUT */}
                <div>
                    <Label htmlFor='firstname'>First Label</Label>
                    <Input type='firstname' id='firstname' />
                </div>
                <div>
                    <Label htmlFor='lastname'>Last Label</Label>
                    <Input type='lastname' id='lastname' />
                </div>

                {/* CALENDAR */}
                <div>
                    <Label>Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"input"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {/* SELECT */}
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}

export default StyleGuide