import React from 'react';
import CostComparison from './components/CostComparison';
import StackedCostBreakdown from './components/StackedCostBreakdown';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">China Cities Cost Comparison</h1>
      <div className="space-y-8">
        <CostComparison />
        <StackedCostBreakdown />
      </div>
    </div>
  );
}

export default App;