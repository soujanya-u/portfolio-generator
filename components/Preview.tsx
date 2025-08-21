"use client";

import React, { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

interface PreviewProps {
  markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const convertMarkdown = async () => {
      const processed = await remark().use(html).process(markdown);
      setContent(processed.toString());
    };

    convertMarkdown();
  }, [markdown]);

  return (
    <div
      className="p-4 border rounded bg-white shadow"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Preview;
