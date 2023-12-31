import React, { useState } from "react";

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

const ReservationForm = () => {
  const [date, setDate] = useState()
  return (
    <form className="flex flex-col gap-y-10">
      <div className="grid gap-[30px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label htmlFor='firstname'>First Name</Label>
            <Input id='firstname' type="text" />
          </div>
          <div>
            <Label htmlFor='lastname'>Last Name</Label>
            <Input id='lastname' type="text" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label>
              Date
            </Label>
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
          <div>
            <Label>
              TOPIC
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Topic</SelectLabel>
                  <SelectItem value="apple">Front-end Web-Dev</SelectItem>
                  <SelectItem value="pineapple">Back-end Web-Dev</SelectItem>
                  <SelectItem value="banana">ui/ux Design</SelectItem>
                  <SelectItem value="blueberry">Career</SelectItem>
                  <SelectItem value="grapes">Academics</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <Button className='uppercase w-full xl:w-auto xl:self-end'>Book Now</Button>
    </form>
  )
}

export default ReservationForm