import { AnyNoteData } from './notes/note-types';

export type CollectionData = {
  uuid: string,
  name: string,
  imageUrl: string,
  notes: AnyNoteData[]
}
