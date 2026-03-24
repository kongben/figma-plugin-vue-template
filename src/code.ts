/// <reference types="@figma/plugin-typings" />

const ui = __html__

  figma.showUI(ui, { width: 400, height: 500 })

  figma.ui.onmessage = async (msg: { type: string; [key: string]: any }) => {

  }
