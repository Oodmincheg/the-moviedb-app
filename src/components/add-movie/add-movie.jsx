import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input } from '../controls/input';
import { Button } from '../controls/button';
import { GenresList } from '../genres';
import { Textarea } from '../controls/textarea';
import { closeForm } from '../../store/actions';
import { getItemFromLocalStorage } from '../../services';
import './add-movie.css';

class AddMovie extends Component {
    constructor(props) {
        super(props)
        this.defaultPoster = '../../assets/default_poster.jpg';
        this.loadInView = this.loadInView.bind(this);
        this.checkValidation = this.checkValidation.bind(this);
        this.uploadPoster = this.uploadPoster.bind(this);
        this.state = {
            title: '',
            overview: '',
            genre_ids: [],
            id: Math.round(Math.random() * 100000),
            adult: false,
            poster: this.defaultPoster,
            countOfPosters: 0,
            genresFromLS: getItemFromLocalStorage('genres') || []
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
        if (this.state.title && this.state.genre_ids && this.state.countOfPosters !== 0) {
            return false;
        }
        return true;
    }

    onTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    onOverviewChange(e) {
        this.setState({ overview: e.target.value });
    }

    onAdultChage(e) {
        this.setState({ adult: e.target.checked })
    }

    uploadPoster() {
        this.setState((prevState) => ({
            countOfPosters: prevState.countOfPosters += 1
        }));
    }

    handleGenreChange(e) {
        const target = e.target;
        const value = target.value;
        if (target.checked === true) {
            this.setState((prevState) => ({
                genre_ids: prevState.genre_ids.concat(value)
            }));
        } else {
            this.setState((prevState) => ({
                genre_ids: prevState.genre_ids.filter((item) => {
                    return item !== value;
                })
            }));
        }
    }

    formSubmit(e) {
        e.preventDefault();
        let genreIds = this.state.genresFromLS.filter((genre) => {
            return this.state.genre_ids.includes(genre.name);
        });
        const item = {
            title: this.state.title,
            overview: this.state.overview,
            genre_ids: genreIds.map(elem => elem.id),
            adult: this.state.adult,
            id: this.state.id,
            poster: this.state.poster
        }
        if (this.props.addCustomMovie) {
            this.props.addCustomMovie(item);
            this.props.closeForm();
        }
    }

    loadInView(file, elem) {
        var fileReader = new FileReader();
        fileReader.onloadend = () => {
            elem.src = fileReader.result;
            this.setState(() => ({
                poster: elem.src
            }));
        }
        fileReader.readAsDataURL(file);
    }

    render() {
        const { isOpened, closeForm } = this.props;
        return (
            <form className='mdb-container-form' onSubmit={this.formSubmit.bind(this)}>
                <div className={!isOpened ? 'mdb-container-form__wrapper' : 'mdb-container-form__wrapper mdb-container-form__wrapper--open'}>
                    <h3 className='mdb-container-form__caption'>Add Movie</h3>
                    <hr className='mdb-container-form__line' />
                    <div className='mdb-container-form__input-area'>
                        <div>
                            <Input
                                type='text'
                                className='mdb-container-form__title'
                                classNameForWrapper='mdb-container-form__title-wrapper'
                                label='Title'
                                name='title'
                                onChange={this.onTitleChange.bind(this)}
                            />
                            <p className={this.state.title.length === 0 ?
                                'mdb-container-form__validation-fail'
                                :
                                'mdb-container-form__validation-success'}
                            >Title is required</p>
                            <Textarea
                                className='mdb-container-form__textarea'
                                classNameForLabel='mdb-container-form__label'
                                classNameForWrapper='mdb-container-form__overview-wrapper'
                                label='Overview'
                                name='overview'
                                onChange={this.onOverviewChange.bind(this)}
                            />
                        </div>
                        <div className='mdb-container-form__checkbox-wrapper'>
                            <label>Genres</label>
                            <div className='mdb-container-form__genres'>
                                <GenresList
                                    onClickHandler={this.handleGenreChange.bind(this)}
                                />

                            </div>
                            <p className={this.state.genre_ids.length === 0 ?
                                'mdb-container-form__validation-fail'
                                : 'mdb-container-form__validation-success'}
                            >Genres is required</p>
                            <input
                                name='adult'
                                type='checkbox'
                                className='mdb-container-form__checkbox-adult'
                                onChange={this.onAdultChage.bind(this)}
                            />
                            <label htmlFor="adult">Adult</label>
                        </div>
                        <div className='mdb-container-form__submit'>
                            <div
                                className='mdb-container-form__drop-files'
                                draggable='true'
                                ref={div => { this.dropzone = div }}
                            >
                                <i className="fa fa-upload fa-2x"></i>
                                Upload Posters
                            </div>
                            <p className={this.state.countOfPosters === 0 ?
                                'mdb-container-form__validation-fail'
                                :
                                'mdb-container-form__validation-success'}
                            >Upload 1 poster as minimum</p>
                            <div className={!this.state.countOfPosters ?
                                'mdb-container-form__droped' :
                                'mdb-container-form__droped mdb-container-form__droped--scroll'}
                            >
                                <img src='' alt='' className='mdb-container-form__dropped-image'
                                    ref={img => { this.dropped = img }} />
                            </div>
                            <div className='mdb-container-form__buttons-wrapper'>
                                <Button
                                    type='submit'
                                    className='mdb-container-form__button'
                                    modifier='mdb-container-form__button--add'
                                    label='Add'
                                    disabled={this.checkValidation()}
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
    closeForm: (e) => {
        dispatch(closeForm())
        e.preventDefault();
    }
})

export const AddMovieForm = connect(mapStateToProps, mapDispatchToProps)(AddMovie);