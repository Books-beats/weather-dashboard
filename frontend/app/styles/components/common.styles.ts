import styled from "styled-components";

export const PageWrapper = styled.div<{ $darkMode: boolean }>`
  min-height: 100vh;
  transition: background-color 300ms;
  padding: 2rem;
  font-family: sans-serif;
  background: ${({ $darkMode }) =>
    $darkMode
      ? "linear-gradient(to bottom right, #111827, #1f2937)"
      : "linear-gradient(to bottom right, #eff6ff, #dbeafe)"};

  > div {
    max-width: 56rem;
    margin: 0 auto;
  }
`;
