import React from 'react';
import './styles.module.css';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

export default function MarkdownView({src}: {src: string;}): React.JSX.Element {
  return <div className="markdown-box"><Markdown className="markdown-body" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>{src}</Markdown></div>;
}