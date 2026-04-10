// /themes/hexo/components/EssayPage.js
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const loadMetingJS = () => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.APlayer && window.Meting) {
      resolve()
      return
    }
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css'
    document.head.appendChild(link)

    const scriptAPlayer = document.createElement('script')
    scriptAPlayer.src = 'https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js'
    scriptAPlayer.onload = () => {
      const scriptMeting = document.createElement('script')
      scriptMeting.src = 'https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js'
      scriptMeting.onload = resolve
      document.body.appendChild(scriptMeting)
    }
    document.body.appendChild(scriptAPlayer)
  })
}

export default function EssayPage({ essayData }) {
  const metingRefs = useRef([])

  if (!essayData) return null

  const {
    title,
    subTitle,
    tips,
    buttonLink,
    buttonText,
    top_background,
    limit = 10,
    essay_list = []
  } = essayData

  useEffect(() => {
    if (essay_list.some(item => item.aplayer)) {
      loadMetingJS().then(() => {
        if (window.Meting) {
          document.querySelectorAll('meting-js').forEach(el => {
            if (!el._meting) {
              const meting = new window.Meting()
              meting.init(el)
            }
          })
        }
      })
    }
  }, [essay_list])

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toISOString().slice(0, 10)
  }

  const isBilibiliEmbed = (url) => url && url.includes('player.bilibili.com')

  // 构建头部区域
  const headerStyle = top_background
    ? { background: `url(${top_background}) left 28% / cover no-repeat` }
    : {}

  const header = React.createElement(
    'div',
    { className: 'author-content author-content-item essayPage single', style: headerStyle },
    React.createElement(
      'div',
      { className: 'card-content' },
      React.createElement('div', { className: 'author-content-item-tips' }, title),
      React.createElement('span', { className: 'author-content-item-title' }, subTitle),
      React.createElement(
        'div',
        { className: 'content-bottom' },
        React.createElement('div', { className: 'tips' }, tips)
      ),
      React.createElement(
        'div',
        { className: 'banner-button-group' },
        React.createElement(
          Link,
          { href: buttonLink, className: 'banner-button' },
          React.createElement('i', { className: 'anzhiyufont anzhiyu-icon-arrow-circle-right' }),
          React.createElement('span', { className: 'banner-button-text' }, buttonText)
        )
      )
    )
  )

  // 构建列表项
  const listItems = essay_list.slice(0, limit).map((item, index) => {
    // 内容段落
    const contentChildren = [item.content]

    // 图片区域
    if (item.image && item.image.length > 0) {
      const imgElements = item.image.map((imgUrl, imgIdx) =>
        React.createElement(
          'a',
          {
            key: imgIdx,
            href: imgUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            'data-fancybox': 'gallery',
            'data-caption': '',
            className: 'bber-content-img'
          },
          React.createElement(Image, {
            src: imgUrl,
            alt: '',
            width: 300,
            height: 200,
            style: { objectFit: 'cover' },
            unoptimized: imgUrl.startsWith('http')
          })
        )
      )
      const emptyDivs = Array.from({ length: 3 - item.image.length }, (_, i) =>
        React.createElement('div', { key: `empty-${i}`, className: 'bber-content-noimg' })
      )
      contentChildren.push(
        React.createElement('div', { className: 'bber-container-img' }, ...imgElements, ...emptyDivs)
      )
    }

    // 视频区域
    if (item.video && item.video.length > 0) {
      const videoElements = item.video.map((videoUrl, vidIdx) => {
        if (isBilibiliEmbed(videoUrl)) {
          return React.createElement(
            'div',
            {
              key: vidIdx,
              style: {
                position: 'relative',
                padding: '30% 45%',
                marginTop: 10,
                marginBottom: 10
              }
            },
            React.createElement('iframe', {
              src: videoUrl,
              scrolling: 'no',
              frameBorder: '0',
              allowFullScreen: true,
              style: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                margin: 0,
                borderRadius: 12,
                border: 'var(--style-border)'
              }
            })
          )
        } else {
          return React.createElement(
            'a',
            {
              key: vidIdx,
              href: videoUrl,
              'data-fancybox': 'gallery',
              'data-caption': '',
              className: 'bber-content-video'
            },
            React.createElement('video', { src: videoUrl, controls: true, style: { maxWidth: '100%' } })
          )
        }
      })
      const emptyDivs = Array.from({ length: 3 - item.video.length }, (_, i) =>
        React.createElement('div', { key: `empty-${i}`, className: 'bber-content-noimg' })
      )
      contentChildren.push(
        React.createElement('div', { className: 'bber-container-img' }, ...videoElements, ...emptyDivs)
      )
    }

    // 音乐播放器
    if (item.aplayer) {
      contentChildren.push(
        React.createElement(
          'div',
          { className: 'bber-music' },
          React.createElement('meting-js', {
            id: item.aplayer.id,
            server: item.aplayer.server,
            type: 'song',
            mutex: 'true',
            preload: 'none',
            theme: 'var(--anzhiyu-main)',
            'data-lrctype': '0',
            order: 'list'
          })
        )
      )
    }

    const contentP = React.createElement('p', { className: 'datacont' }, ...contentChildren)

    // 底部信息
    const infoChildren = [
      React.createElement(
        'div',
        { className: 'bber-info-time', key: 'time' },
        React.createElement('i', { className: 'anzhiyufont anzhiyu-icon-clock' }),
        React.createElement(
          'time',
          { dateTime: item.date, className: 'datatime' },
          formatDate(item.date)
        )
      )
    ]

    if (item.link) {
      infoChildren.push(
        React.createElement(
          'a',
          {
            key: 'link',
            className: 'bber-content-link',
            title: '跳转到短文指引的链接',
            href: item.link,
            rel: 'external nofollow noreferrer'
          },
          React.createElement('i', { className: 'anzhiyufont anzhiyu-icon-link' }),
          '链接'
        )
      )
    }

    if (item.from) {
      infoChildren.push(
        React.createElement(
          'div',
          { className: 'bber-info-from', key: 'from' },
          React.createElement('i', { className: 'anzhiyufont anzhiyu-icon-fw-fire' }),
          React.createElement('span', null, item.from)
        )
      )
    }

    if (item.address) {
      infoChildren.push(
        React.createElement(
          'div',
          { className: 'bber-info-from', key: 'address' },
          React.createElement('i', { className: 'anzhiyufont anzhiyu-icon-location-dot' }),
          React.createElement('span', null, item.address)
        )
      )
    }

    const infoDiv = React.createElement('div', { className: 'bber-info' }, ...infoChildren)

    const replyDiv = React.createElement(
      'div',
      {
        className: 'bber-reply',
        onClick: () => {
          if (typeof window !== 'undefined' && window.rm?.rightMenuCommentText) {
            window.rm.rightMenuCommentText(item.content)
          } else {
            navigator.clipboard?.writeText(item.content)
          }
        }
      },
      React.createElement('i', { className: 'anzhiyufont anzhiyu-icon-message' })
    )

    const bottomDiv = React.createElement('div', { className: 'bber-bottom' }, infoDiv, replyDiv)

    return React.createElement(
      'li',
      { key: index, className: 'bber-item' },
      React.createElement('div', { className: 'bber-content' }, contentP),
      React.createElement('hr'),
      bottomDiv
    )
  })

  const list = React.createElement('ul', { id: 'waterfall', className: 'list' }, ...listItems)
  const section = React.createElement('section', { className: 'timeline page-1' }, list)
  const bberDiv = React.createElement('div', { id: 'bber' }, section)

  const tipsDiv = React.createElement(
    'div',
    { id: 'bber-tips', style: { color: 'var(--anzhiyu-secondtext)' } },
    `- 只展示最近${limit}条短文 -`
  )

  return React.createElement(
    'div',
    { id: 'essay_page' },
    header,
    bberDiv,
    tipsDiv
  )
}
