import styled from "styled-components/native";
import { COLORS } from "../../../constants/styles";

export const Container = styled.View`
  flex: 1;
`;

export const Movie = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  color: ${COLORS.TEXT.HEX};
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${COLORS.TEXT.HEX};
  padding: 15px;
  line-height: 18px;
`;

export const Rate = styled.Text`
  color: ${COLORS.TEXT.HEX};
  font-size: 24px;
`;

export const Resume = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;
export const ResumeItem = styled.View`
  padding: 0 4px;
  flex-direction: row;
  align-items: center;
`;
export const ResumeBlock = styled.View`
  flex-direction: row;
`;
export const ResumeText = styled.Text`
  color: ${COLORS.TEXT.HEX};
  font-size: 15px;
  margin-left: 4px;
`;
export const ResumeVotes = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;
export const VoteText = styled.Text`
  color: ${COLORS.TEXT.HEX};
  font-size: 12px;
  font-weight: 500;
  font-style: italic;
`;
export const VoteNumber = styled.Text`
  color: ${COLORS.TEXT.HEX};
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
`;
