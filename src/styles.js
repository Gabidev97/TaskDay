import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export const ToDoList = styled.div`
  background: #dcdcdc;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 40px;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 200px;
  height: 40px;
  background: #8052ec;
  border-radius: 5px;
  color: white;
  font-weight: 900;
  font-size: 17px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  border-radius: 6px;
  margin-top: 8px;
  padding: 10px;
  width: 340px;
  height: 25px;
  color: #000000;
  font-weight: 400;
  font-size: 15px;
  border: 2px solid gray;
  margin-right: 20px;
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#FFDAB9" : "#E4E4E4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px;
  margin-bottom: 15px;

  li {
    list-style: none;
  }
`;

export const Trash = styled(FaTrashAlt)`
  cursor: pointer;
`;

export const Rocket = styled(IoIosRocket)`
  cursor: pointer;
`;
