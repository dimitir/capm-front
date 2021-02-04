import React from "react";

interface IUser {
  prop1: string;
  prop2: number;
  myFunction: () => void;
  prop3?: boolean; //optional prop
}

const initialUser: string = "dd";

const [user, setUser] = React.useState<IUser | string>(initialUser);
// const [user, setUser] = React.useState<IUser | null>(null);

//псевдоним типов расширяет интерфейсы
interface PartialPointX {
  x: number;
}
type Point = PartialPointX & { y: number };

interface PointGether {
  x: number;
} //описание #1
interface PointGether {
  y: number;
} //описание #2
// Оба описания становятся:
// interface PointGether { x: number; y: number; }
const point: PointGether = { x: 1, y: 2 };

export interface IBorderedBoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}
class BorderedBox extends React.Component<IBorderedBoxProps, void> {
  public render() {
    const { children, title, ...divAttributes } = this.props;
    return (
      //Это DIV, и мы пытаемся предоставить пользователю эту информацию.
      <div {...divAttributes} style={{ border: "1px solid red" }}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}
// const myBorderedBox = (
//   <BorderedBox title="Hello" onClick={() => alert("Hello")} />
// );
