import TransItem from "./TransItem";
import css from "./style.module.css"

const Transactions = ({ data }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <TransItem key={item.id} {...item} />
                ))}
            </tbody>
        </table>
    )
};


export default Transactions