
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons } from "../../../constants/icons";
import { images } from "../../../constants/images";

const TabIcon = ({ focused, icon, title }: any) => {
   if (focused) {
      return (
         <View className="relative  flex-row w-[10px] flex-1 min-w-[89px] min-h-14 justify-center items-center rounded-full overflow-hidden top-1">
            <Image
               source={images.highlight}
               className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
               // resizeMode="stretch"
            />
            <Image
               source={icon}
               tintColor={focused ? "#151312" : "#A0A0A0"}
               className="size-4"
            />
            <Text
               className={`text-base font-semibold ml-2 ${focused ? "text-secondary" : "text-gray-400"
                  }`}
            >
               {title}
            </Text>
         </View>
      )
   };
   return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
         <Image source={icon} tintColor="#A8B5DB" />
      </View>
   )
};
const _layout = () => {
   return (
      <Tabs
         screenOptions={{
            tabBarShowLabel:false,
            tabBarItemStyle:{
               width:"100%",
               height:"100%",
               justifyContent:"center",
               alignItems:"center"
            },
            tabBarStyle:{
               backgroundColor:"#0f0d23",
               borderRadius:50,
               marginHorizontal:15,
               marginBottom:36,
               height:48,
               position:'absolute',
               overflow:'hidden',
               borderWidth:0,
               borderColor:"#0f0d23"
            }
         }}>
         <Tabs.Screen
            name="index"
            options={{
               title: "Home",
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon
                     focused={focused}
                     icon={icons.home}
                     title="Home" />
               )
            }} />
         <Tabs.Screen
            name="search"
            options={{
               title: "Search",
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon
                     focused={focused}
                     icon={icons.search}
                     title="Search" />
               )
            }} />
         <Tabs.Screen
            name="saved"
            options={{
               title: "Saved",
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon
                     focused={focused}
                     icon={icons.save}
                     title="Saved" />
               )
            }} />
         <Tabs.Screen
            name="profile"
            options={{
               title: "Profile",
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon
                     focused={focused}
                     icon={icons.person}
                     title="Profile" />
               )
            }} />
      </Tabs>
   )
}

export default _layout

