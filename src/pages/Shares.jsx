import { useState } from "react";
import { motion } from "framer-motion";
import { Coins, Check } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const PRICE_PER_SHARE = 10;

export default function Shares() {
  const [percent, setPercent] = useState(1);
  const [reserved, setReserved] = useState(false);
  const total = percent * PRICE_PER_SHARE;

  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-28 md:pt-32 pb-24 px-[4%] md:px-[2%]">
      <div className="max-w-[620px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white mb-6">
            <Coins size={22} />
          </div>
          <p className="font-body text-xs tracking-label uppercase text-neutral-500 mb-4">
            Ownership
          </p>
          <h1 className="font-display text-display-lg font-light">Buy Shares</h1>
          <p className="font-body text-sm text-neutral-500 mt-4">$10 per share</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm"
        >
          <p className="font-body text-xs tracking-label uppercase text-neutral-500 mb-8">
            Choose your stake
          </p>

          <div className="flex items-end justify-between mb-6">
            <span className="font-display text-6xl font-light leading-none">
              {percent}%
            </span>
            <span className="font-body text-lg text-neutral-600">${total}</span>
          </div>

          <Slider
            value={[percent]}
            onValueChange={(value) => {
              setPercent(value[0]);
              setReserved(false);
            }}
            min={1}
            max={50}
            step={1}
          />

          <div className="flex justify-between mt-3 font-body text-xs text-neutral-400">
            <span>1%</span>
            <span>50%</span>
          </div>

          <p className="font-body text-xs text-neutral-500 mt-6">
            1% = 1 share · $10 per share
          </p>

          {reserved ? (
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-neutral-900 text-white px-5 py-4">
              <Check size={18} className="shrink-0" />
              <p className="font-body text-sm">
                Reserved {percent}% for ${total}. We'll be in touch to complete your
                purchase.
              </p>
            </div>
          ) : (
            <button
              onClick={() => setReserved(true)}
              className="mt-8 w-full rounded-full bg-neutral-900 text-white py-4 font-body text-sm tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              Buy Shares
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}