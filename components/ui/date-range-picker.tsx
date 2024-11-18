"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DatePickerWithRange({
  className,
  setDateRange,
}: React.HTMLAttributes<HTMLDivElement> & {
  setDateRange: (range: { from: Date; to: Date } | undefined) => void
}) {
  const [date, setDate] = React.useState<DateRange | undefined>()

  const handleSelectChange = (value: string) => {
    const today = new Date()
    let from: Date, to: Date

    switch (value) {
      case "7days":
        from = addDays(today, -7)
        to = today
        break
      case "30days":
        from = addDays(today, -30)
        to = today
        break
      case "lastMonth":
        from = new Date(today.getFullYear(), today.getMonth() - 1, 1)
        to = new Date(today.getFullYear(), today.getMonth(), 0)
        break
      default:
        return
    }

    setDate({ from, to })
    setDateRange({ from, to })
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select time range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7days">Last 7 days</SelectItem>
          <SelectItem value="30days">Last 30 days</SelectItem>
          <SelectItem value="lastMonth">Last month</SelectItem>
          <SelectItem value="custom">Custom</SelectItem>
        </SelectContent>
      </Select>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(newDate) => {
                setDate(newDate);
                if (newDate?.from && newDate?.to) {
                  setDateRange({ from: newDate.from, to: newDate.to });
                } else {
                  setDateRange(undefined);
                }
              }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}