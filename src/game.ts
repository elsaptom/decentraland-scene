import utils from '../node_modules/decentraland-ecs-utils/index'
import { Books } from './books'

 
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)
const sceneMessageBus = new MessageBus()

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("78300a73-f19a-4e91-bb8a-08a641e29706/FloorBaseWood_01/FloorBaseWood_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const outdoorTable = new Entity('outdoorTable')
engine.addEntity(outdoorTable)
outdoorTable.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(28.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
outdoorTable.addComponentOrReplace(transform9)
const gltfShape5 = new GLTFShape("ea9146e1-5666-40da-80c9-8a3ce23fb979/Table_01/Table_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
outdoorTable.addComponentOrReplace(gltfShape5)

const armchairRed = new Entity('armchairRed')
engine.addEntity(armchairRed)
armchairRed.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(5.5, 0, 18),
  rotation: new Quaternion(-0.013521425426006317, 0.7716787457466125, 0.013521332293748856, 0.6357250213623047),
  scale: new Vector3(1, 1, 1)
})
armchairRed.addComponentOrReplace(transform10)
const gltfShape6 = new GLTFShape("dc2d6a5f-0dc7-4300-8015-46993a3c425d/RedArmchair.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
armchairRed.addComponentOrReplace(gltfShape6)

const armchairRed2 = new Entity('armchairRed2')
engine.addEntity(armchairRed2)
armchairRed2.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(5.5, 0, 14.5),
  rotation: new Quaternion(-4.470348002882929e-8, -0.7071068286895752, 1.639127589214695e-7, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
armchairRed2.addComponentOrReplace(transform11)
armchairRed2.addComponentOrReplace(gltfShape6)

const tableWithChairs = new Entity('tableWithChairs')
engine.addEntity(tableWithChairs)
tableWithChairs.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(25.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableWithChairs.addComponentOrReplace(transform12)
const gltfShape7 = new GLTFShape("f7de372b-3ac8-4f56-a822-640326132014/Table_with_Chairs.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
tableWithChairs.addComponentOrReplace(gltfShape7)

const coffeeMachine = new Entity('coffeeMachine')
engine.addEntity(coffeeMachine)
coffeeMachine.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(28.5, 1, 15),
  rotation: new Quaternion(1.982487177554031e-15, -1, 1.1920928244535389e-7, 2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
coffeeMachine.addComponentOrReplace(transform13)
const gltfShape8 = new GLTFShape("bf7da256-1314-40dc-a5b4-19c8dc5196e4/Coffee_Machine.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
coffeeMachine.addComponentOrReplace(gltfShape8)
coffeeMachine.addComponentOrReplace(new AudioSource(new AudioClip("sounds/coffee-machine.mp3")))
coffeeMachine.addComponentOrReplace(
  new OnPointerDown((e) => {
    coffeeMachine.getComponent(AudioSource).playing = true
    sceneMessageBus.emit('play-coffee-sound', {})
  }
  )  
)

const table = new Entity('table')
engine.addEntity(table)
table.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(15.7, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
table.addComponentOrReplace(transform15)
const gltfShape9 = new GLTFShape("619c08da-51a4-49db-9ad5-49e5e88b344b/Table 2.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
table.addComponentOrReplace(gltfShape9)

const chairHighBack = new Entity('chairHighBack')
engine.addEntity(chairHighBack)
chairHighBack.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(16, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairHighBack.addComponentOrReplace(transform16)
const gltfShape10 = new GLTFShape("9cc4b4a2-46b6-4b49-aef9-da3959de0ac8/HighBackChair.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
chairHighBack.addComponentOrReplace(gltfShape10)

const chairHighBack2 = new Entity('chairHighBack2')
engine.addEntity(chairHighBack2)
chairHighBack2.setParent(_scene)
chairHighBack2.addComponentOrReplace(gltfShape10)
const transform17 = new Transform({
  position: new Vector3(15.5, 0, 17.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
chairHighBack2.addComponentOrReplace(transform17)

const chairHighBack3 = new Entity('chairHighBack3')
engine.addEntity(chairHighBack3)
chairHighBack3.setParent(_scene)
chairHighBack3.addComponentOrReplace(gltfShape10)
const transform18 = new Transform({
  position: new Vector3(16, 0, 17),
  rotation: new Quaternion(1.8338432714645053e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack3.addComponentOrReplace(transform18)

const chairHighBack4 = new Entity('chairHighBack4')
engine.addEntity(chairHighBack4)
chairHighBack4.setParent(_scene)
chairHighBack4.addComponentOrReplace(gltfShape10)
const transform19 = new Transform({
  position: new Vector3(16, 0, 15.5),
  rotation: new Quaternion(1.8338432714645053e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack4.addComponentOrReplace(transform19)

const chairHighBack5 = new Entity('chairHighBack5')
engine.addEntity(chairHighBack5)
chairHighBack5.setParent(_scene)
chairHighBack5.addComponentOrReplace(gltfShape10)
const transform20 = new Transform({
  position: new Vector3(15, 0, 15),
  rotation: new Quaternion(-1.1811653373861985e-14, 0.7071068286895752, -8.429371689544496e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack5.addComponentOrReplace(transform20)

const chairHighBack6 = new Entity('chairHighBack6')
engine.addEntity(chairHighBack6)
chairHighBack6.setParent(_scene)
chairHighBack6.addComponentOrReplace(gltfShape10)
const transform21 = new Transform({
  position: new Vector3(15, 0, 16.5),
  rotation: new Quaternion(-1.1811653373861985e-14, 0.7071068286895752, -8.429371689544496e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack6.addComponentOrReplace(transform21)

const transform22 = new Transform({
  position: new Vector3(16, 1, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6, 0.6, 0.6)
})
const gltfShape11 = new GLTFShape("44bcc403-ae66-42db-ba5d-bd561040f607/Books.glb")
const books = new Books(
  gltfShape11,
  transform22
)
// engine.addEntity(books)
books.setParent(_scene)
// books.addComponentOrReplace(transform22)
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
// books.addComponentOrReplace(gltfShape11)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(32, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(16, 1, 1)
})
concreteWall.addComponentOrReplace(transform23)
const gltfShape12 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
concreteWall.addComponentOrReplace(gltfShape12)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
concreteWall2.addComponentOrReplace(gltfShape12)
const transform24 = new Transform({
  position: new Vector3(31.5, 0, 0),
  rotation: new Quaternion(5.9398868346521535e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(16, 1, 1)
})
concreteWall2.addComponentOrReplace(transform24)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape12)
const transform25 = new Transform({
  position: new Vector3(32, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(16, 1, 1)
})
concreteWall3.addComponentOrReplace(transform25)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
concreteWall4.addComponentOrReplace(gltfShape12)
const transform26 = new Transform({
  position: new Vector3(0.3, 0, 0),
  rotation: new Quaternion(5.9398868346521535e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(14.8, 1, 1)
})
concreteWall4.addComponentOrReplace(transform26)

const door3 = new Entity('door3')
engine.addEntity(door3)
door3.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(0, -1.3, 29.6),
  rotation: new Quaternion(-1.470097466002118e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(2.15,1.8,2)
})
door3.addComponentOrReplace(transform29)
const gltfShape13 = new GLTFShape("ee544d83-0a1e-4025-9a78-05cd9a605c16/Door 10.glb")
door3.addComponentOrReplace(gltfShape13)
//Define start and end directions
let StartRot = Quaternion.Euler(0, 90, 0)
let EndRot = Quaternion.Euler(0, 180, 0)
const openDoorPosition = new utils.RotateTransformComponent(StartRot, EndRot, 2)
door3.addComponentOrReplace(
  new OnPointerDown((e) => {
    door3.addComponent(openDoorPosition)
    sceneMessageBus.emit("opened-door", openDoorPosition)
  }
    )
)

const concreteWall5 = new Entity('concreteWall5')
engine.addEntity(concreteWall5)
concreteWall5.setParent(_scene)
concreteWall5.addComponentOrReplace(gltfShape12)
const transform30 = new Transform({
  position: new Vector3(32, 4, 0),
  rotation: new Quaternion(0.7071068286895752, 2.4085271740892887e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(16, 8, 1)
})
concreteWall5.addComponentOrReplace(transform30)


// Books on the side table
const transform31 = new Transform({
  position: new Vector3(12, 0.6, 6.4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6, 0.6, 0.6)
})
const books2 = new Books(
  gltfShape11,
  transform31
)
books2.setParent(_scene)

// Sounds
const pickUpSound = new Entity()
pickUpSound.addComponent(new AudioSource(new AudioClip('sounds/pickUp.mp3')))
pickUpSound.addComponent(new Transform())
engine.addEntity(pickUpSound)
pickUpSound.setParent(Attachable.AVATAR)


const putDownSound = new Entity()
putDownSound.addComponent(new AudioSource(new AudioClip('sounds/putDown.mp3')))
putDownSound.addComponent(new Transform())
engine.addEntity(putDownSound)
putDownSound.setParent(Attachable.AVATAR)

// Grab book Controls
Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
  let transform = books2.getComponent(Transform)
  if (!books2.isGrabbed) {
    books2.isGrabbed = true
    pickUpSound.getComponent(AudioSource).playOnce()
   // Calculates the books2's position relative to the camera
    transform.position = Vector3.Zero()
    transform.rotation = Quaternion.Zero()
    transform.position.z += 0.5
    books2.setParent(Attachable.AVATAR)
  } else {
    books2.isGrabbed = false
    putDownSound.getComponent(AudioSource).playOnce()

    // Calculate books2's ground position
    books2.setParent(null) // Remove parent
    let forwardVector: Vector3 = Vector3.Forward()
      .scale(1.5)
      .rotate(Camera.instance.rotation)
    transform.position = Camera.instance.position.clone().add(forwardVector)
    transform.lookAt(Camera.instance.position)
    transform.rotation.x = 0
    transform.rotation.z = 0
    transform.position.y = 0.9
  }
})

const greenButton = new Entity('greenButton')
engine.addEntity(greenButton)
greenButton.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(16, 1, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenButton.addComponentOrReplace(transform32)

sceneMessageBus.on("opened-door", (info) => {
  log('messagebus', info)
  door3.addComponent(openDoorPosition)
})

sceneMessageBus.on('play-coffee-sound', (info) => {
  coffeeMachine.getComponent(AudioSource).playOnce()
})

// #1
const myVideoClip = new VideoClip(
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0


// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(15, 2, 2.5),
    scale: new Vector3(6, 3, 4)
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen)

// #5
myVideoTexture.play()

const projector = new Entity('projector')
const gltfShape14 = new GLTFShape('models/projector/projector.gltf')
projector.addComponentOrReplace(gltfShape14)
engine.addEntity(projector)
projector.setParent(_scene)
const transform34 = new Transform(
  {
    position: new Vector3(16, 3, 16),
    scale: new Vector3(0.01, 0.01, 0.01),
    rotation: new Quaternion(0, 45, -3, 1),
  }
)
projector.addComponentOrReplace(transform34)
log('alive projector', projector.alive)