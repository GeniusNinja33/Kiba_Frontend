// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const PLabel = styled.label`
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const WalletConnectButtonLayout = styled.div`
  display: flex;
  background: #2c2d3a;
  border-radius: 100px;
  padding-left: 20px;
`;
export const Connectdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
`;
export const ConnectButton = styled.button`
  border-radius: 100px;
  width: 186px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e33319;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-left: 16px;

  @media screen and (max-width: 425px) {
    width: 136px;
  }
  @media screen and (max-width: 375px) {
    width: 100px;
    font-size: 10px;
  }
`;
export const IconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
`;
export const ItemList = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Text = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
`;
export const SelectDiv = styled.div`
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media screen and (max-width: 375px) {
    margin: 0px;
  }
`;
export const SelectButton = styled.div`
  background: #3b3c4e;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;
