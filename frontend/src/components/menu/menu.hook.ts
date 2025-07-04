const useMenu = ({ navigation }: { navigation: any }) => {
  const handlePressHome = () => {
    navigation.navigate("Home");
  };
  const handlePressRank = () => {
    navigation.navigate("Rank");
  };
  const handlePressPerfil = () => {
    navigation.navigate("Perfil");
  };

  return { handlePressHome, handlePressRank, handlePressPerfil };
};

export default useMenu;
