routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome', // name of this defined app 'state' ... redirected to here from ui-sref "welcome" link in app.html
    url: '/', // url associated with this 'state'
    component: 'welcome' // redirects to template driven by welcome.js
  });

  $stateProvider.state({
    name: 'welcome.new',  // redirected to here from ui-sref link in welcome.js
    url: 'new',
    template: '<p>Hello my new friend!</p>'
  });

  $stateProvider.state({
    name: 'welcome.returning',  // redirected to here from ui-sref link in welcome.js
    url: 'returning',
    template: '<p>Welcome back!</p>'
  });

  $stateProvider.state({
    name: 'spiders', // name of this defined app 'state' ... redirected to here from ui-sref "spiders" link in albums.html
    url: '/spiders', // url associated with this 'state'
    component: 'spiders'
  });

  $stateProvider.state({
    name: 'mantids', // name of this defined app 'state' ... redirected to here from ui-sref "mantids" link in albums.html
    url: '/mantids', // url associated with this 'state'
    component: 'mantids'
  });

  $stateProvider.state({ // collective list of albums
    name: 'albums',
    url: '/albums',
    component: 'albums'
  });

  $stateProvider.state({ // specific album image by id
    name: 'album',
    url: '/albums/:id',
    abstract: true,
    resolve: {
      album: ['albumService', '$transition$', (albums, t) => {
        return albums.get(t.params().id);
      }],
      images: ['album', album => album.images]
    },
    component: 'album'
  });

  $stateProvider.state({ // detail view of image
    name: 'album.detail',
    url: '/detail',
    component: 'imageDetail'
  });

  $stateProvider.state({ // thumbnail view of image
    name: 'album.thumbnail',
    url: '/thumbnail',
    component: 'imageThumbnail'
  });

  $stateProvider.state({ // fullsize view of image
    name: 'album.fullsize',
    url: '/fullsize',
    component: 'imageFullSize'
  });


  // $stateProvider.state({
  //   name: 'albums', // name of this defined app 'state' ... redirected to here from ui-sref "albums" link in image-gallery.html
  //   url: '/albums', // url associated with this 'state'
  //   component: 'albums',
  //   resolve: {
  //     albums: ['albumService', albumService => albumService.get() ]
  //   }
  // });

  // $stateProvider.state({
  //   name: 'albums.main',
  //   url: '/main',
  //   params: {
  //     main: {dynamic: true}
  //   },
  //   views: {
  //     newAlbum: {
  //       component: 'newAlbum'
  //     }
  //   }
  // });

  // $stateProvider.state({
  //   name: 'album',
  //   //abstract: true,
  //   default: '.detail',
  //   url: '/album/:id?view',
  //   params: {
  //     view: {dynamic: true}
  //   },
  //   resolve: {
  //     album: ['albumService', '$transition$', (albums, t) => {
  //       return albums.get(t.params().id);
  //     }],
  //     images: ['album', album => album.images]
  //   },
  //   component: 'album',
  //   views: {}
  // });


  // $stateProvider.state({
  //   name: 'new-image', // name of this defined app 'state' ... redirected to here from ui-sref "new-image" link in image-gallery.html
  //   url: '/new-image', // url associated with this 'state'
  //   component: 'newImage'
  // });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.main',
    url: '/main',
    views: {
      header: {
        component: 'aboutHeader'
      },
      main: {
        component: 'aboutMain'
      }
    }
  });

  $stateProvider.state({
    name: 'next',
    url: '/next',
    component: 'next'
  });

  $stateProvider.state({
    name: 'next.main',
    url: '/main',
    views: {
      header: {
        component: 'nextHeaderSpecial'
      },
      main: {
        component: 'nextMainSpecial'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}

// $stateProvider.state({
//   name: 'images', // name of this defined app 'state' ... redirected to here from ui-sref "images" link in image-gallery.html
//   url: '/images', // url associated with this 'state'
//   component: 'images'
// });

// need to add resolve
// $stateProvider.state({
//   name: 'images', // name of this defined app 'state' ... redirected to here from ui-sref "images" link in image-gallery.html
//   url: '/images', // url associated with this 'state'
//   abstract: true,
//   default: '.detail',
//   resolve: {
//     images: ['imageService', images => {
//       return images.get();
//     }]
//   },
//   component: 'images'
// });
