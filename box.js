class Box{

constructor(x,y,w,h){
this.x=x
this.y=y
this.w=w
this.h =h


}
show(){
    fill(255)
    rect(this.x,this.y, this.w,this.h)
}




}

function sweet_atart(){

    swal({
        title: "Game Over!",
        text: "Better luck next time!",
        imageUrl: "images.app.goo.gl/HWqk4C4tqGFWaTk29",
        showCancelButton: false,
        confirmButtonColor: "red",
        confirmButtonText: "OK",
        closeOnConfirm: true
      },
      function(){
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      });






}
