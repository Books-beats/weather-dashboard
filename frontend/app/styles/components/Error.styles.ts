import styled from "styled-components";

export const ErrorBox = styled.div<{ $darkMode: boolean }>`
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  background-color: ${({ $darkMode }) =>
    $darkMode ? "rgba(127, 29, 29, 0.3)" : "#fef2f2"};
  border: ${({ $darkMode }) =>
    $darkMode ? "1px solid #991b1b" : "1px solid #e5e7eb"};
  color: ${({ $darkMode }) => ($darkMode ? "#fca5a5" : "#b91c1c")};
`;
