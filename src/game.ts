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
const gltfShape = new GLTFShape("models/floor-shape.glb")
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

const tableWithChairs = new Entity('tableWithChairs')
engine.addEntity(tableWithChairs)
tableWithChairs.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(25.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableWithChairs.addComponentOrReplace(transform12)
const gltfShape7 = new GLTFShape("models/Table_with_Chairs.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
tableWithChairs.addComponentOrReplace(gltfShape7)

const table = new Entity('table')
engine.addEntity(table)
table.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(6, 0.0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
table.addComponentOrReplace(transform15)
const gltfShape9 = new GLTFShape("models/Table 2.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
table.addComponentOrReplace(gltfShape9)

// const chairHighBack = new Entity('chairHighBack')
// engine.addEntity(chairHighBack)
// chairHighBack.setParent(_scene)
// const transform16 = new Transform({
//   position: new Vector3(16, 0, 14.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// chairHighBack.addComponentOrReplace(transform16)
// const gltfShape10 = new GLTFShape("models/HighBackChair.glb")
// gltfShape10.withCollisions = true
// gltfShape10.isPointerBlocker = true
// gltfShape10.visible = true
// chairHighBack.addComponentOrReplace(gltfShape10)

// const chairHighBack2 = new Entity('chairHighBack2')
// engine.addEntity(chairHighBack2)
// chairHighBack2.setParent(_scene)
// chairHighBack2.addComponentOrReplace(gltfShape10)
// const transform17 = new Transform({
//   position: new Vector3(15.5, 0, 17.5),
//   rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
//   scale: new Vector3(1, 1, 1)
// })
// chairHighBack2.addComponentOrReplace(transform17)

// const chairHighBack3 = new Entity('chairHighBack3')
// engine.addEntity(chairHighBack3)
// chairHighBack3.setParent(_scene)
// chairHighBack3.addComponentOrReplace(gltfShape10)
// const transform18 = new Transform({
//   position: new Vector3(16, 0, 17),
//   rotation: new Quaternion(1.8338432714645053e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
//   scale: new Vector3(1, 1, 1)
// })
// chairHighBack3.addComponentOrReplace(transform18)

// const chairHighBack4 = new Entity('chairHighBack4')
// engine.addEntity(chairHighBack4)
// chairHighBack4.setParent(_scene)
// chairHighBack4.addComponentOrReplace(gltfShape10)
// const transform19 = new Transform({
//   position: new Vector3(16, 0, 15.5),
//   rotation: new Quaternion(1.8338432714645053e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
//   scale: new Vector3(1, 1, 1)
// })
// chairHighBack4.addComponentOrReplace(transform19)

// const chairHighBack5 = new Entity('chairHighBack5')
// engine.addEntity(chairHighBack5)
// chairHighBack5.setParent(_scene)
// chairHighBack5.addComponentOrReplace(gltfShape10)
// const transform20 = new Transform({
//   position: new Vector3(15, 0, 15),
//   rotation: new Quaternion(-1.1811653373861985e-14, 0.7071068286895752, -8.429371689544496e-8, 0.7071068286895752),
//   scale: new Vector3(1, 1, 1)
// })
// chairHighBack5.addComponentOrReplace(transform20)

// const chairHighBack6 = new Entity('chairHighBack6')
// engine.addEntity(chairHighBack6)
// chairHighBack6.setParent(_scene)
// chairHighBack6.addComponentOrReplace(gltfShape10)
// const transform21 = new Transform({
//   position: new Vector3(15, 0, 16.5),
//   rotation: new Quaternion(-1.1811653373861985e-14, 0.7071068286895752, -8.429371689544496e-8, 0.7071068286895752),
//   scale: new Vector3(1, 1, 1)
// })
// chairHighBack6.addComponentOrReplace(transform21)

const transform22 = new Transform({
  position: new Vector3(6, 1, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6, 0.6, 0.6)
})
const gltfShape11 = new GLTFShape("models/Books.glb")
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
  scale: new Vector3(16, 1.5, 1)
})
concreteWall.addComponentOrReplace(transform23)
const gltfShape12 = new GLTFShape("models/PlainWhiteWall.glb")
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
  scale: new Vector3(16, 1.5, 1)
})
concreteWall2.addComponentOrReplace(transform24)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape12)
const transform25 = new Transform({
  position: new Vector3(32, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(16, 1.5, 1)
})
concreteWall3.addComponentOrReplace(transform25)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
concreteWall4.addComponentOrReplace(gltfShape12)
const transform26 = new Transform({
  position: new Vector3(0.3, 0, 0),
  rotation: new Quaternion(5.9398868346521535e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(14.8, 1.5, 1)
})
concreteWall4.addComponentOrReplace(transform26)

const door3 = new Entity('door3')
engine.addEntity(door3)
door3.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(0.2, -1, 29.6),
  rotation: new Quaternion(-1.470097466002118e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(2.15,1.8,2)
})
door3.addComponentOrReplace(transform29)
const gltfShape13 = new GLTFShape("models/Door 10.glb")
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
  position: new Vector3(32, 5.8, 0),
  rotation: new Quaternion(0.7071068286895752, 2.4085271740892887e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(16, 8, 1)
})
concreteWall5.addComponentOrReplace(transform30)


