import './TransactionList.css';
import ExpenseItem from '../ExpensesItem/ExpenseItem';
import Card from '../../UI/Card/Card';

const TransactionList = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
};

export default TransactionList;
