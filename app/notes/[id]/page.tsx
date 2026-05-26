import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { fetchNoteById } from '@/lib/api';

import NoteDetailsClient from './NoteDetails.client';

interface NoteDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NoteDetailsPage({
  params,
}: NoteDetailsPageProps) {
  const {id} = await params;

  

    return (
       <div>
      Note ID: {id}
    </div>
    // <HydrationBoundary
    //   state={dehydrate(queryClient)}
    // >
    //   <NoteDetailsClient />
    // </HydrationBoundary>
  );
}