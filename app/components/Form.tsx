"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "./DatePicker";
import { Input } from "./Input";
import { Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { generateChangelog } from "../actions";
import { daysAgo } from "@/lib/utils";
import { format, parse } from "date-fns";

export function Form({
  defaultRepoUrl,
  defaultStartDate,
  defaultEndDate,
}: {
  defaultRepoUrl?: string;
  defaultStartDate?: Date;
  defaultEndDate?: Date;
}) {
  const [repoUrl, setRepoUrl] = useState<string>(defaultRepoUrl ?? "");
  const [startDate, setStartDate] = useState<Date>(
    defaultStartDate ?? daysAgo(7)
  );
  const [endDate, setEndDate] = useState<Date>(defaultEndDate ?? new Date());
  const [loading, setLoading] = useState(false);

  // Call a server action to trigger the job run
  const handleSubmit = useCallback(async () => {
    if (!repoUrl) return;
    setLoading(true);
  }, [repoUrl]);

  return (
    <form
      action={generateChangelog}
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 col-span-1 lg:col-span-5 xl:col-span-4 lg:sticky lg:top-20 h-fit p-0 sm:p-4 border-none sm:border border-slate-750 bg-transparent sm:bg-slate-900 rounded-md"
    >
      <div className="flex flex-col gap-y-2">
        <Input
          label="Enter a public repo URL"
          name="repoUrl"
          value={repoUrl}
          setValue={setRepoUrl}
          type="text"
          required
          fullWidth
        />
        <div className="flex gap-x-2 text-sm">
          <p>Try:</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setRepoUrl("https://github.com/triggerdotdev/trigger.dev");
            }}
            className="text-indigo-500 hover:text-indigo-400 transition"
          >
            Trigger.dev
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setRepoUrl("https://github.com/calcom/cal.com");
            }}
            className="text-indigo-500 hover:text-indigo-400 transition"
          >
            Cal.com
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setRepoUrl("https://github.com/supabase/supabase");
            }}
            className="text-indigo-500 hover:text-indigo-400 transition"
          >
            Supabase
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 sm:flex-row items-end gap-x-4 lg:flex-col lg:gap-y-4 lg:items-start">
        <div className="flex gap-4 w-full">
          <DatePicker label="From" date={startDate} setDate={setStartDate} />
          <input
            type="hidden"
            name="startDate"
            value={format(startDate, "yyyy-MM-dd")}
          />
          <DatePicker label="To" date={endDate} setDate={setEndDate} />
          <input
            type="hidden"
            name="endDate"
            value={format(endDate, "yyyy-MM-dd")}
          />
        </div>
        <Button
          size="lg"
          className="w-full sm:w-fit lg:w-full"
          disabled={loading || !repoUrl}
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <span className="whitespace-nowrap">Generate Changelog</span>
          )}
        </Button>
      </div>
    </form>
  );
}
