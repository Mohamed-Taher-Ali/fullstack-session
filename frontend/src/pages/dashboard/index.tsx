import { useEffect, useState } from 'react';

import { getContent } from '@src/services';

export default function DashboardPage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    getContent().then(({ data: { content } }) => {
      setContent(content);
    });
  }, []);

  return (
    <div className="flex h-[60vh] justify-center items-center text-xl">
      {content}
    </div>
  );
}
