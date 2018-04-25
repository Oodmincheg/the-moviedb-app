import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input } from '../controls/input';
import { Button } from '../controls/button';
import { GenresList } from '../genres';
import { Textarea } from '../controls/textarea';
import { closeForm, addCustomMovie } from '../../store/actions';
import { getItemFromLocalStorage } from '../../services';
import './add-movie.css';

class AddMovie extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this);
        this.defaultPoster = '../../assets/default_poster.jpg';
        this.state = {
            titile: '',
            overview: '',
            genre_ids: [],
            id: Math.round(Math.random() * 100000),
            adult: false,
            poster: this.defaultPoster
        };
    }

    componentDidMount() {
        this.dropzone.ondrop = (e) => {
            e.preventDefault();
            let file = e.dataTransfer.files[0];
            this.loadInView(file, this.dropped);
            this.uploadPoster();
        };
        this.dropzone.ondragover = function () {
            return false;
        };
        this.dropzone.ondragleave = function () {
            return false;
        };
    }

    checkValidation() {
        if (this.state.titile && this.state.genre_ids !== 0) {
            return false;
        }
        return true;
    }

    submit(e) {
        e.preventDefault();
        const newMovie = {
            title: this.state.title,
            overview: this.state.overview,
            genre_ids: this.state.genre_ids,
            adult: this.state.adult,
            id: this.state.id,
            poster: this.state.poster
        }
        this.props.addCustomMovie(newMovie);
    }

    loadInView(file, elem) {
        var fileReader = new FileReader();
        fileReader.onloadend = () => {
            elem.src = fileReader.result;
        }
        fileReader.readAsDataURL(file);
    }

    render() {
        console.log(this.props)
        const { isOpened, closeForm, addNewMovie } = this.props;
        return (
            <form className='mdb-container-form' onSubmit={this.submit.bind(this)}>
                <div className={!isOpened ? 'mdb-container-form__wrapper' : 'mdb-container-form__wrapper mdb-container-form__wrapper--open'}>
                    <h3 className='mdb-container-form__caption'>Add Movie</h3>
                    <hr className='mdb-container-form__line' />
                    <div className='mdb-container-form__input-area'>
                        <div>
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
                        </div>
                        <div className='mdb-container-form__checkbox-wrapper'>
                            <label>Genres</label>
                            <div className='mdb-container-form__genres'>
                                <GenresList />
                            </div>
                            <input
                                type='checkbox'
                                className='mdb-container-form__checkbox-adult'
                                ref='_adult'
                            /> Adult
            </div>
                        <div className='mdb-container-form__submit'>
                            <div className='mdb-container-form__drop-files' draggable='true'
                                ref={div => { this.dropzone = div }}>
                            </div>
                            <div className='mdb-container-form__droped'>
                                <img src=' alt=' className='mdb-container-form__dropped-image'
                                    ref={img => { this.dropped = img }} />
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
