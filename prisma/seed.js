const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

async function main() {
  const data = JSON.parse(
    fs.readFileSync(path.resolve('./sample_budget.json'), 'utf-8')
  );

  for (const user of data.users) {
    const userData = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        theme: user.theme,
        budgets: {
          create: user.budgets.map((budget) => ({
            year: budget.year,
            month: budget.month,
            totalBudget: budget.totalBudget,
            expenses: {
              create: budget.expenses.map((expense) => ({
                category: expense.category,
                amount: expense.amount,
                date: new Date(expense.date),
                description: expense.description,
              })),
            },
          })),
        },
      },
      include: {
        budgets: {
          include: {
            expenses: true,
          },
        },
      },
    });
    console.log(`Created user with id: ${userData.id}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
