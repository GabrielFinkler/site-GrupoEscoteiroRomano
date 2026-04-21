interface InstgrmEmbeds {
  Embeds: {
    process: () => void
  }
}

declare global {
  interface Window {
    instgrm?: InstgrmEmbeds
  }
}

export { }
