import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/icon/home-activated.png';
import HomeInaktif from './assets/icon/home-inactive.png';
import ShopAktif from './assets/icon/shop-activated.png';
import ShopInaktif from './assets/icon/shop-inactive.png';
import BagAktif from './assets/icon/bag-activated.png';
import BagInaktif from './assets/icon/bag-inactive.png';
import FavoriteAktif from './assets/icon/favorites-activated.png';
import FavoriteInaktif from './assets/icon/favorites-inactive.png';
import ProfilAktif from './assets/icon/profil-activated.png';
import ProfilInaktif from './assets/icon/profil-inactive.png';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import BagPage from './BagPage';
import FavoritePage from './FavoritePage';
import ProfilPage from './ProfilPage';
import LoginPage from './LoginPage';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ShopAktif : ShopInaktif}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagAktif : BagInaktif}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavoriteAktif : FavoriteInaktif}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfilAktif : ProfilInaktif}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Login"
      onPress={() => navigation.navigate('Login')}
    />
  </View>
);
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Shop" component={ShopPage}  />
        <Stack.Screen name="Bag" component={BagPage} />
        <Stack.Screen name="Favorite" component={FavoritePage} />
        <Stack.Screen name="Profil" component={ProfilPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 300,
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 150,
    left: 20,
  },
  bannerText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  checkButton: {
    backgroundColor: '#FF3E3E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  newSection: {
    padding: 20,
    width: '100%',
  },
  newSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newSectionSubtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  newItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newItem: {
    width: 150,
    alignItems: 'center',
    marginRight: 10,
  },
  newItemImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  newItemText: {
    fontSize: 14,
    color: '#000',
  },
});

export default App;