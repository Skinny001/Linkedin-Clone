import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { googleSignIn } from "../App/user-slice";



const Login = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

   // Function to display alert message
   const showAlert = () => {
    alert("Please sign in with your Google account.");
  };

  return (
    <div className="container">
      {user && <Navigate to={"feed"} />}
      <Nav>
        <a href="/">
          <img src="/Images/login-logo.svg" alt="logo" />
        </a>
        <div>
          <a onClick={showAlert} className="join">
            Join now
          </a>
          <a onClick={showAlert} className="login">
            Sign in
          </a>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional Skinny001 community</h1>
          <img src="/Images/hero.svg" alt="hero" />
        </Hero>
        <Form>
          <button onClick={() => dispatch(googleSignIn())} className="google">
            <img src="/Images/google.svg" alt="google" />
            Sign in with Google
          </button>
        </Form>
      </Section>
    </div>
  );
};
export default Login;



const Nav = styled.nav`
  width: 100%;
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 767px) {
      padding: 0 5px;
      width: 120px;
    }
  }
  
  & .join {
    padding: 10px 12px;
    color: #0a66c2;
    margin-right: 12px;
    border-radius: 4px;
    transition: 0.2s;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
  
  & .login {
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition: 0.2s;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(112, 181, 249, 0.15);
      box-shadow: inset 0 0 0 2px #0a66c2;
    }
  }
`;


const Section = styled.section`
  position: relative;
  display: flex;
  align-content: start;
  min-height: 500px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 100px 0;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  top: 80px;
  @media (max-width: 767px) {
    min-height: 0px;
    top: 0;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 50px;
    color: #8f5849;
    font-weight: 300;
    line-height: 70px;
    @media (max-width: 767px) {
      text-align: center;
      font-size: 30px;
      width: 100%;
      line-height: 1.3;
    }
  }
  img {
    width: 700px;
    height: 500px;
    position: absolute;
    top: 0px;
    right: -200px;
    @media (max-width: 767px) {
      top: 180px;
      right: 50%;
      transform: translateX(50%);
      width: 270px;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 400px;
  z-index: 10;
  @media (max-width: 767px) {
    margin-top: 20px;
  }
  .google {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    border: 0;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
      inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    z-index: 0;
    transition: 0.2s;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: rgba(207, 207, 207, 0.25);
      color: rgba(0, 0, 0, 0.75);
      box-shadow: inset 0 0 0 2px rgb(0 0 0 / 60%),
        inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0);
    }
    img {
      margin-right: 20px;
    }
  }
`;

