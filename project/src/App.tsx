import React, { useState } from 'react';
import { Wallet, CreditCard, PieChart, ArrowRightLeft, Bell, Settings, LogOut, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [balance, setBalance] = useState(24680.90);

  const recentTransactions = [
    { id: 1, description: "Coffee Shop", amount: -4.50, date: "2024-03-15" },
    { id: 2, description: "Salary Deposit", amount: 3200.00, date: "2024-03-14" },
    { id: 3, description: "Grocery Store", amount: -65.30, date: "2024-03-13" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow-lg"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-200 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-pink-600">SwiftBank</h1>
          <nav className="mt-8 space-y-4">
            <NavItem icon={<Wallet />} text="Dashboard" active />
            <NavItem icon={<CreditCard />} text="Cards" />
            <NavItem icon={<PieChart />} text="Analytics" />
            <NavItem icon={<ArrowRightLeft />} text="Transfers" />
            <NavItem icon={<Bell />} text="Notifications" />
            <NavItem icon={<Settings />} text="Settings" />
            <NavItem icon={<LogOut />} text="Logout" />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome back, Alex</h2>
            <p className="text-gray-600">Here's your financial overview</p>
          </header>

          {/* Balance Card */}
          <div className="bg-gradient-to-r from-pink-500 to-yellow-400 rounded-2xl p-6 text-white shadow-lg mb-8">
            <p className="text-lg opacity-90">Total Balance</p>
            <h3 className="text-4xl font-bold mt-2">${balance.toLocaleString()}</h3>
            <div className="mt-4 flex gap-4">
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm transition">
                Add Money
              </button>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm transition">
                Send Money
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <QuickAction title="Pay Bills" icon="💡" description="Utilities & Services" />
            <QuickAction title="Investments" icon="📈" description="Stocks & Funds" />
            <QuickAction title="Savings" icon="🎯" description="Goals & Plans" />
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
            <div className="space-y-4">
              {recentTransactions.map(transaction => (
                <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, text, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 p-3 rounded-lg transition ${
        active 
          ? 'bg-pink-50 text-pink-600' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </a>
  );
}

function QuickAction({ title, icon, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer">
      <span className="text-3xl mb-3 block">{icon}</span>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default App;