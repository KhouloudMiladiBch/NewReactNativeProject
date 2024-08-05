import NavigationTabBar from './src/navigationTabBar';
import { enableScreens } from 'react-native-screens';

enableScreens();


function App(): React.JSX.Element {
  return (
    <NavigationTabBar/>
  );
}
export default App;
