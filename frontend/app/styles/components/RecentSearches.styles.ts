import styled from "styled-components";

export const Wrapper = styled.div<{ $darkmode: boolean }>`
  margin-bottom: 2rem;

  > h3 {
    font-size: 0.875rem; /* 14px */
    margin: 0 0 0.75rem 0;
    color: ${({ $darkmode }) => ($darkmode ? "#9ca3af" : "#4b5563")};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    > button {
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      transition: background-color 300ms;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      background-color: ${({ $darkmode }) => ($darkmode ? "#1f2937" : "white")};
      color: ${({ $darkmode }) => ($darkmode ? "#d1d5db" : "#374151")};
      border: none;
      cursor: pointer;
    }
  }
`;
