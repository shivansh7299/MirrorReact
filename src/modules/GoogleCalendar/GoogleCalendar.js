/* global gapi */

import React, { ReactNode, SyntheticEvent } from "react";
import ApiCalendar from "react-google-calendar-api/ApiCalendar";
import moment from "moment";
import { clientId, apiKey } from "./GoogleCalendar.config.json";
export default class DoubleButton extends React.Component {
  state = {
    time: moment().format("dd, Do MMMM, h:mm A"),
    events: [],
    isBusy: false,
    isEmpty: false,
    isLoading: true,
  };
  componentDidMount = () => {
    this.getEvents();
    setInterval(() => {
      this.tick();
    }, 1000);
    setInterval(() => {
      this.getEvents();
    }, 60000);
  };

  getEvents() {
    let that = this;
    function start() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${clientId}/events?maxResults=11&orderBy=updated&timeMin=${moment().toISOString()}&timeMax=${moment()
              .endOf("day")
              .toISOString()}`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            let sortedEvents = events.sort(function (a, b) {
              return (
                moment(b.start.dateTime).format("YYYYMMDD") -
                moment(a.start.dateTime).format("YYYYMMDD")
              );
            });
            if (events.length > 0) {
              that.setState(
                {
                  events: sortedEvents,
                  isLoading: false,
                  isEmpty: false,
                },
                () => {
                  that.setStatus();
                }
              );
            } else {
              that.setState({
                isBusy: false,
                isEmpty: true,
                isLoading: false,
              });
            }
          },
          function (reason) {
            console.log(reason);
          }
        );
    }
    gapi.load("client", start);
  }

  tick = () => {
    let time = moment().format("dddd, Do MMMM, h:mm A");
    this.setState({
      time: time,
    });
  };

  setStatus = () => {
    let now = moment();
    let events = this.state.events;
    for (var e = 0; e < events.length; e++) {
      var eventItem = events[e];
      if (
        moment(now).isBetween(
          moment(eventItem.start.dateTime),
          moment(eventItem.end.dateTime)
        )
      ) {
        this.setState({
          isBusy: true,
        });
        return false;
      } else {
        this.setState({
          isBusy: false,
        });
      }
    }
  };

  render() {
    const { time, events } = this.state;

    let eventsList = events.map(function (event) {
      return (
        <a
          className="list-group-item"
          href={event.htmlLink}
          target="_blank"
          key={event.id}
        >
          {event.summary}{" "}
          <span className="badge xsmall">
            {moment(event.start.dateTime).format("h:mm a")},{" "}
            {moment(event.end.dateTime).diff(
              moment(event.start.dateTime),
              "minutes"
            )}{" "}
            minutes, {moment(event.start.dateTime).format("MMMM Do")}{" "}
          </span>
        </a>
      );
    });

    let emptyState = (
      <div className="empty xsmall">
        <h3>
          No meetings are scheduled for the day. Create one by clicking the
          button below.
        </h3>
      </div>
    );

    let loadingState = <div className="loading"></div>;

    return (
      <div className="container xsmall">
        <div
          className={
            this.state.isBusy ? "current-status busy" : "current-status open"
          }
        >
          <h1>{this.state.isBusy ? "BUSY" : "OPEN"}</h1>
        </div>
        <div className="upcoming-meetings">
          <div className="current-time">{time}, 2018</div>
          <h1>Upcoming Meetings</h1>
          <div className="list-group">
            {this.state.isLoading && loadingState}
            {events.length > 0 && eventsList}
            {this.state.isEmpty && emptyState}
          </div>
          <a
            className="primary-cta"
            href="https://calendar.google.com/calendar?cid=c3FtMnVkaTFhZGY2ZHM3Z2o5aDgxdHVldDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
            target="_blank"
          >
            +
          </a>
        </div>
      </div>
    );
  }
}
