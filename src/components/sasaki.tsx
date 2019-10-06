import React from "react";
import { Stage, Layer, Rect, Text, Image, Group } from "react-konva";
import useImage from "use-image";

export const Root = () => {
  const [image] = useImage(
    "https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Sasaki_Saku.png"
  );
  const baseX = 300;
  const baseY = 300;

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer imageSmoothingEnabled={true}>
        <Rect
          x={baseX}
          y={baseY}
          width={200}
          height={50}
          fill="rgb(239, 154, 175)"
          shadowColor="rgba(239, 154, 175, 0.8)"
          shadowBlur={3}
          cornerRadius={999}
        />

        <Text
          text="いまさらやる初めてのはじめてのWii【笹木咲/にじさんじ】"
          font={14}
          x={baseX + 45}
          y={baseY + 14}
          fill="#ffffff"
        />

        <Group
          clipFunc={(ctx: CanvasRenderingContext2D) => {
            ctx.arc(baseX + 22.5, baseY + 22.5, 22.5, 0, Math.PI * 2, false);
          }}
        >
          <Rect x={baseX} y={baseY} fill="#ffffff" width={45} height={45} />
          <Image image={image || new window.Image()} x={baseX} y={baseY} width={45} height={45} />
        </Group>
      </Layer>
    </Stage>
  );
};
