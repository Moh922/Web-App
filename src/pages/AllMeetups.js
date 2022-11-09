import { useState, useEffect } from "react";

import MeetupList from "../compnents/meetups/MeetList";

function AllMeetupsPages() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://first-react-project-cd874-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []; 

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <>Loading...</>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPages;
