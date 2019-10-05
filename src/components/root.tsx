import React from "react";
import { Stage, Layer, Rect, Text, Image, Circle, Group } from "react-konva";

// const RoundedImage = ({ x, y, width, height, cornerRadius, image, fill }) => (
//   <Group
//     clipFunc={(ctx: any) => {
//       ctx.beginPath();
//       ctx.moveTo(x + cornerRadius, y);
//       ctx.lineTo(x + width - cornerRadius, y);
//       ctx.quadraticCurveTo(x + width, y, x + width, y + cornerRadius);
//       ctx.lineTo(x + width, y + height - cornerRadius);
//       ctx.quadraticCurveTo(
//         x + width,
//         y + height,
//         x + width - cornerRadius,
//         y + height
//       );
//       ctx.lineTo(x + cornerRadius, y + height);
//       ctx.quadraticCurveTo(x, y + height, x, y + height - cornerRadius);
//       ctx.lineTo(x, y + cornerRadius);
//       ctx.quadraticCurveTo(x, y, x + cornerRadius, y);
//       ctx.closePath();
//     }}
//   >
//     <Image
//       x={x}
//       y={y}
//       width={width}
//       height={height}
//       image={image}
//       fill={fill}
//     />
//   </Group>
// );

export const Root = () => {
  const image = new window.Image(10, 10);
  image.src =
    "https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Sasaki_Saku.png";
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
          clipFunc={ctx => {
            ctx.arc(baseX + 22.5, baseY + 22.5, 22.5, 0, Math.PI * 2, false);
          }}
        >
          <Rect x={baseX} y={baseY} fill="#ffffff" width={45} height={45} />
          <Image
            image={image}
            x={baseX}
            y={baseY}
            width={45}
            height={45}
          />
        </Group>
      </Layer>
    </Stage>
  );
};
