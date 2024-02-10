type Image = {
  _id: string;
  src: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  width: number;
  height: number;
  title: string;
  altText: string;
  description: string;
  metadata: object;
}
export type BeforeAfter = {
  _id: string;
  place: string;
  duration: string;
  beforeImage: Image;
  afterImage: Image;
  comment: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: 3,
  }
}

export type BeforeAfterResponse = {
  items: BeforeAfter[];
}