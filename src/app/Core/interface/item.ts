interface ItemDetails {
    detali01?: string;
    detali02?: string;
    detali03?: string;
    detali04?: string;
    detali05?: string;
  }
  
  interface Item {
    title: string;
    detalis: ItemDetails;
  }
  
 export interface Items {
    [key: string]: Item;
  }