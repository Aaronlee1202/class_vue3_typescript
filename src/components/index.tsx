import { createApp, h } from 'vue'
import MessageComponent from './MessageEvent.vue'
import type { MessageParams } from '@/types'

const Message = {
  open(params: MessageParams) {
    const dom = document.createElement('div')
    const body = document.querySelector('body') as HTMLBodyElement
    let duration: number | undefined = params.duration
    if (duration === undefined) {
      duration = 3000
    }
    body.appendChild(dom)
    const msg = h(MessageComponent, {
      text: params.text,
      type: params.type
    })
    const app = createApp({
      render() {
        return msg
      }
    })
    app.mount(dom)

    const internalClose = () => {
      msg.component?.exposed?.['closeMessage']?.()
      setTimeout(() => {
        app.unmount()
        dom.remove()
      }, 500)
    }

    return {
      close: () => {
        internalClose()
      }
    }
  }
}

export default Message
