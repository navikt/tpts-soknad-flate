import React, { ReactElement, useEffect, useState } from 'react';

const selectedClass = 'border-opacity-100';
interface TabProps<T> {
  selected?: boolean;
  value: T;
  onClick?: () => void;
}

export function Tab<T>({
  children,
  selected,
  onClick,
}: TabProps<T> & { children: ReactElement | string }) {
  return (
    <button
      onClick={onClick}
      className={`p-16 font-bold hover:bg-gray-100 border-b-4 border-blue-400  ${
        selected ? selectedClass : 'border-opacity-0'
      }`}
      role="tab"
    >
      {children}
    </button>
  );
}

interface TabsProps<T> {
  onTabChange?: (tabIndex: T) => void;
  defaultValue: T;
}

export function Tabs<T>({
  children,
  onTabChange,
  defaultValue,
}: TabsProps<T> & { children: React.ReactElement[] }) {
  const [isFirst, setIsFirst] = useState(true);
  const [value, setValue] = useState<T>(defaultValue);

  const getValueByIndex = (index: number): T => children[index]?.props?.value;
  const selectedIndex = children.findIndex(
    (child: ReactElement) => child?.props?.value === value
  );

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }
    onTabChange?.(value);
  }, [value]);

  return (
    <div role="tablist">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as ReactElement, {
          selected: selectedIndex === index,
          onClick: () => {
            const anyChild = child as any;
            if (anyChild.props?.onClick) {
              anyChild.props.onClick();
            }
            setValue(getValueByIndex(index));
          },
        });
      })}
    </div>
  );
}
