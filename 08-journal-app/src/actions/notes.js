
import Swal from 'sweetalert2';

import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';
import { startLoading, finishLoading } from './ui';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        const newNote = {
            title:  '',
            body:   '',
            date:   new Date().getTime(),
        }

        dispatch(startLoading());

        try {
            const doc = await db.collection(`${ uid }/journal/notes`).add(newNote);
            
            dispatch(activeNote(doc.id, newNote));
            dispatch(addNewNote(doc.id, newNote));

            Swal.fire('New note added', '', 'success');
        } catch(err) {
            Swal.fire('Error adding new note', '', 'error');
        }

        dispatch(finishLoading());
    }
}

export const activeNote = (id, note) => ({
    type:       types.notesActive,
    payload:    {
        id,
        ...note,
    },
});

export const addNewNote = (id, note) => ({
    type:   types.notesAddNew,
    payload: {
        id,
        ...note,
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type:       types.notesLoad,
    payload:    notes,
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if(!note.url) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        try{
            await db.doc(`${ uid }/journal/notes/${ note.id }`).update(noteToFirestore);
            dispatch(refreshNote(note.id, note));
            Swal.fire('Saved', note.title, 'success');

        } catch(err) {
            Swal.fire('Error saving', note.title, 'error');
        }
    }
}

export const refreshNote = (id, note) => ({
    type:       types.notesUpdated,
    payload:    {
        id:     id,
        note:   note,
    },
});

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;

        Swal.fire({
            title:              'Uploading...',
            text:               'Please wait...',
            allowOutsideClick:  false,
            onBeforeOpen:       () => {
                Swal.showLoading();
            },
        });

        const fileUrl   = await fileUpload(file);
        activeNote.url  = fileUrl;
        dispatch(startSaveNote(activeNote));

        Swal.close();
    }
}

export const startDeleting = (note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
        
        if(!result.value)
            return;

        dispatch(startLoading());
        
        try {
            await db.doc(`/${ uid }/journal/notes/${ note.id }`).delete();
            dispatch(deleteNote(note.id));
            Swal.fire('Deleted', note.title, 'success');
        } catch(err) {
            Swal.fire('Error deleting', note.title, 'error');
        }

        dispatch(finishLoading());
    }
}

export const deleteNote = (id) => ({
    type:       types.notesDelete,
    payload:    id,
});

export const noteLogout = () => ({
   type: types.notesLogoutCleaning, 
});