// Books on the side table
// const transform31 = new Transform({
//   position: new Vector3(12, 0.6, 6.4),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(0.6, 0.6, 0.6)
// })
// const books2 = new Books(
//   gltfShape11,
//   transform31
// )
// books2.setParent(_scene)

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
  let transform = books.getComponent(Transform)
  if (!books.isGrabbed) {
    books.isGrabbed = true
    pickUpSound.getComponent(AudioSource).playOnce()
   // Calculates the books's position relative to the camera
    transform.position = Vector3.Zero()
    transform.rotation = Quaternion.Zero()
    transform.position.z += 0.5
    books.setParent(Attachable.AVATAR)
  } else {
    books.isGrabbed = false
    putDownSound.getComponent(AudioSource).playOnce()

    // Calculate books's ground position
    books.setParent(null) // Remove parent
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

// #1
const myVideoClip = new VideoClip(
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
)

const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.emissiveTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0


const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(15, 2.9, 2.5),
    scale: new Vector3(6, 3, 4)
  })
)
screen.addComponent(myMaterial)
engine.addEntity(screen)

// myVideoTexture.play()

const board = new Entity('board')
engine.addEntity(board)
board.setParent(_scene)
board.addComponentOrReplace(new GLTFShape('models/Scoreboard.glb'))
const transformboard = new Transform({
  position: new Vector3(15, 0.8, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 4.5, 2)
})
board.addComponentOrReplace(transformboard)

// const box1 = new Entity()
// box1.addComponent(new BoxShape())
// box1.addComponent(
//   new Transform({
//     position: new Vector3(11, 2.4, 2.2),
//     scale: new Vector3(1, 2, 0.25)
//   })
// )
// const myMaterial1 = new Material()
// myMaterial1.albedoColor = Color4.Black()
// box1.addComponent(myMaterial1)
// engine.addEntity(box1)

// const canvas1 = new UICanvas()
// const image1Src = new Texture('images/happiest-mind.png')
// const image1 = new UIImage(canvas1, image1Src)
// image1.sourceLeft = 11
// image1.sourceTop = 2
// image1.sourceWidth = 5
// image1.sourceHeight = 11



const greenButton = new Entity('greenButton')
engine.addEntity(greenButton)
greenButton.setParent(_scene)
greenButton.addComponentOrReplace(new GLTFShape('models/Green_Button.glb'))
const transform32 = new Transform({
  position: new Vector3(6, 1, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenButton.addComponentOrReplace(transform32)
greenButton.addComponent(
  new OnPointerDown(
    () => {
    myVideoTexture.playing = !myVideoTexture.playing
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Press',
      distance: 6,
    }
  )
)

sceneMessageBus.on("opened-door", (info) => {
  log('messagebus', info)
  door3.addComponent(openDoorPosition)
})

const projector = new Entity('projector')
const gltfShape14 = new GLTFShape('models/projector/projector.gltf')
projector.addComponentOrReplace(gltfShape14)
engine.addEntity(projector)
projector.setParent(_scene)
const transform34 = new Transform(
  {
    position: new Vector3(15, 5, 16),
    scale: new Vector3(0.01, 0.01, 0.01),
    rotation: new Quaternion(0, 45, -3, 1),
  }
)
projector.addComponentOrReplace(transform34)

const large_podium = new Entity('large-podium')
const gltfShapePodiumL = new GLTFShape('models/black_large_podium/scene.gltf')
large_podium.addComponentOrReplace(gltfShapePodiumL)
engine.addEntity(large_podium)
large_podium.setParent(_scene)
const transformPodiumL = new Transform(
  {
    position: new Vector3(15, 0.5, 6),
    scale: new Vector3(0.04, 0.02, 0.04)
  }
)
large_podium.addComponentOrReplace(transformPodiumL)
log('podium alive', large_podium.alive)

const podium = new Entity('podium')
const gltfShapePodium = new GLTFShape('models/podium/podium.gltf')
podium.addComponentOrReplace(gltfShapePodium)
engine.addEntity(podium)
podium.setParent(_scene)
const transformPodium = new Transform(
  {
    position: new Vector3(9, 0.6, 13),
    scale: new Vector3(0.03, 0.03, 0.03),
    rotation: new Quaternion(0, 45, 0, 1)
  }
)
podium.addComponentOrReplace(transformPodium)
log('podium alive', podium.alive)