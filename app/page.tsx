"use client";

import { useState } from "react";
import MarkdownInput from "../components/MarkdownInput";
import Preview from "../components/Preview";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Portfolio Generator</h1>
        <ThemeSwitcher />
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left side: input box */}
        <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />

        {/* Right side: preview */}
        <Preview markdown={markdown} />
      </div>
    </main>
  );
}
