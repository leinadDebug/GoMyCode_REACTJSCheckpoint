import React from "react";
// import './/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Cards from "./component/cards";
// -----------------------------------------------------------------importations

function App() {
  return (

    <div className="App">
      {/* --------------------------------------------navbar of dropdown sections */}
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        {/* ----------------------------------------------- empty home page section */}
        <Tab eventKey="home" title="Home">
          ...
        </Tab>
        {/* ----------------------------------------------------profile page with Cards and  */}
        <Tab eventKey="profile" title="Profile" style={{ display: "flex" }}>
          <div
            style={{
              width: "25%",
              backgroundColor: "rgb(231,252,231)",
              padding: "1em",
              border: "1px solid black",
              boxShadow: "10px 10px 13px 0px rgba(0,0,0,0.75)",
              cursor: "none",
              margin: "5% 10%",
            }}
          >
            <h1
              style={{
                fontFamily: "Roboto",
                fontWeight: "bolder",
                background: "black",
                color: "white",
              }}
            >
              GOMYC<span style={{ color: "red" }}>O</span>DE
            </h1>
            <p>
              The{" "}
              <span
                style={{
                  fontSize: "20px",
                }}
              >
                PeriDot
              </span>{" "}
              cohort's training at GoMyCode Institute in Ikeja, Lagos, Nigeria,
              was a rigorous and challenging experience that they approached
              with unwavering determination. Specializing in Full-stack
              JavaScript was no walk in the park, but they found a unique sense
              of camaraderie and enjoyment in the midst of the tough and serious
              sessions. Under the vigilant guidance of their instructor, Paul
              Momoh, these individuals embarked on a demanding journey to master
              the intricacies of web development. Their progress was marked by
              mastering essential technologies such as HTML, CSS, JavaScript,
              React, and they were currently navigating the complexities of
              Redux.<br/>Though the sessions were tough and demanding, the PeriDot cohort
              found a sense of fulfillment and even enjoyment in tackling
              complex coding problems, debugging issues, and learning to work
              seamlessly as a team. They realized that the journey to becoming
              Full-stack JavaScript developers was not only about overcoming
              challenges but also about relishing the learning process.
              
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2em",
              paddingTop: "18px",
            }}
          >
            <Cards
              img=""
              name="leinad"
              content="Daniel's extensive experience in development brought a sense of gravitas to the group. His intellectual prowess added depth to the cohort's discussions and problem-solving sessions."
              age="20"
              gender="Male"
              link="https://github.com/lumixAr12"
            />
            <Cards
              img=""
              name="AY"
              content="Ay, the scholar and aeronautic engineer, had a unique blend of technical knowledge and problem-solving skills. His experience with XML, CSS, and JavaScript added a layer of versatility to the group."
              age="25"
              gender="Male"
              link=""
            />
            <Cards
              img=""
              name="Julia"
              content="Julia, the entrepreneur and business marketer, provided a pragmatic perspective to the group. She helped the cohort see the broader business implications of their technical decisions."
              age="29"
              gender="female"
              link=""
            />
            <Cards
              img=""
              name="Aminu"
              content="Aminu's logical thinking and deep insight into Back-End development made him an invaluable asset. He approached challenges with a level of precision that was both impressive and inspiring."
              age="26"
              gender="Male"
              link=""
            />
            <Cards
              img=""
              name="Pipe"
              content="Pipe, a recent graduate with a strong grasp of TypeScript and CSS, was the go-to person for anything related to user interfaces. His expertise made the challenging tasks more manageable."
              age="25"
              gender="female"
              link="https://github.com/pipe-justpipe"
            />
          </div>
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab" disabled>
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
