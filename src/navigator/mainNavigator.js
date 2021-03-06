import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile163329Navigator from '../features/UserProfile163329/navigator';
import Maps163310Navigator from '../features/Maps163310/navigator';
import Settings163288Navigator from '../features/Settings163288/navigator';
import Settings163273Navigator from '../features/Settings163273/navigator';
import NotificationList163272Navigator from '../features/NotificationList163272/navigator';
import Maps163271Navigator from '../features/Maps163271/navigator';
import BlankScreen50162584Navigator from '../features/BlankScreen50162584/navigator';
import UserProfile162567Navigator from '../features/UserProfile162567/navigator';
import Maps162548Navigator from '../features/Maps162548/navigator';
import Settings162526Navigator from '../features/Settings162526/navigator';
import Settings162511Navigator from '../features/Settings162511/navigator';
import NotificationList162510Navigator from '../features/NotificationList162510/navigator';
import Maps162509Navigator from '../features/Maps162509/navigator';
import UserProfile162474Navigator from '../features/UserProfile162474/navigator';
import Maps162455Navigator from '../features/Maps162455/navigator';
import Settings162433Navigator from '../features/Settings162433/navigator';
import Settings162418Navigator from '../features/Settings162418/navigator';
import NotificationList162417Navigator from '../features/NotificationList162417/navigator';
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
UserProfile163329: { screen: UserProfile163329Navigator },
Maps163310: { screen: Maps163310Navigator },
Settings163288: { screen: Settings163288Navigator },
Settings163273: { screen: Settings163273Navigator },
NotificationList163272: { screen: NotificationList163272Navigator },
Maps163271: { screen: Maps163271Navigator },
BlankScreen50162584: { screen: BlankScreen50162584Navigator },
UserProfile162567: { screen: UserProfile162567Navigator },
Maps162548: { screen: Maps162548Navigator },
Settings162526: { screen: Settings162526Navigator },
Settings162511: { screen: Settings162511Navigator },
NotificationList162510: { screen: NotificationList162510Navigator },
Maps162509: { screen: Maps162509Navigator },
UserProfile162474: { screen: UserProfile162474Navigator },
Maps162455: { screen: Maps162455Navigator },
Settings162433: { screen: Settings162433Navigator },
Settings162418: { screen: Settings162418Navigator },
NotificationList162417: { screen: NotificationList162417Navigator },
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
