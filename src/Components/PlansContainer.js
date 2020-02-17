import React, { Component } from "react";
import { Card, Col, Row, Switch, Button } from "antd";
import "antd/dist/antd.css";
import { fetchPlansList } from "../Actions/PlansActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class PlansContainer extends Component {
  constructor() {
    super();

    //state for characters value//
    this.state = {
      active: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // switch function
  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  componentDidMount = () => {
    console.log("Invoices: Component mounted Vendor Dashboard");
    this.fetchPlans();
  };
  // fetch all Plans
  fetchPlans = () => {
    console.log("calling fetch Plans");
    let data = this.props.fetchPlansList({});
  };
  render() {
    console.log("plans in container", this.props.plans.data);
    console.log("render switch", this.state.switch);
    let plansList = null;
    let newList = null;
    let plansRenderList = [];
    if (
      this.props.plans &&
      this.props.plans.data &&
      this.props.plans.data.plans
    ) {
      plansList = this.props.plans.data.plans;
      if (plansList) {
        if (plansList) {
          console.log("Got it", plansList);
          plansList.map(plan => {
            if (!this.state.active) {
              if (plan.interval === "year") {
                let ele = null;
                // render only year data
                ele = (
                  <div
                    style={{
                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      transition: "2.5s",
                      width: "100%",
                      height: "35vh",
                      borderRadius: "15px",
                      alignItems: "center",
                      margin: "0 auto 0 auto",
                      marginTop: "80px",
                      marginBottom: "80px",
                      backgroundColor: "#FFF",
                      margin: "5px"
                    }}>
                    <div>
                      <div
                        style={{
                          display: "inlineBlock",
                          padding: "5px",
                          margin: "5px"
                        }}>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "orange"
                          }}>
                          {plan.planName}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "inlineBlock",
                          padding: "5px",
                          margin: "5px"
                        }}>
                        <span
                          style={{
                            fontSize: "20px"
                          }}>
                          {plan.planDescription}
                        </span>
                      </div>

                      <div
                        style={{
                          display: "inlineBlock",
                          padding: "5px",
                          margin: "5px"
                        }}>
                        {this.state.active && (
                          <span style={{ fontSize: "20px" }}>
                            {plan.currency} {plan.amount} {plan.currencySymbol}
                            {/* {console.log("original value")} */}
                          </span>
                        )}

                        {!this.state.active && (
                          <span style={{ fontSize: "20px" }}>
                            {console.log("new value")}
                            {plan.currency} 1212 {plan.currencySymbol}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          display: "inlineBlock",
                          padding: "5px",
                          margin: "5px"
                        }}>
                        <span
                          style={{
                            fontSize: "20px"
                          }}>
                          {plan.interval}
                        </span>
                      </div>

                      <div style={{ display: "inline", padding: "5px" }}>
                        <p style={{ fontSize: "20px" }}>{plan.features}</p>
                      </div>
                    </div>
                  </div>
                );
                console.log("ELE", ele);
                plansRenderList.push(ele);
              }
            } else {
              if (plan.interval === "monthly") {
                let ele = null;
                // render only monthly data
                ele = (
                  <div
                    style={{
                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      transition: "2.5s",
                      width: "100%",
                      height: "35vh",
                      borderRadius: "15px",
                      alignItems: "center",
                      margin: "0 auto 0 auto",
                      marginTop: "80px",
                      marginBottom: "80px",
                      backgroundColor: "#FFF",
                      margin: "5px"
                    }}>
                    <div>
                      <div
                        style={{
                          display: "inlineBlock",
                          padding: "5px",
                          margin: "5px"
                        }}>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "orange"
                          }}>
                          {plan.planName}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "inlineBlock",
                          padding: "5px",
                          margin: "5px"
                        }}>
                        <span
                          style={{
                            fontSize: "20px"
                          }}>
                          {plan.planDescription}
                        </span>
                      </div>

                      <div
                        style={{
                          display: "inlineBlock",
                          padding: "5px",
                          margin: "5px"
                        }}>
                        {this.state.active && (
                          <span style={{ fontSize: "20px" }}>
                            {plan.currency} {plan.amount} {plan.currencySymbol}
                          </span>
                        )}

                        {!this.state.active && (
                          <span style={{ fontSize: "20px" }}>
                            {console.log("new value")}
                            {plan.currency} 1212 {plan.currencySymbol}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          display: "inlineBlock",
                          padding: "5px",
                          margin: "5px"
                        }}>
                        <span
                          style={{
                            fontSize: "20px"
                          }}>
                          {plan.interval}
                        </span>
                      </div>

                      <div style={{ display: "inline", padding: "5px" }}>
                        <p style={{ fontSize: "20px" }}>{plan.features}</p>
                      </div>
                    </div>
                  </div>
                );
                plansRenderList.push(ele);
              }
            }
          });
        }
        newList = (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              padding: "10px",
              backgroundColor: "#F0F0F0",
              margin: "5px"
            }}>
            {plansRenderList}
          </div>
        );
      }
    }

    return (
      <div>
        <div style={{ background: "#ECECEC", padding: "30px", margin: "5px" }}>
          Monthly <Switch onClick={this.handleClick} /> Yearly
        </div>
        <div>{newList}</div>
        <div>
          <Button
            style={{
              width: "30%",
              borderRadius: "10px",
              backgroundColor: "green",
              height: "55px",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
            }}
            block>
            <span
              style={{
                fontSize: "20px",
                color: "#FFF"
              }}>
              Get started for free
            </span>
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    plans: state.plans.plansList
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchPlansList: fetchPlansList
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(PlansContainer);
