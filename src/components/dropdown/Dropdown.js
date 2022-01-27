import { useState } from "react";
import {
    DropDownContainer,
    DropDownHeader,
    ArrowWrap,
    DropDownListContainer,
    DropDownList,
    ListItem,
} from "./style/dropdown";
import { ArrayDown } from "./icon/ArrayDown";

export default function Dropdown() {
    const options = [
        "Main",
        "Food",
        "Car",
        "Development",
        "Kids",
        "House",
        "Education",
        "Others",
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log();
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption || `Select a category`}
                <ArrowWrap>
                    <ArrayDown />
                </ArrowWrap>
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map((option) => (
                            <ListItem
                                onClick={onOptionClicked(option)}
                                key={Math.random()}
                            >
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}
