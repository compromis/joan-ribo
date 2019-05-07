import React from "react"
import { FormattedMessage } from "react-intl";

const Calendar = () => (
  <section className='container calendar' id='calendar'>
    <h2><FormattedMessage id="events_header"/></h2>
    <iframe title="Actes" src="https://calendar.google.com/calendar/embed?src=g9f425v99hhkneef0rlee1qvh8%40group.calendar.google.com&ctz=Europe%2FMadrid" style={{border: '0', padding: '30px;'}} width="100%" height={600} frameBorder={0} scrolling="no"></iframe>
  </section>
)

export default Calendar
