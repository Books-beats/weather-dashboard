import styled from "styled-components";

export const Card = styled.div<{ $darkmode: boolean }>`
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  background-color: ${({ $darkmode }) => ($darkmode ? "#1f2937" : "white")};
`;

export const Title = styled.h3<{ $darkmode: boolean }>`
  font-size: 1.125rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
  color: ${({ $darkmode }) => ($darkmode ? "white" : "#1f2937")};
`;

export const ForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const ForecastItem = styled.div`
  text-align: center;
`;

export const DayName = styled.p<{ $darkmode: boolean }>`
  font-size: 0.875rem;
  margin: 0 0 0.75rem 0;
  color: ${({ $darkmode }) => ($darkmode ? "#9ca3af" : "#4b5563")};
`;

export const WeatherIconWrapper = styled.div<{ $darkmode: boolean }>`
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
  color: ${({ $darkmode }) => ($darkmode ? "#60a5fa" : "#3b82f6")};
`;

export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const MaxTemp = styled.p<{ $darkmode: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  color: ${({ $darkmode }) => ($darkmode ? "#e5e7eb" : "#1f2937")};
`;

export const MinTemp = styled.p<{ $darkmode: boolean }>`
  font-size: 0.75rem;
  margin: 0;
  color: ${({ $darkmode }) => ($darkmode ? "#6b7280" : "#6b7280")};
`;
