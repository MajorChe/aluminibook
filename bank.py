class Account:

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def __str__(self):
        return "Account name:{} and account balance is:{}".format(
            self.owner, self.balance)

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdrawal(self, amount):
        if self.balance - amount < 0:
            return "Not enough balance to perform this transaction"
        else:
            self.balance -= amount
            return self.balance


account_1 = Account("Major", 100)
# account_1.deposit(45)
print(account_1.withdrawal(60))
# print(account_1)