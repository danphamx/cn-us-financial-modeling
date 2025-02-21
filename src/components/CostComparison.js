import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer
} from 'recharts';

const CostComparison = () => {
  const data = [
    {
      name: 'Tier 1',
      min: 8796,
      max: 10336,
      range: 10336 - 8796,
      usHousing: 5416,
      localCosts: 10336 - 5416,
    },
    {
      name: 'Tier 2',
      min: 7306,
      max: 8446,
      range: 8446 - 7306,
      usHousing: 5416,
      localCosts: 8446 - 5416,
    },
    {
      name: 'Tier 3',
      min: 6881,
      max: 7861,
      range: 7861 - 6881,
      usHousing: 5416,
      localCosts: 7861 - 5416,
    },
    {
      name: 'Zhengzhou',
      min: 7186,
      max: 8166,
      range: 8166 - 7186,
      usHousing: 5416,
      localCosts: 8166 - 5416,
    }
  ];

  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded shadow">
          <p className="font-bold">{label}</p>
          <p className="text-sm">Range: {formatCurrency(payload[0].payload.min)} - {formatCurrency(payload[0].payload.max)}</p>
          <p className="text-sm">US Housing: {formatCurrency(payload[0].payload.usHousing)}</p>
          <p className="text-sm">Local Costs: {formatCurrency(payload[0].payload.localCosts)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96 p-4">
      <h2 className="text-xl font-bold mb-4">Monthly Cost of Living Comparison (USD)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="localCosts" stackId="a" fill="#82ca9d" name="Local Costs" />
          <Bar dataKey="usHousing" stackId="a" fill="#8884d8" name="US Housing" />
          <ReferenceLine y={5416} stroke="#8884d8" strokeDasharray="3 3" label="US Housing Cost" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        <p>* Bars show maximum monthly costs including US housing obligations of $5,416</p>
        <p>* Hover over bars to see detailed cost breakdowns</p>
      </div>
    </div>
  );
};

export default CostComparison;