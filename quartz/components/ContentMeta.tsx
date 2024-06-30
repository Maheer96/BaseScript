import { format as fm, formatISO } from "date-fns"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

import { formatDate } from "./Date"
import { getDate } from "./Date"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: false,
  showComma: true,
}

const TimeAbbrv = ({ value }: { value: Date }) => (
  <time dateTime={formatISO(value)} title={fm(value, "ccc w")}>
    {fm(value, "MMM dd yyyy")}
  </time>
)

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    // Extract the file name from the file path, ensure filePath is defined
    const fileName = fileData.filePath ? fileData.filePath.split('/').pop() : null

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates && fileName !== 'index.md') {
        if (fileData.dates.created) {
          segments.push(
            <span>
              📜Scripted on <TimeAbbrv value={fileData.dates.created}></TimeAbbrv>
            </span>
          )
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
