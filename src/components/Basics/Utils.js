const imgExt = ['jpg', 'jpeg', 'gif', 'png', 'webp'];
const movExt = ['webm', 'mp4'];

export function getExtension(name) {
  return /(?:\.([^.]+))?$/.exec(name)[1];
}

export function isImage(name) {
  return (imgExt.indexOf(getExtension(name)) !== -1);
}

export function isVideo(name) {
  return (movExt.indexOf(getExtension(name)) !== -1);
}
