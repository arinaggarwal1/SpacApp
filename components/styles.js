import styled from "styled-components";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

//colors
const Colors = {
    primary: "#ffffff",
    secondary: "#e5e7eb",
    tertiary: "#1f2937",
    darkLight: "#9ca3af",
    brand: "#6d28d9",
    green: "#10B981",
    red: "#ef4444",
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors; 

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight+10}pz; 
    background-color:${primary};
`

export const InnerContainer = styled.View`
    flex: 1; 
    width: 100%; 
    align-items: center; 

`;

export const PageLogo = styled.Image`
    width: 250px; 
    height: 200px;
    margin-top: 50px;
`

export const PageTitle = styled.Text`
    fontSize: 30px; 
    font-weight: bold; 
    color: ${brand};
    padding: 10px; 
`;