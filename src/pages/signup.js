import React from 'react'; 


class Signup extends React.Component {
    render() {
    return (
      <form id="signup" name="signup" method="post">
      <label htmlFor="email">Email Address</label>
      <input className="text" name="email" type="email" required = "required"/>
      <label htmlFor="firstname">Firstname</label>
      <input name="firstname" type="text" required = "required"/>
      <label htmlFor="lastname">Lastname</label>
      <input name="lastname" type="text" required = "required"/>
      <label htmlFor="password">Password</label>
      <input name="password" type="password" required = "required"/>
      <label htmlFor="username">Username</label>
      <input name="username" type="text" required = "required"/>
      <label htmlFor="group">Group</label>
      <input name="group" type="text"/>
      <label htmlFor="bio">Bio</label>
      <input name="bio" type="text"/>
      <label htmlFor="job">Job</label>
      <input name="job" type="text"/>
      <input className="btn" type="submit" value="Sign Up" />
  </form>
    ); 
    } 
}
export default Signup;