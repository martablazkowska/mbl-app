'use client';

import CommonError from '@/components/common/Errors/CommonError';

export default function Error({ reset }: { reset: () => void }) {
  return <CommonError reset={reset} />;
}
