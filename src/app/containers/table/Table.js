import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { loadData } from "../../actions/index";

const mapStateToProps = state => ({
  data: state.data,
  loading: state.isLoading,
  pages: state.pages
});

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(loadData());
  }
});

class Table extends React.Component {
  fetchData = (state, instance) => {
    this.props.load();
  };

  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: props => <span className="number">{props.value}</span>
      }
    ];

    return (
      <ReactTable
        data={this.props.data}
        pages={this.props.pages}
        loading={this.props.loading}
        columns={columns}
        manual
        className="-striped -highlight"
        onFetchData={this.fetchData}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
