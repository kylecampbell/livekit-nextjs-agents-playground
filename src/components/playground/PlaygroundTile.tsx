import { ReactNode, useState } from "react";

const titleHeight = 32;

type PlaygroundTileProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
  childrenClassName?: string;
  padding?: boolean;
  backgroundColor?: string;
};

export type PlaygroundTab = {
  title: string;
  content: ReactNode;
};

export type PlaygroundTabbedTileProps = {
  tabs: PlaygroundTab[];
  initialTab?: number;
} & PlaygroundTileProps;

export const PlaygroundTile: React.FC<PlaygroundTileProps> = ({
  children,
  title,
  className,
  childrenClassName,
  padding = true,
  backgroundColor = "transparent",
}) => {
  const contentPadding = padding ? 4 : 0;
  return (
    <div
      className={`flex flex-col border rounded-sm border-gray-800 text-gray-500 bg-${backgroundColor} ${className} scroll-container`}
    >
      {title && (
        <div
          className="flex items-center justify-center text-xs uppercase py-2 border-b border-b-gray-800 tracking-wider"
          style={{
            height: `${titleHeight}px`,
          }}
        >
          <h2>{title}</h2>
        </div>
      )}
      <div
        className={`flex flex-col items-center grow w-full scroll-content ${childrenClassName}`}
        style={{
          height: `calc(100% - ${title ? titleHeight + "px" : "0px"})`,
          padding: `${contentPadding * 4}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const PlaygroundTabbedTile: React.FC<PlaygroundTabbedTileProps> = ({
  tabs,
  initialTab = 0,
  className,
  childrenClassName,
  backgroundColor = "transparent",
}) => {
  const contentPadding = 4;
  const [activeTab, setActiveTab] = useState(initialTab);
  if (activeTab >= tabs.length) {
    return null;
  }

  return (
    <div
      className={`flex flex-col border rounded-sm border-gray-800 text-gray-500 bg-${backgroundColor} ${className} scroll-container`}
    >
      <div className="flex items-center justify-center text-xs uppercase py-2 border-b border-b-gray-800 tracking-wider">
        <div className="flex gap-4">
          {tabs.map((tab, idx) => (
            <h2
              key={tab.title}
              className={`cursor-pointer ${
                idx === activeTab
                  ? "text-white"
                  : "hover:text-gray-300 transition-colors"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.title}
            </h2>
          ))}
        </div>
      </div>
      <div
        className={`flex flex-col items-center grow w-full scroll-content ${childrenClassName}`}
        style={{
          height: `calc(100% - ${titleHeight}px)`,
          padding: `${contentPadding * 4}px`,
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
