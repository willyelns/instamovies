import styled from "styled-components/native";
import { COLORS } from "../../../constants/styles";

export const Container = styled.ScrollView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  color: ${COLORS.TEXT.HEX};
`;

export const Resume = styled.View`
  padding: 16px;
`;

export const ResumeRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Status = styled.View`
  border-radius: 10px;
  height: 45px;
  width: 100px;
`;
export const StatusText = styled.Text`
  font-size: 12px;
  border: 1px solid ${COLORS.TEXT.HEX};
`;
export const ResumeInfo = styled.View`
  flex-direction: row;
`;
export const ReleaseDate = styled.View`
  padding: 0 4px;
  flex-direction: row;
  align-items: center;
`;
export const ReleaseText = styled.Text`
  color: ${COLORS.TEXT.HEX};
  font-size: 15px;
  margin-left: 4px;
`;
export const Popularity = styled.View`
  padding: 0 4px;
  flex-direction: row;
  align-items: center;
`;
export const PopularityText = styled.Text`
  color: ${COLORS.TEXT.HEX};
  font-size: 15px;
  margin-left: 4px;
`;
export const Details = styled.View`
  flex: 1;
`;
export const Bullet = styled.Text`
  flex-direction: row;
  font-size: 16px;
  padding: 8px 16px;
`;
export const BulletTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-right: 12px;
`;
export const Summary = styled.Text`
  flex-direction: column;
  font-size: 16px;
  margin-right: 8px;
  padding: 8px 16px;
`;
