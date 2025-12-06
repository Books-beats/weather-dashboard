import styled from "styled-components";

export const Card = styled.div<{ $darkmode: boolean }>`
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 2rem;
  background-color: ${({ $darkmode }) => ($darkmode ? "#1f2937" : "white")};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Location = styled.h2<{ $darkmode: boolean }>`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0 0.25rem 0;
  color: ${({ $darkmode }) => ($darkmode ? "white" : "#1f2937")};
`;

export const Condition = styled.p<{ $darkmode: boolean }>`
  font-size: 0.875rem;
  margin: 0;
  color: ${({ $darkmode }) => ($darkmode ? "#9ca3af" : "#6b7280")};
`;

export const Temp = styled.div<{ $darkmode: boolean }>`
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 1;
  color: ${({ $darkmode }) => ($darkmode ? "white" : "#1f2937")};
`;

export const FeelsLike = styled.p<{ $darkmode: boolean }>`
  font-size: 0.875rem;
  margin: 0.25rem 0 0 0;
  color: ${({ $darkmode }) => ($darkmode ? "#9ca3af" : "#6b7280")};
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const DetailText = styled.div<{ $darkmode: boolean }>`
  p:first-child {
    font-size: 0.75rem;
    margin: 0;
    color: ${({ $darkmode }) => ($darkmode ? "#6b7280" : "#6b7280")};
  }

  p:last-child {
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0;
    color: ${({ $darkmode }) => ($darkmode ? "#e5e7eb" : "#1f2937")};
  }
`;

export const IconWrapper = styled.div<{ color: string }>`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ color }) => color};
`;
