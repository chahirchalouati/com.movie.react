import {ReactNode} from "react";

export type ContainerProps = {
    children: ReactNode
    className?: string;

};
const Container = ({ children, className }: ContainerProps) => {
    return (<div className={className}>{children}</div>);
};

export default Container;