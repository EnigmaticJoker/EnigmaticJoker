document.addEventListener('DOMContentLoaded', function () {
    var board1 = Chessboard('board1', {
        draggable: true,
        dropOffBoard: 'trash',
        sparePieces: true
    });
});