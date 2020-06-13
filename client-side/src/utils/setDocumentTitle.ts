/**
 * 设置文档标题
 * @param title
 */
export function setDocumentTitle(title: string) {
  if (window && window.document) {
    window.document.title = title
  }
}
