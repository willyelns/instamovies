import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../pages/home";
import MoviesDetailsPage from "../pages/movies-details";
import { COLORS } from "../../constants/styles";

const appNavigator = createStackNavigator(
  {
    home: HomePage,
    details: MoviesDetailsPage
  },
  {
    Preset: "center",
    defaultNavigationOptions: {
      headerTitle: "Instamovies",
      headerStyle: {
        backgroundColor: `${COLORS.SECONDARY.HEX}`
      }
    }
  }
);
export default createAppContainer(appNavigator);
