angular.module('starter.controllers', [])

.controller('CalculatorCtrl', function($scope) {

  $scope.data= { magnetica:'', campo:'', carga:'', expForca: '', expCarga: '', velocidade:'', angulo:''};

  $scope.limparCampos = function(){
    $scope.data.magnetica = undefined;
    $scope.data.campo = undefined;
    $scope.data.angulo = undefined;
    $scope.data.carga = undefined;
    $scope.data.velocidade = undefined;
    $scope.data.expCarga = undefined;
    $scope.data.expForca = undefined;

  }


  $scope.calculaForcaMagnetica = function(){
    console.log("chamou");

    if(!$scope.data.magnetica) {
      $scope.data.magnetica = parseFloat($scope.data.carga) *
      parseFloat($scope.data.velocidade) *
      parseFloat($scope.data.campo) *
      Math.sin(parseFloat($scope.data.angulo) * (Math.PI / 180));

      console.log('nao magnetica',$scope.data.magnetica, $scope.data.campo,$scope.data.carga, $scope.data.expForca, $scope.data.expCarga, $scope.data.velocidade, $scope.data.angulo );


      $scope.data.expForca = $scope.data.expCarga;

      $scope.data.velocidade = undefined;
      $scope.data.campo = undefined;
      $scope.data.angulo = undefined;
      $scope.data.carga = undefined;
      $scope.data.expCarga = undefined;

    } else if(!$scope.data.carga) {
      $scope.data.carga = parseFloat($scope.data.magnetica) / (parseFloat($scope.data.velocidade) *
        parseFloat($scope.data.campo) *
        Math.sin(parseFloat($scope.data.angulo) * (Math.PI / 180)));

      console.log('nao carga',$scope.data.magnetica );

      $scope.data.expCarga = $scope.data.expForca;

      $scope.data.velocidade = undefined;
      $scope.data.campo = undefined;
      $scope.data.angulo = undefined;
      $scope.data.magnetica = undefined;
      $scope.data.expForca = undefined;

    } else if(!$scope.data.campo) {
      $scope.data.campo = parseFloat($scope.data.magnetica) / (parseFloat($scope.data.velocidade) *
        parseFloat($scope.data.carga) *
        Math.sin(parseFloat($scope.data.angulo) * (Math.PI / 180)));
      console.log('nao campo',$scope.data.magnetica );

      $scope.data.velocidade = undefined;
      $scope.data.magnetica = undefined;
      $scope.data.angulo = undefined;
      $scope.data.carga = undefined;

    } else if(!$scope.data.velocidade) {
      $scope.data.velocidade = parseFloat($scope.data.magnetica) / (parseFloat($scope.data.campo) *
        parseFloat($scope.data.carga) *
        Math.sin(parseFloat($scope.data.angulo) * (Math.PI / 180)));

      $scope.data.magnetica = undefined;
      $scope.data.campo = undefined;
      $scope.data.angulo = undefined;
      $scope.data.carga = undefined;
      console.log('nao velocidade',$scope.data.magnetica );


    }



  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.data.$on('$ionicView.enter', function(e) {
  //});

$scope.chats = Chats.all();
$scope.remove = function(chat) {
  Chats.remove(chat);
};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('DashCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {

});
