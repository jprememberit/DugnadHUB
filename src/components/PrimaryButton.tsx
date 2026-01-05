/**
 * PrimaryButton
 * -------------
 * submitting forms or signing out. Keeps press feedback consistent across screens.
 */
import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

interface Props {
  title: string;
  onPress: () => void;
  icon?: IconName;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton: React.FC<Props> = ({
  title,
  onPress,
  icon,
  disabled = false,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled ? styles.pressed : null,
        disabled ? styles.disabled : null,
        style,
      ]}
    >
      <View style={styles.inner}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={18}
            color={colors.primary}
            style={styles.icon}
          />
        )}
        <Text style={styles.label}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    borderWidth: 1.6,
    borderColor: colors.primary,
    backgroundColor: "white",

    paddingVertical: 14,
    paddingHorizontal: 20,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.primary,
  },
  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.6,
  },
});

export default PrimaryButton;
