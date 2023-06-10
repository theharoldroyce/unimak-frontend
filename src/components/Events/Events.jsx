import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  const [data, setData] = useState([]);

  useEffect(() => {
    const allEventsData = allEvents ? [...allEvents] : [];
    const sortedData = allEventsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allEvents]);

  return (
    <div>
      {
        !isLoading && (
          <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
              <h1>Popular Events</h1>
            </div>

            <div cclassName="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
              {
                data && data.length !== 0 && (
                  <>
                    {data && data.map((i, index) => <EventCard data={i} key={index} />)}
                  </>
                )
              }
            </div>

          </div>
        )
      }
    </div>
  )
}

export default Events

