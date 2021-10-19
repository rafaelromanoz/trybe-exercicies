import { Component } from 'react';
import { connect } from 'react-redux';

class DadosApp extends Component {
  render() {
    const { obj, loading } = this.props;
    if (loading) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        {obj.map((element, index) => (
          <p key={index}>{element.data.title}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ reducerOfApi }) => ({
  obj: reducerOfApi.returnOfApi,
  loading: reducerOfApi.loading,
  error: reducerOfApi.error,
});

export default connect(mapStateToProps)(DadosApp);
