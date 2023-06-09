export interface ProjectInfo {
  title: string;
  description: string;

  thumbnail: string;
  link: string;
}

export const featuredProjects: ProjectInfo[] = [
  {
    title: 'museLIVE',
    description: 'Developed an iOS application for virtual musical concerts and voice chatting using SwiftUI.',
    thumbnail: './portfolio/muselive.png',
    link: 'https://apps.apple.com/ca/app/muselive-virtual-concerts/id1564042040',
  },
  {
    title: 'Geyser.AI',
    description:
      'Geyser is a GPT powered assistant that recommends video games based on user preference synced from Steam account. Developed a web page using Next.js and a server using FastAPI.',
    thumbnail: './portfolio/geyser.png',
    link: 'https://youtu.be/8jqpWXnwXPs',
  },
  {
    title: 'Splux - Multiplayer Game',
    description:
      'Splux is a multiplayer game in which four players battle with each other using blocks of different shapes.',
    thumbnail: './portfolio/Splux.JPG',
    link: 'https://www.crazygames.com/game/splux',
  },
  {
    title: 'LEGO Combat Field',
    description:
      'A third person shooter game made with LEGO models. Has most of the feature available in any TPS games. Won the "Best Creator" award from Unity LEGO Microgame competition.',
    thumbnail: './portfolio/LEGO.png',
    link: 'https://play.unity.com/mg/lego/lego-combat-field',
  },
  {
    title: '2D Motion Capture',
    description:
      'A Unity Asset which enables a deviceless motion capture for sprite animations. The python counterpart is built using openCV and torchvision.',
    thumbnail: './portfolio/mocap.gif',
    link: 'https://youtu.be/HTSUtTCNbGg',
  },
  {
    title: 'Auto-Sorting Smart Bin',
    description:
      'An artificial intelligence sorts out trash based on the image. A transfer learning from VGG16 is used.',
    thumbnail: './portfolio/AutoBin.jpg',
    link: 'https://www.youtube.com/watch?v=9VwjptOWMng&t',
  },
];

