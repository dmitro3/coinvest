import { RainbowKitProvider, AvatarComponent } from "@rainbow-me/rainbowkit";

const CustomAvatar = ({ address, ensImage, size }) => {
  return ensImage ? (
    <img
      src={ensImage}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
    />
  ) : (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        borderRadius: 999,
        height: size,
        width: size,
      }}
    >
      {`:^)`}
    </div>
  );
};

export default CustomAvatar;
