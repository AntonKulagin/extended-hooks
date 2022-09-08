import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [click, setClick] = useState(true);
    const block = useRef();
    const handleClick = () => {
        setClick(!click);
        block.current.style.width = click ? "80px" : "60px";
        block.current.style.height = click ? "150px" : "40px";
        block.current.textContent = click ? "text" : "Блок";
        block.current.style.transition = "all 0.3s ease";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <button className="btn btn-primary my-2" onClick={handleClick}>
                Изменить блок
            </button>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={block}
            >
                <small>Блок</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
