import { View } from 'react-native';
import PageTemplate from './components/PageTemplate';
import registerNNPushToken from 'native-notify';
export default function App() {
  registerNNPushToken(19739, 'xDNKcmZUXqmzVddodDt5sH');
  return (
    <PageTemplate> 
      
    </PageTemplate>
  );
}
