// src/types/blog.ts

import { StaticImageData } from "next/image";

export interface Blog {
    id: number;
    title: string;
    description: string;
    author: string;
    authorImage: string | StaticImageData; // You may want to change this to StaticImageData if using Next.js Image component
    date: string;
    tags: string[];
    imageUrl: string | StaticImageData; // You may want to change this to StaticImageData if using Next.js Image component
}
