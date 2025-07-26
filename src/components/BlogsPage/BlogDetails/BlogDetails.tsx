import React from 'react';

type BlogDetailsProps = {
  slug: string;
};

const BlogDetails = ({ slug }: BlogDetailsProps) => {
  return (
    <div className="text-2xl font-bold">
      {slug}
    </div>
  );
};

export default BlogDetails;
