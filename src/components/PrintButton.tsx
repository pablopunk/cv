import { TiPrinter } from 'react-icons/ti'
import * as Tooltip from '@radix-ui/react-tooltip'

interface Props {
  printText: string
  tooltipTitle: string
  tooltipItems: string[]
}

export default function PrintButton({ 
  printText, 
  tooltipTitle,
  tooltipItems
}: Props) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>
          <button
            onClick={() => window.print()}
            className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 hover:bg-bg hover:text-accent h-8 rounded-md px-2.5 py-3 gap-1.5"
          >
            <TiPrinter size="1.1em" />
            <span className="hidden sm:inline">{printText}</span>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-base select-none rounded-md bg-bg2 dark:bg-bg text-fg px-4 py-3 shadow-lg max-w-sm dark:border dark:border-accent2/30"
            sideOffset={5}
          >
            <p className="font-semibold mb-2">{tooltipTitle}</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {tooltipItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Tooltip.Arrow className="fill-bg2 dark:fill-bg" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}