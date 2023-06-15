import { AnyNote } from './notes/note-types';

export type CollectionData = {
  uuid: string,
  name: string,
  imageUrl: string,
  notes: AnyNote[]
}
