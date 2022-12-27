import { useEffect, useState } from "react";
import Header from "./components/Header";
import styles from "./App.module.scss";
import Stays, { StaysListProps } from "./components/Stays";
import staysData from "./utils/stays.json";
import Modal from "./components/Modal";

export interface FilterItem {
  local: string | null;
  guests: number | null;
}

function App() {
  const [staysList, setStaysList] = useState<StaysListProps[]>(staysData);
  const [openModal, setOpenModal] = useState(false)
  const [filter, setFilter] = useState<FilterItem>()

  function handleOpenModal() {
    setOpenModal(!openModal)
  }

  function handleFilter(filterInfo: FilterItem) {

    setFilter(filterInfo)

    if(filterInfo.local && filterInfo.guests !== 0) {
      const newList = staysData.filter((list) => list.city === filterInfo.local && list.maxGuests === filterInfo.guests)
      setStaysList(newList)
    } else if(filterInfo.local && filterInfo.guests === 0) {
      const newList = staysData.filter((list) => list.city === filterInfo.local)
      setStaysList(newList)
    } else if(!filterInfo.local && filterInfo.guests !== 0) {
      const newList = staysData.filter((list) => list.maxGuests === filterInfo.guests)
      setStaysList(newList)
    } else if(!filterInfo.local && filterInfo.guests === 0) {
      const newList = staysData
      setStaysList(newList)
    }
    
    
  }

  return (
    <>
    {/* filterItems={filter} */}
      {openModal && <Modal handleOpenModal={handleOpenModal} handleFilter={handleFilter}/>}
      <Header handleOpenModal={handleOpenModal} filterItems={filter} />
      <Stays staysList={staysList} />
      <footer className={styles.app__footer}>
        <p>
          Desenvolvido por <a target="_blank" href="https://github.com/iuryyxd">Iury</a> - devChallenges.io
        </p>
      </footer>
    </>
  );
}

export default App;
