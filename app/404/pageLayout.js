'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function FourNotFourLayout() {
  useEffect(() => {
    redirect('/');
  }, []);
  return (
    <>
      <h1>Loading....</h1>
    </>
  );
}
