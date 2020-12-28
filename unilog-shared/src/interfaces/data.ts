export interface Coordinates {
  x: number;
  y: number;
}

export interface Rectangle extends Coordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface State {
  world: MapWorld;
  users: User[];
}

export interface Cursor {
  frame: Rectangle;
  contents: {layerId: number, data: number[]}[];
}

export interface User {
  id: string;
  selection?: Rectangle;
  cursor?: Cursor;
}

export interface MapWorld {
  compressionlevel: number;
  editorsettings: EditorSettings;
  height: number;
  infinite: boolean;
  layers: Layer[];
  nextlayerid: number;
  nextobjectid: number;
  orientation: string;
  renderorder: string;
  tiledversion: string;
  tileheight: number;
  tilesets: Tileset[];
  tilewidth: number;
  type: string;
  version: number;
  width: number;
}

export interface EditorSettings {
  export: Export;
}

export interface Export {
  target: string;
}

export interface Layer {
  data?: number[];
  height?: number;
  id: number;
  name: string;
  opacity: number;
  properties?: Property[];
  type: string;
  visible: boolean;
  width?: number;
  x: number;
  y: number;
  draworder?: string;
  objects?: any[];
}

export interface Tileset {
  columns: number;
  firstgid: number;
  image: string;
  imageheight: number;
  imagewidth: number;
  margin: number;
  name: string;
  spacing: number;
  tilecount: number;
  tileheight: number;
  tilewidth: number;
  tiles?: Tile[];
}

export interface Tile {
  id: number;
  properties: Property[];
}

export interface Property {
  name: string;
  type: string;
  value: any;
}
