export interface ResponseArtista {
  artists:
  [{
    albumGroups: any
    amg: string
    bios: any
    blurbs: any
    href: string
    id: string
    links: any
    name: string
    shortcut: string
    type: string
    img: any
  }],
  meta: {}
}
export interface ResponseAlbums {
  albums:[],
  meta: {}
}
export interface ResponseTrasksAlbums {
  tracks:[],
  meta: {}
}
