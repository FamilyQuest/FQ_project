import { SafeAreaView, StatusBar } from 'react-native';
import AvatarCreationForm from './components/AvatarCreationForm';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#A4E7DD" barStyle="dark-content" />
      <AvatarCreationForm />
    </SafeAreaView>
  );
}