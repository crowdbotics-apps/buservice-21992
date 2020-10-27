import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings162374Navigator from '../features/Settings162374/navigator';
import Settings162359Navigator from '../features/Settings162359/navigator';
import NotificationList162358Navigator from '../features/NotificationList162358/navigator';
import Maps162357Navigator from '../features/Maps162357/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings162374: { screen: Settings162374Navigator },
Settings162359: { screen: Settings162359Navigator },
NotificationList162358: { screen: NotificationList162358Navigator },
Maps162357: { screen: Maps162357Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
