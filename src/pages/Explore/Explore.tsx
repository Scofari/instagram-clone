import { FC } from "react";
import { BiVideoPlus } from "react-icons/bi";
import styles from "./Explore.module.scss";

const Explore: FC = () => {
	return (
		<section className={styles.explore}>
			<main>
				<div className={styles.wrapper}>
					<div className={styles.item}>
						<img
							src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
							alt="cute cat"
						/>
					</div>
					<div className={styles.item}>
						<img
							src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
							alt="cute cat"
						/>
					</div>
					<div className={styles.item}>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/tCRbVEGHZlQ"
							frameBorder={0}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
						<BiVideoPlus className={styles.icon} />
					</div>
					<div className={styles.item}>
						<img
							src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
							alt=""
						/>
					</div>
					<div className={styles.item}>
						<img
							src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
							alt=""
						/>
					</div>
				</div>
			</main>
		</section>
	);
};

export default Explore;
