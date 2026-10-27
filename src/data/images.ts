// All photography is from Pexels (https://www.pexels.com) — free to use under the Pexels licence.
export const px = (id: number, w = 1200, h?: number): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${h ? `&h=${h}&fit=crop` : ''}`;

export const img = {
  heroCampus: px(7972324, 2000),
  studentsLibrary: px(9572540, 1000),
  studentsClassroom: px(8199160, 2000),
  studentsTeamwork: px(8199634, 1000),
  studentsChat: px(7972508, 1000),
  graduation: px(7944181, 2000),
  graduates: px(8106623, 1000),
  counselling: px(5306437, 1000),
  passport: px(4452530, 1000),
  englishClass: px(5428012, 1000),
  studyDesk: px(6549588, 1000),
  airport: px(3140204, 1000),
  universityBuilding: px(7507821, 2000),
  handshake: px(33175650, 1000),
  officeMeeting: px(7495291, 2000),
  teamOffice: px(12903168, 1000),
  worldMap: px(8828418, 2000),
  documents: px(9870223, 1000),
  avatar1: px(31470506, 120, 120),
  avatar2: px(5715795, 120, 120),
  avatar3: px(38165826, 120, 120),
} satisfies Record<string, string>;

export type ImageKey = keyof typeof img;
