#pragma strict

private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;
private var currentDoor : GameObject;

var doorOpenTime : float = 3.0;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;

function OnControllerColliderHit(hit : ControllerColliderHit){
if(hit.gameObject.tag == "porte_tag" && doorIsOpen == false){
currentDoor = hit.gameObject;
     Door(doorOpenSound, true, "Door_open", currentDoor);
     }
}



function Door(aClip : AudioClip, openCheck : boolean, animName : String,thisDoor : GameObject){
   audio.PlayOneShot(aClip);
   doorIsOpen = openCheck;
 thisDoor.transform.parent.animation.Play(animName);
}



function Start () {

}

function Update () {

if(doorIsOpen){
doorTimer += Time.deltaTime;
if(doorTimer > 8){
 Door(doorShutSound, false, "Door_close", currentDoor);
doorTimer = 0.0;
}
}

}

@script RequireComponent(AudioSource)