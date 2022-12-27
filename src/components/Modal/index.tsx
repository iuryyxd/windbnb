import { useEffect, useState } from "react";
import { MdSearch, MdLocationPin } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "./Modal.module.scss";
import { FilterItem } from "../../App";

interface ModalProps {
  handleOpenModal: () => void;
  handleFilter: (a: FilterItem) => void;
}

function Modal({ handleOpenModal, handleFilter }: ModalProps) {
  const [filterType, setFilterType] = useState("local");
  const [local, setLocal] = useState<string | null>(null);
  const [guests, setGuests] = useState<number>(0);
  const [countAdults, setCountAdults] = useState<number>(0)
  const [countChildren, setCountChildren] = useState<number>(0)

  function handleIncreaseAdults() {
    setCountAdults(countAdults + 1)
  }

  function handleDecreaseAdults() {
    if(countAdults === 0) return false;
    setCountAdults(countAdults - 1)
  }

  function handleIncreaseChildren() {
    setCountChildren(countChildren + 1)
  }

  function handleDecreaseChildren() {
    if(countChildren === 0) return false;
    setCountChildren(countChildren - 1)
  }

  function sendFilters() {
    handleOpenModal()
    handleFilter({
        local: local,
        guests: guests
    })
  }

  useEffect(() => {
    setGuests(countAdults + countChildren)
  }, [countAdults, countChildren])

  return (
    <div className={styles.modal}>
      <nav className={styles.modal__menu}>
        <button className={styles.buttonLocal} onClick={() => setFilterType("local")}>
          <p>LOCATION</p> <span>{local ? `${local}, Finland` : 'Add location'}</span>
        </button>
        <button className={styles.buttonGuests} onClick={() => setFilterType("guests")}>
          <p>GUESTS</p> <span>{guests === 0 ? 'Add guests' : guests}</span>
        </button>
        <button className={styles.buttonSearch} onClick={sendFilters}>
          <div>
            <MdSearch /> Search
          </div>
        </button>
      </nav>

      {filterType === "local" && (
        <div className={styles.modal__filter_local}>
          <button onClick={() => setLocal('Helsinki')} >
            <MdLocationPin /> <span>Helsinki, Finland</span>
          </button>
          <button onClick={() => setLocal('Turku')}>
            <MdLocationPin /> <span>Turku, Finland</span>
          </button>
          <button onClick={() => setLocal('Oulu')}>
            <MdLocationPin /> <span>Oulu, Finland</span>
          </button>
          <button onClick={() => setLocal('Vaasa')}>
            <MdLocationPin /> <span>Vaasa, Finland</span>
          </button>
        </div>
      )}

      {filterType === "guests" && (
        <div className={styles.modal__filter_guests}>
          <div className={styles.guests__container}>
            <div className={styles.guests__title}>
              <p>Adults</p>
              <span>Ages 13 or above</span>
            </div>
            <div className={styles.guests__filter}>
              <button className={styles.guests__button} onClick={handleDecreaseAdults}>
                <FiMinus />
              </button>
              <span className={styles.guests__number}>{countAdults}</span>
              <button className={styles.guests__button} onClick={handleIncreaseAdults}>
                <FiPlus />
              </button>
            </div>
          </div>

          <div className={styles.guests__container}>
            <div className={styles.guests__title}>
              <p>Children</p>
              <span>Ages 2-12</span>
            </div>
            <div className={styles.guests__filter}>
              <button className={styles.guests__button} onClick={handleDecreaseChildren}>
                <FiMinus />
              </button>
              <span className={styles.guests__number}>{countChildren}</span>
              <button className={styles.guests__button} onClick={handleIncreaseChildren}>
                <FiPlus />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
