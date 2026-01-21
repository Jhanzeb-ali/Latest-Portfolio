
import React from 'react';
import { MARKET_DATA } from '../constants';

const MarketTicker: React.FC = () => {
  return (
    <div className="fixed top-20 md:top-24 left-0 w-full z-40 bg-black/60 backdrop-blur-md border-y border-white/5 py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        {[...MARKET_DATA, ...MARKET_DATA, ...MARKET_DATA].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-4 px-8 border-r border-white/10">
            <span className={`font-mono text-[10px] md:text-xs font-bold ${item.isGold ? 'text-yellow-400' : 'text-gray-400'}`}>
              {item.coin}
            </span>
            <span className="font-mono text-[10px] md:text-xs text-white">
              {item.price}
            </span>
            <span className={`font-mono text-[9px] md:text-[10px] ${item.change.startsWith('+') ? 'text-green-400' : item.change === 'STABLE' ? 'text-blue-400' : 'text-red-400'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarketTicker;
