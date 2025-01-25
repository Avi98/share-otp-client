import { Image, View, StyleSheet, Platform } from "react-native";
import { UserType } from "../../app/(otp)/received";

export const MerchantChips = ({ user }: { user: UserType }) => {
  return (
    <View style={styles.merchantsContainer}>
      {user.merchants.map((merchant, index) => (
        <View
          key={merchant.id}
          style={[
            styles.merchantIconWrapper,
            { marginLeft: index > 0 ? -12 : 0 },
          ]}
        >
          <Image source={{ uri: merchant.icon }} style={styles.merchantIcon} />
        </View>
      ))}
    </View>
  );
};

export const styles = StyleSheet.create({
  merchantsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  merchantIconWrapper: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 2,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  merchantIcon: {
    width: 20,
    height: 20,
    borderRadius: 12,
  },
});
