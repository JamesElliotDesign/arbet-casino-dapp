import React from "react";

const SignUp = () => {
  // Redirect to an external URL when the component mounts
  React.useEffect(() => {
    window.location.href = "https://lottery.arbet.casino/";
  }, []);

  return <div></div>; // Return an empty component since the redirection will happen automatically
};

export default SignUp;
