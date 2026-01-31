import styled from "styled-components";

export const HeaderWrapper = styled.div<{ $darkmode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  > div {
    flex: 1;
    text-align: center;
  }

  > h1 {
    font-size: 1.875rem;
    font-weight: 300;
    margin: 0 0 0.5rem 0;
    color: ${({ $darkmode }) => ($darkmode ? "white" : "#1f2937")};
  }

  > p {
    font-size: 0.875rem;
    color: ${({ $darkmode }) => ($darkmode ? "#9ca3af" : "#4b5563")};
    margin: 0;
  }

  > button {
    padding: 0.75rem;
    border-radius: 9999px;
    transition: background-color 300ms;
    background-color: ${({ $darkmode }) => ($darkmode ? "#374151" : "white")};
    color: ${({ $darkmode }) => ($darkmode ? "#facc15" : "#374151")};
    border: none;
    cursor: pointer;
    box-shadow: ${({ $darkmode }) =>
      $darkmode ? "none" : "0 1px 2px rgba(0, 0, 0, 0.05)"};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
