import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100%);
  height: calc(10%);
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background-color: rgba(147, 182, 94, 0.28);
  box-shadow: 0px 6px 4px rgba(104, 127, 69, 0.5);
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  font-family: "Ruda";
  color: #48582f;
`;

function NavBar() {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      document.cookie =
        "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      const response = await fetch(
        "http://43.203.219.49:8000/api/users/restart-session",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        }
      );

      if (!response.ok) {
        throw new Error("Failed to restart session");
      }
      navigate("/");
    } catch (error) {
      console.error("Error restarting session:", error);
    }
  };

  return (
    <Container>
      <Logo onClick={handleClick}>MoodTune</Logo>
    </Container>
  );
}

export default NavBar;