export const projectsList: ProjectInfo[] = [
  {
    title: 'True Detective',
    description:
      'True Detective is a narrative based game powered by GPT. Player should reveal the criminal by interrogating 5 suspects.',
    thumbnail: './portfolio/detective.png',
    link: 'https://truedetective.app/',
  },
  {
    title: 'Github Arcade',
    description:
      'Github Arcade is a Chrome Extension that enables playgin servel ATARI styled games on Github commit history board.',
    thumbnail: './portfolio/arcade.gif',
    link: 'https://github.com/1006labs/github-arcade',
  },
  {
    title: 'museLIVEStudio',
    description:
      'museLIVEStudio is a simple Digital Audio Workstation for museLIVE musicians. Paired with museLIVE platforms, museLIVEStudio can be used to live-stream high quality audio with processing capability. Developed using C++ with libAV and JUCE',
    thumbnail: './portfolio/studio.png',
    link: 'https://studio.muse.live/latest/museLIVEStudio_latest.dmg',
  },
  {
    title: 'Sooni NFT',
    description:
      'Developed a web page on which users can mint tokens for NFT stake project using React.js and ether.js',
    thumbnail: './portfolio/sooni.png',
    link: 'https://stake.gom2.io/',
  },
  {
    title: 'museVerse',
    description:
      'museVerse is a metaverse platform that provides vritual concert experience. Equipped with live streaming and proximity voice chatting, museVerse rooms serve as places for virtual concert, social community, and a private gathering for NFT holders.',
    thumbnail: './portfolio/museverse.png',
    link: 'https://verse.museli.o-r.kr/?id=464',
  },
  {
    title: 'TrollinTown',
    description:
      "TrollinTown NFT is a simple NFT project of various troll avatars. One distinguishing feature is that the owner of the NFT can set the troll's name, which appears on a nametag of the troll image.",
    thumbnail: './portfolio/Troll.png',
    link: 'https://opensea.io/collection/trollintown',
  },
  {
    title: 'Dambyurak',
    description:
      'Project Dambyurak introduces a unique concept of a commentable NFT on which anyone can leave a signature or a comment. Each comment is stored as a part of NFT on a blockchain.',
    thumbnail: './portfolio/dambyurak.png',
    link: 'https://k2sebeom.github.io/dambyurak-homepage/',
  },
  {
    title: 'CodeBlue',
    description:
      'An ios application compatible with Apple Watch that detects an emergency situation in a studium and alerts nearby audiences and medical personnels. Competed in TartanHacks2022.',
    thumbnail: './portfolio/codeblue.png',
    link: 'https://youtu.be/j6a8mXvD7Z0',
  },
  {
    title: 'HPC Connector on EC2',
    description:
      'A guide and scripts to use NICE Enginframe with HPC Connector on an EC2 instance. HPC Connector is a feature in NICE EnginFrame that enables a usage of AWS ParallelCluster. This guide addresses how to install and use HPC Connector on an EC2 instance.',
    thumbnail: 'https://github.com/k2sebeom/hpc-connector-on-ec2/raw/main/src/pic10.png',
    link: 'https://github.com/k2sebeom/hpc-connector-on-ec2',
  },
  {
    title: 'Squid Game AI Robot',
    description:
      'An implementation of the artificial intelligence for Young-hee robot from Squid Game. Built with Unity and PyTorch.',
    thumbnail: './portfolio/younghee.PNG',
    link: 'https://youtu.be/09M4UaBqaHE',
  },
  {
    title: 'Face Recognition with AWS DeepLens',
    description:
      'A workshop document for creating a face-recognition device using AWS DeepLens and Amazon Rekognition. AWS DeepLens is a camera-based device specialized in machine learning projects. By integrating two AI services by Amazon, this workshop introduces how to make a custom face recognizer.',
    thumbnail: 'https://k2sebeom.github.io/deeplens-rekognition-workshop/images/architecture.png',
    link: 'https://k2sebeom.github.io/deeplens-rekognition-workshop/',
  },
  {
    title: 'Flamecalc',
    description:
      'Numerical method to solve problems in calculus of variation using deep learning neural network. Flamecalc is a pytorch based package that can solve variational calculus with boundary condition.',
    thumbnail: './portfolio/flameline.gif',
    link: 'https://github.com/k2sebeom/flamecalc',
  },
  {
    title: 'On-the-fly HLS deployment using Elemental MediaConvert',
    description:
      'A workshop document for on-the-fly deployment VOD contents using HLS. Elemental MediaConvert is a cloud service for media format conversion. The workshop introduces how we can deploy a large VOD content while the conversion is in progress.',
    thumbnail: 'https://k2sebeom.github.io/emc-on-the-fly-workshop/images/diagram.png',
    link: 'https://k2sebeom.github.io/emc-on-the-fly-workshop/',
  },
  {
    title: 'Greedy Pokemon AI',
    description:
      'AI that plays pokemon battle using greedy policy. Using poke-env api and pokemon showdown, an ai plays pokemon random battle using greedy policy.',
    thumbnail: './portfolio/gokemon.PNG',
    link: 'https://github.com/k2sebeom/gokemon',
  },
  {
    title: 'Content Management Service using Amazon IVS',
    description:
      'Amazon Interactive Video Service is a high level service for live video streaming. This architecture is for building a simple content management service using a serverless architecture.',
    thumbnail: 'https://github.com/k2sebeom/Amazon-IVS-CMS/raw/main/src/diagram.png',
    link: 'https://github.com/k2sebeom/Amazon-IVS-CMS',
  },
  {
    title: 'AI -"Swipe Brick Breaker"',
    description:
      'This aritificial intelligence supported by Unity ML Agent plays "Swipe Brick Breaker," a game developed by Nine Games.',
    thumbnail: './portfolio/Swipe.JPG',
    link: 'https://k2sebeom.itch.io/swipebrick-ai',
  },
  {
    title: 'Numerical Method for Calculus of Variation',
    description: 'A numerical method of optimization using Fourier series and gradient descent',
    thumbnail: './portfolio/CalVar.JPG',
    link: './pdf/CVar.pdf',
  },
  {
    title: 'Adaptive Optics Simulator',
    description:
      'A numerical simulation of Adaptive Optics using Kolmogorov turbulence model and Shack-Hartmann method.',
    thumbnail: './portfolio/AO.JPG',
    link: './pdf/AO.pdf',
  },
  {
    title: 'VR Wizardry - Mobile Game',
    description:
      'A player moves the mobile phone to change the view and casts spells by drawing a pattern on the screen.',
    thumbnail: './portfolio/Wiz.JPG',
    link: 'https://k2sebeom.itch.io/spell',
  },
  {
    title: 'Reinforcement Learning - Drone',
    description: 'Using Unity ML Agent, an artificial intelligence learns how to fly a drone.',
    thumbnail: './portfolio/Drone.JPG',
    link: 'https://www.youtube.com/watch?v=LDCNoa7i5RM',
  },
  {
    title: 'Top-View Multiplayer Game',
    description: 'In a battle-royal styled multiplayer game, different players shoot each other to survive.',
    thumbnail: './portfolio/Field.JPG',
    link: 'https://k2sebeom.itch.io/combat-field',
  },
  {
    title: 'PyMODI - Open Source Package',
    description:
      'PyMODI is an open-source python library hosted by Luxrobo: contribution by SeBeom Lee on releases of 0.8.0, 0.9.0, and 1.0.0.',
    thumbnail: './portfolio/PyMODI.jpg',
    link: 'https://github.com/LUXROBO/pymodi',
  },
  {
    title: 'Galaga using PyMODI',
    description:
      'A game developed using pygame and pymodi. You can have a fully immersive gaming experience with custom made MODI controller.',
    thumbnail: './portfolio/Galaga.JPG',
    link: 'https://github.com/k2sebeom/pymodi_galaga',
  },
  {
    title: 'Image based Artificial Composer',
    description: 'An artificial intelligence creates a post-modern musical piece based on the computer vision!',
    thumbnail: './portfolio/Composer.JPG',
    link: 'https://github.com/k2sebeom/Image-based-Composer',
  },
  {
    title: 'PyPlayscii - Ascii Game Engine',
    description: 'PyPlayscii is an open source python package by which you can easily make an ascii-art styled game.',
    thumbnail: './portfolio/Playscii.JPG',
    link: 'https://github.com/k2sebeom/pyplayscii',
  },
  {
    title: 'MLSocket - Socket for Machine Learning',
    description:
      'MLSocket is an open source library as an extension of python socket. It enables an easy data transfer of numpy arrays and keras models through tcp connection.',
    thumbnail: './portfolio/MLSocket.JPG',
    link: 'https://github.com/k2sebeom/mlsocket',
  },
  {
    title: 'DIY Gyro Game Controller',
    description: 'Using Unity and PyMODI, a user can control the game using a DIY game controller.',
    thumbnail: './portfolio/GyroPad.JPG',
    link: 'https://www.youtube.com/watch?v=092Vcyxriis',
  },
];
