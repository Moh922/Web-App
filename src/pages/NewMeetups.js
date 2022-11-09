import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../compnents/meetups/NewMeetupForm";

function NewMeetupsPages () {
    const history = useHistory();
    function addMeetupHandleer(meetupData) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        headers.append("Origin", "htttp://localhost:3000");
        fetch(
            'https://first-react-project-cd874-default-rtdb.firebaseio.com/meetups.json,',
          {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: Headers
          }
        ).then(() => {
            history.replace('/')
        })

    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandleer}/>
    </section>
};

export default NewMeetupsPages;