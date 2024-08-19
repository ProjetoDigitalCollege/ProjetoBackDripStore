import { Image } from '../Models/3.Image.js';

export const seedImagens = async () => {
  const imagens = [
    { enabled: true, path: 'https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/1161528/pexels-photo-1161528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/233312/pexels-photo-233312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/1161538/pexels-photo-1161538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/1302321/pexels-photo-1302321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { enabled: true, path: 'https://www.befastbrasil.com/cdn/shop/files/S2e0245dad46d46dcaa85d0adc82afd4aP_800x.jpg?v=1689912527' },
    { enabled: true, path: 'https://multitare.com/cdn/shop/files/tenis-esportivo-masculino-confort-max-preto-laranja-38-193-416.jpg?v=1689392948' },
    { enabled: true, path: 'https://d1augy8wbrpu4v.cloudfront.net/Custom/Content/Products/11/40/1140205_tenis-kolosh-esportivo-masculino-branco-h3361-00002_l26_638156178237218707.jpg' },
    { enabled: true, path: 'https://fnac.com.br/wp-content/uploads/2023/04/tenis-esportivo-respiravel-trend-791-224.jpg' },
  ];

  try {
    await Image.bulkCreate(imagens);
    console.log('Imagens inseridas com sucesso');
  } catch (error) {
    console.error('Erro ao inserir imagens:', error);
  }
};
