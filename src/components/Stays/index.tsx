import { useEffect } from "react";
import StayCard from "../StayCard";
import styles from "./Stays.module.scss";

export interface StaysListProps {
  city?: string;
  country?: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests?: number;
  type: string;
  beds: number | null;
  photo: string;
}

interface StaysProps {
  staysList: StaysListProps[];
  city: string | null;
}

function Stays({ staysList, city }: StaysProps) {
  return (
    <section className={`${styles.stays}`}>
      <div className={styles.stays__container}>
        <header className={styles.stays__header}>
          <h1 className={styles.header__title}>
            Stays in {city ? `${city},` : ""} Finland
          </h1>
          <span className={styles.header__info}>
            {staysList.length} stay{staysList.length > 1 ? "s" : ""}
          </span>
        </header>

        {staysList.length === 0 && (
          <div>We were unable to find stays with this filter applied!</div>
        )}
        <main className={styles.stays__list}>
          {staysList.map((list) => (
            <StayCard
              superHost={list.superHost}
              title={list.title}
              rating={list.rating}
              type={list.type}
              beds={list.beds}
              photo={list.photo}
              key={crypto.randomUUID()}
            />
          ))}
        </main>
      </div>
    </section>
  );
}

export default Stays;
