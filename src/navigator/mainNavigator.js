import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps162416Navigator from '../features/Maps162416/navigator';
import UserProfile162415Navigator from '../features/UserProfile162415/navigator';
import Maps162396Navigator from '../features/Maps162396/navigator';
import Settings162374Navigator from '../features/Settings162374/navigator';
import Settings162359Navigator from '../features/Settings162359/navigator';
import NotificationList162358Navigator from '../features/NotificationList162358/navigator';
import Maps162357Navigator from '../features/Maps162357/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps162416: { screen: Maps162416Navigator },
UserProfile162415: { screen: UserProfile162415Navigator },
Maps162396: { screen: Maps162396Navigator },
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
