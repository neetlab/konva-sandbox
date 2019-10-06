import React, { useState } from "react";
import { Stage, Layer, Group, Rect, Text } from "react-konva";
import { KonvaEventObject } from "konva/types/Node";

const range = (start: number, end: number) => {
  if (end < start) throw Error("Invalid");

  return Array.from({ length: end - start }, (_, i) => {
    return i + start;
  });
};

export const Root = () => {
  const [since, changeSince] = useState(0);
  const [until, changeUntil] = useState(3);
  const [baseX, changeBaseX] = useState(0);

  const handleScroll = ({ evt }: KonvaEventObject<WheelEvent>) => {
    if (evt.deltaY) {
      changeBaseX(baseX + evt.deltaY);
    }

    return;
  };

  const handleChangeSince = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = Number(e.currentTarget.value);
    changeSince(value);
  };

  const handleChangeUntil = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = Number(e.currentTarget.value);
    changeUntil(value);
  };

  return (
    <>
      Since <input type="number" value={since.toString()} onChange={handleChangeSince} />
      , Until <input type="number" value={until.toString()} onChange={handleChangeUntil} />

      <Stage width={innerWidth} height={innerHeight / 2} onWheel={handleScroll}>
        <Layer>
          {/* <Text x={0} y={0} text="Hej" fontSize={24} /> */}

          {range(since, until).map(i => {
            const choord = i * 100;

            return (
              <Group key={i} x={choord - baseX} y={28}>
                <Rect width={95} height={95} fill="#00ff00" />

                <Text
                  width={95}
                  height={95}
                  align="center"
                  fontSize={24}
                  verticalAlign="middle"
                  text={(i + 1).toString()}
                />
              </Group>
            );
          })}
        </Layer>
      </Stage>
    </>
  );
};
