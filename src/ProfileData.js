import React from "react";
import "./css/jquery.dataTables.min.css";

const $ = require("jquery");
$.DataTable = require("datatables.net");

export default class Profile extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.profiles,
      columns: [
        { title: "FirstName" },
        { title: "LastName" },
        { title: "Gender" },
        { title: "Latitude" },
        { title: "Longitude" },
        { title: "CreditCardNumber" },
        { title: "CreditCardType" },
        { title: "Email" },
        { title: "DomainName" },
        { title: "MacAddress" },
        { title: "URL" },
        { title: "UserName" },
        { title: "LastLogin" },
        { title: "PaymentMethod" },
      ],
    });
  }

  render() {
    return (
      <div>
        <table
          id="example"
          class="display"
          width="100%"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}
