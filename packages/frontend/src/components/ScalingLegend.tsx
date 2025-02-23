import React from 'react'

import {
  ArbitrumIcon,
  LoopringIcon,
  OptimismIcon,
  OVMIcon,
  PolygonIcon,
  StarknetIcon,
  StarkWareIcon,
  ZkSyncIcon,
} from './icons'

export function ScalingLegend() {
  return (
    <div className="mt-4 grid gap-2 text-sm md:grid-cols-2">
      <p className="flex gap-1">
        <StarkWareIcon className="relative -top-0.5 min-w-[24px]" />
        <span>&ndash;</span>
        <span>This project is built using StarkEx.</span>
      </p>
      <p className="flex gap-1">
        <OptimismIcon className="relative -top-0.5 min-w-[24px]" />
        <span>&ndash;</span>
        <span>This project is based on OP Stack&apos;s code base.</span>
      </p>
      <p className="flex gap-1">
        <OVMIcon className="relative -top-0.5 min-w-[24px]" />
        <span>&ndash;</span>
        <span>This project is based on old OVM&apos;s code base.</span>
      </p>
      <p className="flex gap-1">
        <ZkSyncIcon className="relative -top-0.5 min-w-[24px]" />
        <span>&ndash;</span>
        <span>This project is based on zkSync&apos;s code base.</span>
      </p>
      <p className="flex gap-1">
        <LoopringIcon className="relative -top-0.5 min-w-[24px]" />
        <span>&ndash;</span>
        <span>This project is based on Loopring&apos;s code base.</span>
      </p>
      <p className="flex gap-1">
        <ArbitrumIcon className="relative -top-0.5 min-w-[24px]" />
        <span>&ndash;</span>
        <span>This project is based on Arbitrum&apos;s code base.</span>
      </p>
      <p className="flex gap-1">
        <PolygonIcon className="relative -top-0.5 min-w-[24px]" />
        <span>&ndash;</span>
        <span>This project is based on Polygon&apos;s code base.</span>
      </p>
      <p className="flex gap-1">
        <StarknetIcon className="relative -top-0.5 min-w-[24px]" />
        <span>&ndash;</span>
        <span>This project is based on Starknet&apos;s code base.</span>
      </p>
    </div>
  )
}
