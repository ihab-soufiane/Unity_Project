#pragma strict
private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;
private var currentDoor : GameObject;

var doorOpenTime : float = 3.0;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;


function Door(aClip : AudioClip, openCheck : boolean, animName : String,thisDoor : GameObject){
   audio.PlayOneShot(aClip);
   doorIsOpen = openCheck;
 thisDoor.transform.parent.animation.Play(animName);
}



function Start () {

}

function Update () {

var hit : RaycastHit;
if(Physics.Raycast (transform.position, transform.forward, hit, 5)) {
if(hit.collider.gameObject.tag== "porte_tag" && doorIsOpen ==
false){
currentDoor = hit.collider.gameObject;
Door(doorOpenSound, true, "Door_open", currentDoor);}}
if(doorIsOpen){
doorTimer += Time.deltaTime;
if(doorTimer > 4){
Door(doorShutSound, false, "Door_closed", currentDoor);
doorTimer = 0.0;
} }


}

@script RequireComponent(AudioSource)