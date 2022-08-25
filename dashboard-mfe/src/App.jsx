import React from "react";
import ReactDOM from "react-dom";

import useClient from "olympus_mfe/store";
// import Header from "olympus_mfe/header";

import "./index.css";

const App = () => {
  // zustand store
  // const { client } = useClient();

  const client = window.localStorage.getItem("client");

  const dashboardByClient = new Map([
    [
      "cool-company",
      {
        employees: {
          value: 123,
        },
        member: {
          value: 80,
          variation: "+1",
        },
        subs: {
          value: 30,
          variation: "+9",
        },
        actvSubs: {
          value: 20,
          variation: "+6",
        },
      },
    ],
    [
      "nice-company",
      {
        employees: {
          value: 456,
        },
        member: {
          value: 234,
          variation: "+70",
        },
        subs: {
          value: 158,
          variation: "+32",
        },
        actvSubs: {
          value: 118,
          variation: "+15",
        },
      },
    ],
    [
      "wonder-company",
      {
        employees: {
          value: 20,
        },
        member: {
          value: 6,
          variation: "+2",
        },
        subs: {
          value: 6,
          variation: "+2",
        },
        actvSubs: {
          value: 4,
          variation: "+4",
        },
      },
    ],
  ]);

  const data = dashboardByClient.get(client) || dashboardByClient.get("wonder-company");

  return (
    <>
      <div className="container">
        <section>
          <h3>Employees</h3>
          <h4>{data.employees.value}</h4>
        </section>

        <section>
          <h3>Members</h3>
          <h4>{data.member.value}</h4>
          <p>
            <span>{data.member.variation}</span> on last 7 days
          </p>
        </section>

        <section>
          <h3>Subscribers</h3>
          <h4>{data.subs.value}</h4>
          <p>
            <span>{data.subs.variation}</span> on last 7 days
          </p>
        </section>

        <section>
          <h3>Active subscribers</h3>
          <h4>{data.actvSubs.value}</h4>
          <p>
            <span>{data.actvSubs.variation}</span> on last 7 days
          </p>
        </section>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
