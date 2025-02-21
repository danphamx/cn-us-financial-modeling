import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const StackedCostBreakdown = () => {
  const data = [
    {
      name: 'Tier 1',
      'Housing (City Center)': 2500,
      'Utilities & Internet': 220,
      'Transportation': 250,
      'Groceries': 600,
      'Dining Out': 800,
      'Healthcare': 200,
      'Entertainment': 500,
      'US Housing': 5416,
    },
    {
      name: 'Tier 2',
      'Housing (City Center)': 1200,
      'Utilities & Internet': 180,
      'Transportation': 180,
      'Groceries': 450,
      'Dining Out': 500,
      'Healthcare': 150,
      'Entertainment': 400,
      'US Housing': 5416,
    },
    {
      name: 'Tier 3',
      'Housing (City Center)': 700,
      'Utilities & Internet': 150,
      'Transportation': 125,
      'Groceries': 350,
      'Dining Out': 400,
      'Healthcare': 120,
      'Entertainment': 300,
      'US Housing': 5416,
    },
    {
      name: 'Zhengzhou',
      'Housing (City Center)': 900,
      'Utilities & Internet': 165,
      'Transportation': 155,
      'Groceries': 400,
      'Dining Out': 450,
      'Healthcare': 130,
      'Entertainment': 350,
      'US Housing': 5416,
    }
  ];

  const colors = {
    'Housing (City Center)': '#8884d8',
    'Utilities & Internet': '#82ca9d',
    'Transportation': '#ffc658',
    'Groceries': '#ff8042',
    'Dining Out': '#a4de6c',
    'Healthcare': '#d0ed57',
    'Entertainment': '#83a6ed',
    'US Housing': '#b5b5b5'
  };

  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum, entry) => sum + entry.value, 0);
      return (
        <div className="bg-white p-4 border border-gray-200 rounded shadow">
          <p className="font-bold mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
          <div className="border-t mt-2 pt-2">
            <p className="font-bold">Total: {formatCurrency(total)}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96 p-4">
      <h2 className="text-xl font-bold mb-4">Monthly Cost Breakdown by City Tier (USD)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 60,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {Object.keys(colors).map((key) => (
            <Bar key={key} dataKey={key} stackId="a" fill={colors[key]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        <p>* Values shown are maximum costs in each category</p>
        <p>* Hover over bars to see detailed cost breakdowns</p>
        <p>* US Housing cost ($5,416) is included in gray at the top of each bar</p>
      </div>
    </div>
  );
};

export default StackedCostBreakdown;