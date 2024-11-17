import Link from 'next/link';
import { blogs } from '../../../../Data/blog';

const BlogsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-2">
            <Link href={`/blogs/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsPage;