import React, { FC } from 'react'
import cx from 'classnames'

export interface INewsItemProps {
  type: string
  date?: string | null
  text: string
  url: string
}

const NewsItem: FC<INewsItemProps> = ({ type, date, text, url }) => {
  return (
    <a
      className={cx(
        'News-Item',
        {
          [`News-Item_${type}`]: type !== 'default',
        },
        'Link',
        {
          Link_static: type !== 'urgent',
          'Link_white Link_wrap': type === 'urgent',
        }
      )}
      href={url}
      rel="noopener noreferrer"
    >
      {type !== 'urgent' && (
        <>
          <div className="News-Date Smallcapitals">{date}</div>
          <div className="News-Text">{text}</div>
        </>
      )}

      {type === 'urgent' && (
        <u className="Link-U Link_white-U Link_wrap-U">{text}</u>
      )}
    </a>
  )
}

export default NewsItem
