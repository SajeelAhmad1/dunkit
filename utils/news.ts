// lib/news.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NewsItem } from '@/types';

const newsDirectory = path.join(process.cwd(), 'public/news/processed');

export function getAllNewsItems(): NewsItem[] {
  const newsFiles = fs.readdirSync(newsDirectory);
  const allNews = newsFiles
    .filter((filename) => {
      const filePath = path.join(newsDirectory, filename);
      return fs.statSync(filePath).isFile() && filename.endsWith('.md');
    })
    .map((filename) => {
      const filePath = path.join(newsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      // Create an excerpt from the content
      const excerpt = content.substring(0, 150).trim() + '...';

      return {
        title: data.title,
        author: data.author,
        date: data.date,
        coverImage: data.coverImage || '/assets/common/emblem.png',
        excerpt,
        slug: filename.replace(/\.md$/, ''),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allNews;
}

export function getNewsItem(slug: string): NewsItem {
  const filePath = path.join(newsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    author: data.author,
    date: data.date,
    coverImage: data.coverImage || '/assets/common/emblem.png',
    content,
    slug,
  };
}