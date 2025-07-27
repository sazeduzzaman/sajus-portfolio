import CommonBanner from '@/components/CommonBanner/CommonBanner';
import React from 'react';

export default async function page({ params }: any) {
  const { slug } = await params;
  return (
    <div>
      <CommonBanner
        title={slug}
        currentPage={slug}
        parentPage={{ href: `/projects/${slug}` }}
      />
    </div>
  );
};
