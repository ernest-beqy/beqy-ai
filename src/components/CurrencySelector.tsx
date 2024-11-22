import React from 'react';
import { ChevronDown } from 'lucide-react';

export type Currency = {
  code: string;
  symbol: string;
  rate: number;
};

export const currencies: Currency[] = [
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'ZAR', symbol: 'R', rate: 19.02 }
];

interface CurrencySelectorProps {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  selectedCurrency,
  onCurrencyChange
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between w-24 px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <span>{selectedCurrency.code}</span>
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-24 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => {
                onCurrencyChange(currency);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                selectedCurrency.code === currency.code ? 'bg-green-50 text-green-700' : ''
              }`}
            >
              {currency.code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;