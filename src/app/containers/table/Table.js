import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { loadData } from "../../actions/index";
import ReactModal from "react-modal";

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
  state = {
    isModalVisible: false,
    modalMessage: ""
  };

  fetchData = () => {
    this.props.load();
  };

  showDetails = rowData => {
    this.setState({
      isModalVisible: true,
      modalMessage: `His name is ${rowData}`
    });
  };

  close = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { isModalVisible } = this.state;

    const columns = [
      {
        Header: "Name",
        accessor: "name",
        sortable: false
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: props => <span className="number">{props.value}</span>,
        sortable: false
      },
      {
        id: "checkbox",
        accessor: "",
        Cell: ({ original }) => {
          return (
            <input
              type="checkbox"
              className="checkbox"
              checked={false}
              onChange={e => this.showDetails(original.name, e)}
            />
          );
        },
        Header: "Details",
        sortable: false
      }
    ];

    return (
      <div>
        <ReactModal onRequestClose={this.close} isOpen={isModalVisible}>
          {this.state.modalMessage}
        </ReactModal>
        <ReactTable
          data={this.props.data}
          pages={this.props.pages}
          loading={this.props.loading}
          columns={columns}
          manual
          className="-striped -highlight"
          onFetchData={this.fetchData}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
