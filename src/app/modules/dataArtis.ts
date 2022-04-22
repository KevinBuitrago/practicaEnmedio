
export interface DataArtista {

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

}
export interface DataAlbum {
  type: string
  id: string
  upc: string
  shortcut: string
  href: string
  name: string
  released: string
  originallyReleased: string
  label: string
  copyright: String
  tags: []
  discCount: number
  trackCount: number
  isExplicit: boolean
  isSingle: boolean
  accountPartner: string
  artistName: string
  isAvailableInHiRes: boolean
  isAvailableInAtmos: boolean
  contributingArtists: {}
  discographies: {}
  links: {}
  isStreamable: boolean
  img: any

}
