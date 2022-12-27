import React from "react";
import styles from "./Header.module.scss";
import windbnbLogo from "../../assets/logo.svg";
import { MdSearch } from "react-icons/md";
import { FilterItem } from "../../App";

interface HeaderProps {
  handleOpenModal: () => void;
  filterItems: FilterItem | undefined;
}

function Header({ handleOpenModal, filterItems }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img
          src={windbnbLogo}
          alt="logo da windbnb"
          className={styles.header__logo}
        />

        <nav className={styles.header__menu}>
          <button className={styles.buttonLocal} onClick={handleOpenModal}>
            {filterItems?.local ? filterItems.local : "Add local"}
          </button>
          <button className={styles.buttonGuests} onClick={handleOpenModal}>
            {filterItems?.guests ? `${filterItems.guests} guests` : "Add guests"}
          </button>
          <button className={styles.buttonSearch} onClick={handleOpenModal}>
            <MdSearch />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
