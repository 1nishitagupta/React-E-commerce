import { toast } from "react-toastify";
import { loginCredentialData } from "../loginCredentialsData";

const loginReducer = (state, action) => {
  if (action.type === "MATCH_DETAILS") {
    const { email, password } = action.payload;

    // console.log(email)

    let matched = loginCredentialData.filter((i) => {
      if (i.email === email && i.password === password) {
        return true;
      } else {
        return false;
      }
    });

    console.log(matched.length)

    if(matched.length > 0) {
      toast.success('Succesfully Logged In !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    }else{
      toast.error('Invalid Credentials Try Again !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    }
    

    return {
      ...state,
      details: {
        matched : matched.length
      },
    };
  }

  return state;
};

export default loginReducer;
