import './TransactionList.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

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
