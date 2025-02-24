import type * as Prisma from '@prisma/client';

export interface IGqlContext {
  user?: Prisma.User | null;
  isAdmin?: boolean;
}

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  coverImage?: string;
  content?: string;
};