/* eslint func-names:0 */

// Create Array.from function if not supported

export default function arrayFrom() {
  if (!Array.from) {
    Array.from = (data) => Array.prototype.slice.call(data);
  }
}
