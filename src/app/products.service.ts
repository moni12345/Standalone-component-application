import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  brandName: string;
  description: string;
  longDescription: string;
  photoUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  products: Product[] = [
    {
      name: 'ABC',
      brandName: 'ABC First',
      description: 'sjswi akjhns cdkjievnj kdshois skhnjdishd ksosoh.',
      longDescription:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum in quam sit amet justo laoreet facilisis non eget nulla. Cras elit mauris, tristique ac nisl in, ullamcorper tincidunt turpis. Maecenas in condimentum sapien. Proin pharetra turpis non justo varius luctus. Praesent in risus lorem. Curabitur et nibh viverra, mollis est vitae, vestibulum libero. Pellentesque vitae turpis pharetra, sollicitudin nunc quis, efficitur augue. Mauris eu sollicitudin eros, id finibus quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      photoUrl: '/assets/jpg/watch1.jpg',
    },
    {
      name: 'DEF',
      brandName: 'DEF Second',
      description:
        'kojwo alkj sojw pokipr iwhwug lfkjofkj pdkof pfpg.',
      longDescription:
        'Pellentesque in sodales quam. Suspendisse metus risus, tristique eget gravida quis, condimentum id mi. Fusce magna ex, facilisis vitae tempor non, efficitur pharetra metus. Quisque et arcu sed eros posuere maximus. Curabitur iaculis varius volutpat. Pellentesque maximus, tellus id congue dictum, velit ipsum elementum lacus, quis ultrices nisl orci et tellus. Praesent semper enim eu eros consequat, vitae semper tortor maximus. Nunc eleifend interdum auctor.',
      photoUrl: '/assets/jpg/watch2.jpg',
    },
    {
      name: 'GHI',
      brandName: 'GHI Third',
      description:
        'amkklmj almola oqo pala kak akk irjrihj oeoeoi pwpqw.',
      longDescription:
        'In sagittis iaculis tortor, sit amet hendrerit velit dapibus eu. Quisque semper a urna non egestas. Aliquam ultrices pulvinar ligula, et placerat est luctus lobortis. In venenatis neque ac tellus semper scelerisque. Praesent eu ornare felis. Proin sagittis augue eu elementum lacinia. Suspendisse eu felis pellentesque, auctor mauris nec, mattis dui. Etiam fringilla dui nec nulla scelerisque, non fringilla massa porta. Aliquam aliquet purus ligula, eu blandit dui eleifend sit amet. Nulla facilisi. In vel ornare elit, ut tempor nulla.',
      photoUrl: '/assets/jpg/watch3.jpg',
    },
    {
      name: 'JKL',
      brandName: 'JKL Fourth',
      description: 'dskn ksnks iksnki sinsi kaika.',
      longDescription:
        'Quisque consequat vulputate arcu vel lobortis. Maecenas non tristique sapien. Duis tincidunt pretium quam eu ultrices. Nam eget nisi dignissim, vulputate lacus sed, faucibus elit. Fusce eget vulputate lacus. Quisque sed nisi id massa vestibulum eleifend eu id sapien. Phasellus venenatis, leo eu vehicula sagittis, ligula mi ultricies enim, a elementum enim enim vitae lorem. Nam sit amet turpis sem. Integer augue mi, hendrerit sit amet molestie et, varius eu dolor. Vivamus in iaculis tellus, nec hendrerit quam. Nulla vitae sapien risus. Curabitur semper, turpis sit amet venenatis tristique, urna tellus efficitur ipsum, a scelerisque sem purus ut velit. Phasellus faucibus blandit enim vitae consequat.',
      photoUrl: '/assets/jpg/watch4.jpg',
    },
    {
      name: 'MNO',
      brandName: 'MNO Fifth',
      description: 'amj kakmna knakin oakinm aomka.',
      longDescription:
        'Quisque consequat vulputate arcu vel lobortis. Maecenas non tristique sapien. Duis tincidunt pretium quam eu ultrices. Nam eget nisi dignissim, vulputate lacus sed, faucibus elit. Fusce eget vulputate lacus. Quisque sed nisi id massa vestibulum eleifend eu id sapien. Phasellus venenatis, leo eu vehicula sagittis, ligula mi ultricies enim, a elementum enim enim vitae lorem. Nam sit amet turpis sem. Integer augue mi, hendrerit sit amet molestie et, varius eu dolor. Vivamus in iaculis tellus, nec hendrerit quam. Nulla vitae sapien risus. Curabitur semper, turpis sit amet venenatis tristique, urna tellus efficitur ipsum, a scelerisque sem purus ut velit. Phasellus faucibus blandit enim vitae consequat.',
      photoUrl: '/assets/jpg/watch5.jpg',
    },
  ];
}
