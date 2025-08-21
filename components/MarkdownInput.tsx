"use client";

import React from "react";

interface MarkdownInputProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ markdown, setMarkdown }) => {
  return (
    <textarea
      className="w-full h-96 p-4 border rounded bg-white text-black"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Write your portfolio in Markdown..."
    />
  );
};

export default MarkdownInput;
