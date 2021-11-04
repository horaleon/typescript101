import { IButton } from '../interfaces';

interface Button extends IButton {
    name: string;
    width: number;
}

const ButtonPrimary = ({ name, width }: Button) => {
    return (
        <button style={{ width }}>
            {name}
        </button>
    )
}

export default ButtonPrimary
