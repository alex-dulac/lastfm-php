export class Artist {
  name: string | undefined;
  url: string | undefined;
  images: Array<any>[] | undefined;
  isOnTour: boolean | undefined;
  stats: Array<any> = [];
  tags: Array<any> = [];
  bio: Array<any> = [];
}
