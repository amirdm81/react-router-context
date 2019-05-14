import React from "react";

export const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    loggedIn: false,
    name: null,
    login: () => {
      this.setState({ loggedIn: true, name: "Amir Reza" });
    },
    logout: () => {
      this.setState({ loggedIn: false, name: null });
    }
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
