export interface Hero {
  title: string;
  subtitle: any; // Rich text document
}

export interface Hero {
  fields: Hero;
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}