import styled from "styled-components";

export const SearchAutoSuggestionWrapper = styled.div`
  postion: relative;
  margin-bottom: 2rem;
`;

export const SearchWrapper = styled.div<{ $darkmode: boolean }>`
  position: relative;

  > svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ $darkmode }) => ($darkmode ? "#6b7280" : "#9ca3af")};
  }

  > input {
    width: 100%;
    padding-left: 3rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    border: ${({ $darkmode }) =>
      $darkmode ? "1px solid #374151" : "1px solid #e5e7eb"};
    outline: none;
    background-color: ${({ $darkmode }) => ($darkmode ? "#1f2937" : "white")};
    color: ${({ $darkmode }) => ($darkmode ? "white" : "#1f2937")};
    box-sizing: border-box;
  }
`;

export const AutoSuggestion = styled.div<{ $darkmode: boolean }>`
  position: relative;
  z-index: 10;
  width: 100%;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: ${({ $darkmode }) =>
    $darkmode ? "1px solid #374151" : "1px solid #e5e7eb"};
  overflow: hidden;
  background-color: ${({ $darkmode }) => ($darkmode ? "#1f2937" : "white")};

  > button {
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: left;
    transition: background-color 300ms;
    border: none;
    border-bottom: ${({ $darkmode }) =>
      $darkmode ? "1px solid #374151" : "1px solid #f3f4f6"};
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background-color: ${({ $darkmode }) =>
        $darkmode ? "#374151" : "#f3f4f6"};
    }
  }

  > svg {
    width: 1rem;
    height: 1rem;
    color: ${({ $darkmode }) => ($darkmode ? "#6b7280" : "#9ca3af")};
  }

  > span {
    color: ${({ $darkmode }) => ($darkmode ? "#e5e7eb" : "#1f2937")};
  }
`;
