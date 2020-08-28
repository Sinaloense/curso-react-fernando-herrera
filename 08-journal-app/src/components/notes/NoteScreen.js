import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();

    const { notes, ui } = useSelector(state => state);
    const { active: note } = notes;
    const { loading } = ui;

    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [dispatch, formValues]);

    const handleDelete = () => {
        dispatch(startDeleting(note));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                >

                </textarea>

                {
                    note.url &&
                        <div className="notes__image">
                            <img
                                src={ note.url }
                                alt="imagen"
                            />
                        </div>
                }
            </div>

            <button
                className="btn btn-danger"
                onClick={ handleDelete }
                disabled={ loading }
            >
                Delete
            </button>
        </div>
    )
}
