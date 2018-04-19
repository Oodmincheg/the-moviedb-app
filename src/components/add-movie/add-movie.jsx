import React, { Component } from 'react'
import { connect } from 'react-redux';
import { genres } from '../../data/genres';
import { CheckBox } from '../controls/checkbox';
import { Input } from '../controls/input';
import { Button } from '../controls/button';
import { Textarea } from '../controls/textarea';
import { closeForm, addCustomMovie } from '../../store/actions';
import './add-movie.css';

let key = 0;
class AddMovie extends Component {
   constructor(props) {
       super(props)
   }
    render() {
        console.log(this.props)
        const { isOpened, closeForm } = this.props;
        return (
            <form className='mdb-container-form' >
                <div className={!isOpened ? 'mdb-container-form__wrapper' : 'mdb-container-form__wrapper mdb-container-form__wrapper--open'}>
                    <h3 className='mdb-container-form__caption'>Add Movie</h3>
                    <hr className='mdb-container-form__line' />
                    <Input
                        type='text'
                        className='mdb-container-form__title'
                        classNameForLabel='mdb-container-form__label'
                        classNameForWrapper='mdb-container-form__title-wrapper'
                        label='Title'
                    />
                    <Textarea
                        className='mdb-container-form__textarea'
                        classNameForLabel='mdb-container-form__label'
                        classNameForWrapper='mdb-container-form__overview-wrapper'
                        label='Overview'
                    />
                    <div className='mdb-container-form__checkbox-wrapper'>
                        <label>Genres</label>
                        <ul className='mdb-container-form__genres'>
                            {genres.map(genre =>
                                <CheckBox
                                    type={genre.type}
                                    className='mdb-container-form__genres-list'
                                    classNameForItem='mdb-container-form__genres-item'
                                    label={genre.label}
                                    key={key++}
                                />
                            )}
                        </ul>
                        <input
                            type='checkbox'
                            className='mdb-container-form__checkbox-adult'
                        /> Adult
            </div>
                    <div className='mdb-container-form__buttons-wrapper'>
                        <Button
                            type='submit'
                            className='mdb-container-form__button'
                            modifier='mdb-container-form__button--add'
                            label='Add'
                        />
                        <Button
                            type='reset'
                            className='mdb-container-form__button'
                            modifier='mdb-container-form__button--cancel'
                            label='Cancel'
                            onClick={closeForm}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isOpened: state.formReducer.isFormOpen
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeForm: (event) => {
        dispatch(closeForm())
        event.preventDefault();
    }
})

export const AddMovieForm = connect(mapStateToProps, mapDispatchToProps)(AddMovie);