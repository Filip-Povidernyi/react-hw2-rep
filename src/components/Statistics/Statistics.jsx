import { getRandomHexColor } from "./rndColor";
import style from "./style.module.css";

const Statistics = ({ title, data }) => {
    return (
    <section className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2> } 

        <ul className={style.statList}>
            {data.map((item) => (
            <li key={item.id} className={style.item} style={{ backgroundColor: getRandomHexColor() }}>
                <span className={style.label}>{item.label}</span>
                <span className={style.percentage}>{item.percentage}%</span>
            </li>
                ))}
        </ul>
    </section>)
};

export default Statistics;