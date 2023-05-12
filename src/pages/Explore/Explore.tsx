import React, { FC } from "react";
import { BiVideoPlus } from "react-icons/bi";
import styles from "./Explore.module.scss";

const Explore: FC = () => {
    return (
        <section className={styles.explore}>
            <main>
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <img
                            src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.item}>
                        <img
                            src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                            alt=""
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
                            src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.item}>
                        <img
                            src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Explore;
