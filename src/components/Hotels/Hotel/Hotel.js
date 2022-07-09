import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';
function Hotel() {
	return (
		<div className={`card  ${styles.hotel}`}>
			<div className="card-body">
				<div className="row">
					<div className="col-4">
						<img src={hotelImg} alt="" className="img-fluid img-thumbnail" />
					</div>
					<div className="col-8">
						<div className="row">
							<div className="col">
								<p className={styles.title}>Pensjonat</p>
								<p className={styles.city}>Białystok</p>
							</div>
							<div className={`col ${styles.containerRating}`}>
								<h5>Ocena: 8.3</h5>
								<a
									href="#"
									className={`btn btn-primary mt-2 px-5`}
								>
									Pokaż
								</a>
							</div>
						</div>
					</div>
					<div className={`col-12 ${styles.contDesc}`}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hotel;
