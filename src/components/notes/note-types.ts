// TODO: figure out a better file layout for component-related
// type definitions

// Using a file in the /components area to declare a type
// bugs me, but OTOH I'm not a fan of centralizing the types
// and thus keeping them far from their implementations.

// Possible solutions:
// - add a /types dir in the components, create definitions there
// - centralize types in app
// - just live with it
// ??

export type NoteData = {
  uuid: string,
  type: string,
  name: string,
}

export type NoteAudioText1Data = NoteData & {
  text: string,
  imageUrl: string,
  audioUrl: string
}

/**
  * Note that I'm using the _Any_ prefix with a different
  * meaning to that used by Redux in the AnyAction type.
  *
  * For Redux, AnyNote means "a note with any other props added",
  * but in this case note means "any type that extends Note via intersection"
*/
export type AnyNoteData = (NoteAudioText1Data);
