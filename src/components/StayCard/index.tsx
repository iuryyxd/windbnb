import { StaysListProps } from "../Stays";
import { MdStar } from "react-icons/md";
import styles from "./StayCard.module.scss";
import 'aos/dist/aos.css';

function StayCard({
  superHost,
  title,
  rating,
  type,
  beds,
  photo,
}: StaysListProps) {
  return (
    <div className={styles.card} data-aos="fade-up">
      <div
        style={{
          background: `url(${photo}) no-repeat center`,
          backgroundSize: "cover",
        }}
        className={styles.card__img}
      />
      <div className={styles.card__infos}>
        <div className={styles.infos__main}>
          <div className={styles.info__left}>
            {superHost && (
              <span className={styles.info__superhost}>SUPER HOST</span>
            )}

            <p className={styles.info__type}>
              {type} {beds ? `. ${beds} bed${beds > 1 ? 's' : ''}` : ""}
            </p>
          </div>

          <span className={styles.info__rating}>
            <MdStar /> {rating}
          </span>
        </div>
        <h2 className={styles.card__title}>{title}</h2>
      </div>
    </div>
  );
}

export default StayCard;
