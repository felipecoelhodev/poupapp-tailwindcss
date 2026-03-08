import { Button } from "../Button";
import { IconCurrency } from "../icons";
import { TransactionItem } from "../TransactionItem";
import { List } from "../List";
import { ListItem } from "../ListItem";

export const Transactions = () => {
  const items = [
    {
      description: "Comida",
      value: -20,
      date: "2026-03-06T00:00:00-03:00",
    },
    {
      description: "Papelaria",
      value: -80,
      date: "2026-03-06T00:00:00-03:00",
    },
    {
      description: "Salário",
      value: 1000,
      date: "2026-03-06T00:00:00-03:00",
    },
    {
      description: "Roupa",
      value: -300,
      date: "2026-03-06T00:00:00-03:00",
    },
  ];

  return (
    <>
      <List>
        {items.map((transactionItem, index) => {
          return (
            <ListItem key={index}>
              <TransactionItem item={transactionItem} />
            </ListItem>
          );
        })}
      </List>

      <div className="flex justify-center">
        <Button>
          <IconCurrency /> Adicionar transação
        </Button>
      </div>
    </>
  );
};
