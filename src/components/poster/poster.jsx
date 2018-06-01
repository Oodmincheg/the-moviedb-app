import React from 'react';
import './poster.scss';

const classNames = {
	view: 'mdb-poster__view',
	selected: 'mdb-poster__view mdb-poster__view--selected',
	save: 'fas fa-save mdb-poster__button mdb-poster__button--save',
	remove: 'fas fa-trash-alt mdb-poster__button mdb-poster__button--remove',
	info: 'fas fa-info mdb-poster__button'
};


export const Poster = ({
	style,
	width,
	height,
	alt,
	item,
	addItemToLibrary,
	removeItemFromLibrary,
	children
}) => {

	function addItem(e) {
		e.preventDefault();
		addItemToLibrary(item);
	}

	function removeItem(e) {
		e.preventDefault();
		removeItemFromLibrary(item);
	}

	return (
		<div className='mdb-poster'>
			<div
				className={item.isInLibrary ? classNames.selected : classNames.view}
				style={{ background: `url(${style})`, width: `${width}`, height: `${height}` }}
				alt={alt}
			>
				<div className='mdb-poster__buttons'>
					<i className={classNames.info}></i>
					{
						item.isInLibrary ?
							<i
								className={classNames.remove}
								onClick={removeItem}
								title='Remove from library'
							>
							</i> :
							<i
								className={classNames.save}
								onClick={addItem}
								title='Add to library'
							></i>
					}
					<div className='mdb-poster__children'>{children}</div>
				</div>
			</div>
		</div>
	);
};