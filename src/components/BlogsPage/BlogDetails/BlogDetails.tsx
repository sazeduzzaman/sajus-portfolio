import React from "react";

type Props = {
  slug: string; // still accepted but unused
};

const BlogDetails = ({ slug }: Props) => {
  // Static blog data
  const blog = {
    title: "My First Blog Post",
    author: "Boss",
    date: "2025-07-26",
    tags: ["React", "TypeScript", "Frontend"],
    content: `
      <p>This is the detailed content of my first blog post.</p>
      <p>Here you can add paragraphs, images, code snippets, and more.</p>
      <h3>Why I love React</h3>
      <p>React is great because it makes building interactive UIs easy.</p>
    `,
  };

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>
        <strong>Author:</strong> {blog.author} | <strong>Date:</strong> {blog.date}
      </p>
      <p>
        <strong>Tags:</strong> {blog.tags.join(", ")}
      </p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetails;
