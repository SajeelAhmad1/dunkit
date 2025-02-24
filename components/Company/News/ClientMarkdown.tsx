'use client';

import Markdown from 'react-markdown';

interface ClientMarkdownProps {
  content: string;
}

export default function ClientMarkdown({ content }: ClientMarkdownProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <Markdown>{content}</Markdown>
    </div>
  );
}