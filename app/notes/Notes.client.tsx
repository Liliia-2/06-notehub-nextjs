'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';

export default function NotesClient() {
  const [page] = useState(1);

  const [search] = useState('');

  const { data, isLoading, error } =
    useQuery({
      queryKey: ['notes', page, search],
      queryFn: () =>
        fetchNotes({
          page,
          search,
        }),
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      {data?.notes.map(note => (
        <div key={note.id}>
          {note.title}
        </div>
      ))}
    </div>
  );
}