import { Button } from "@/components/button/Button";
import { LoadingSVG } from "@/components/button/LoadingSVG";
import { SettingsDropdown } from "@/components/playground/SettingsDropdown";
import { useConfig } from "@/hooks/useConfig";
import { ConnectionState } from "livekit-client";
import { ReactNode } from "react";

type PlaygroundHeader = {
  logo?: ReactNode;
  title?: ReactNode;
  height: number;
  accentColor: string;
  connectionState: ConnectionState;
  onConnectClicked: () => void;
};

export const PlaygroundHeader = ({
  logo,
  title,
  accentColor,
  height,
  onConnectClicked,
  connectionState,
}: PlaygroundHeader) => {
  const { config } = useConfig();
  return (
    <div
      className={`flex gap-4 pt-4 text-${accentColor}-500 justify-between items-center shrink-0`}
      style={{
        height: height + "px",
      }}
    >
      <div className="flex items-center gap-3 basis-2/3">
        <div className="flex lg:basis-1/2">
          <a href="https://livekit.io">{logo ?? <LKLogo />}</a>
        </div>
        <div className="lg:basis-1/2 lg:text-center text-xs lg:text-base lg:font-semibold text-white">
          {title}
        </div>
      </div>
      <div className="flex basis-1/3 justify-end items-center gap-2">
        {config.settings.editable && <SettingsDropdown />}
        <Button
          accentColor={
            connectionState === ConnectionState.Connected ? "red" : accentColor
          }
          disabled={connectionState === ConnectionState.Connecting}
          onClick={() => {
            onConnectClicked();
          }}
        >
          {connectionState === ConnectionState.Connecting ? (
            <LoadingSVG />
          ) : connectionState === ConnectionState.Connected ? (
            "Disconnect"
          ) : (
            "Connect"
          )}
        </Button>
      </div>
    </div>
  );
};

const LKLogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_101_119699)">
      <path
        d="M19.2006 12.7998H12.7996V19.2008H19.2006V12.7998Z"
        fill="currentColor"
      />
      <path
        d="M25.6014 6.40137H19.2004V12.8024H25.6014V6.40137Z"
        fill="currentColor"
      />
      <path
        d="M25.6014 19.2002H19.2004V25.6012H25.6014V19.2002Z"
        fill="currentColor"
      />
      <path d="M32 0H25.599V6.401H32V0Z" fill="currentColor" />
      <path d="M32 25.5986H25.599V31.9996H32V25.5986Z" fill="currentColor" />
      <path
        d="M6.401 25.599V19.2005V12.7995V6.401V0H0V6.401V12.7995V19.2005V25.599V32H6.401H12.7995H19.2005V25.599H12.7995H6.401Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_101_119699">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
