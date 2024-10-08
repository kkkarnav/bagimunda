// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/* @const */
const GAME_TYPE = ['original'];

/**
 * Obstacle definitions.
 * minGap: minimum pixel space between obstacles.
 * multipleSpeed: Speed at which multiples are allowed.
 * speedOffset: speed faster / slower than the horizon.
 * minSpeed: Minimum speed which the obstacle can make an appearance.
 *
 * @typedef {{
 *   type: string,
 *   width: number,
 *   height: number,
 *   yPos: number,
 *   multipleSpeed: number,
 *   minGap: number,
 *   minSpeed: number,
 *   collisionBoxes: Array<CollisionBox>,
 * }}
 */
let ObstacleType;

/**
 * T-Rex runner sprite definitions.
 */
Runner.spriteDefinitionByType = {
  original: {
    LDPI: {
      BACKGROUND_EL: {x: 86, y: 2},
      CACTUS_LARGE: {x: 332, y: 2},
      CACTUS_SMALL: {x: 228, y: 2},
      OBSTACLE_2: {x: 332, y: 2},
      OBSTACLE: {x: 228, y: 2},
      CLOUD: {x: 86, y: 2},
      HORIZON: {x: 2, y: 54},
      MOON: {x: 484, y: 2},
      PTERODACTYL: {x: 134, y: 2},
      RESTART: {x: 2, y: 68},
      TEXT_SPRITE: {x: 655, y: 2},
      TREX: {x: 848, y: 2},
      STAR: {x: 645, y: 2},
      COLLECTABLE: {x: 2, y: 2},
      ALT_GAME_END: {x: 121, y: 2}
    },
    HDPI: {
      BACKGROUND_EL: {x: 166, y: 2},
      OBSTACLE_2: {x: 652, y: 2},
      OBSTACLE: {x: 446, y: 2},
      MOON: {x: 954, y: 2},
      TREX: {x: 1674, y: 2},
      BOSS: {x: 0, y: 2},
      METAL_BALL: {x: 440, y: 2},
      PAPER: {x: 498, y: 2},
      CAR: {x: 550, y: 2},
      FAN_GIRLS: {x: 636, y: 2},
      GLOVES: {x: 696, y: 2},
      CROWN: {x: 754, y: 2},
      CLOUD: {x: 166, y: 2},
      HORIZON: {x: 2, y: 104},
      PLANE: {x: 260, y: 2},
      PIGEON: {x: 838, y: 2},
      RESTART: {x: 2, y: 130},
      TEXT_SPRITE: {x: 1294, y: 2},
      STAR: {x: 1276, y: 2},
      COLLECTABLE: {x: 4, y: 4},
      ALT_GAME_END: {x: 242, y: 4},
      TOUCHDOWN_TEXT: {x: 580, y: 126},
      GAME_ENDED_TEXT: {x: 2060, y: 114}
    },
    MAX_GAP_COEFFICIENT: 1.5,
    MAX_OBSTACLE_LENGTH: 1,
    HAS_CLOUDS: 1,
    BOTTOM_PAD: 10,
    TREX: {
      WAITING_1: {x: 44, w: 44, h: 47, xOffset: 0},
      WAITING_2: {x: 44, w: 44, h: 47, xOffset: 0},
      RUNNING_1: {x: 132, w: 44, h: 47, xOffset: 0},
      RUNNING_2: {x: 176, w: 44, h: 47, xOffset: 0},
      JUMPING: {x: 0, w: 44, h: 47, xOffset: 0},
      CRASHED: {x: 220, w: 44, h: 47, xOffset: 0},
      COLLISION_BOXES: [
        new CollisionBox(22, 0, 17, 16), new CollisionBox(1, 18, 30, 9),
        new CollisionBox(10, 35, 14, 8), new CollisionBox(1, 24, 29, 5),
        new CollisionBox(5, 30, 21, 4), new CollisionBox(9, 34, 15, 4)
      ]
    },
    /** @type {Array<ObstacleType>} */
    OBSTACLES: [
      {
        type: 'METAL_BALL',
        width: 29,
        height: 50,
        yPos: 90,
        multipleSpeed: 7,
        minGap: 120,
        minSpeed: 0,
        collisionBoxes: [
          new CollisionBox(12, 12, 7, 30)
        ]
      },
      {
        type: 'CAR',
        width: 42,
        height: 36,
        yPos: 98,
        multipleSpeed: 7,
        minGap: 120,
        minSpeed: 0,
        collisionBoxes: [
          new CollisionBox(0, 12, 14, 30)
        ]
      },
      {
        type: 'PAPER',
        width: 26,
        height: 50,
        yPos: 90,
        multipleSpeed: 7,
        minGap: 120,
        minSpeed: 0,
        collisionBoxes: [
          new CollisionBox(10, 12, 7, 30)
        ]
      },
      {
        type: 'PLANE',
        width: 46,
        height: 40,
        yPos: [75, 100],    // Variable height.
        yPosMobile: [50, 100],  // Variable height mobile.
        multipleSpeed: 999,
        minSpeed: 0,
        minGap: 150,
        collisionBoxes: [
          new CollisionBox(15, 15, 16, 5), new CollisionBox(18, 21, 24, 6),
          new CollisionBox(2, 14, 4, 3), new CollisionBox(6, 10, 4, 7),
          new CollisionBox(10, 8, 6, 9)
        ],
        numFrames: 2,
        frameRate: 1000 / 12,
        speedOffset: .8
      },
      {
        type: 'FAN_GIRLS',
        width: 30,
        height: 50,
        yPos: 97,
        multipleSpeed: 7,
        minGap: 120,
        minSpeed: 0,
        collisionBoxes: [
          new CollisionBox(0, 12, 7, 38), new CollisionBox(8, 0, 7, 49),
          new CollisionBox(13, 10, 10, 38)
        ]
      },
      {
        type: 'PIGEON',
        width: 29,
        height: 40,
        yPos: [75, 100],    // Variable height.
        yPosMobile: [50, 100],  // Variable height mobile.
        multipleSpeed: 999,
        minSpeed: 0,
        minGap: 150,
        collisionBoxes: [
          new CollisionBox(15, 15, 16, 5), new CollisionBox(18, 21, 24, 6),
          new CollisionBox(2, 14, 4, 3), new CollisionBox(6, 10, 4, 7),
          new CollisionBox(10, 8, 6, 9)
        ],
        numFrames: 2,
        frameRate: 1000 / 12,
        speedOffset: .8
      },
      {
        type: 'GLOVES',
        width: 30,
        height: 50,
        yPos: 90,
        multipleSpeed: 7,
        minGap: 120,
        minSpeed: 0,
        collisionBoxes: [
          new CollisionBox(2, 12, 7, 38)
        ]
      },
      {
        type: 'CROWN',
        width: 44,
        height: 50,
        yPos: 90,
        multipleSpeed: 7,
        minGap: 120,
        minSpeed: 0,
        collisionBoxes: [
          new CollisionBox(6, 12, 7, 38)
        ]
      },
      {
        type: 'BOSS',
        width: 69,
        height: 50,
        yPos: 90,
        multipleSpeed: 7,
        minGap: 999,
        minSpeed: 0,
        collisionBoxes: [
          new CollisionBox(0, 30, 9999, 99999),
          new CollisionBox(0, 20, 9999, 99999),
          new CollisionBox(40, 10, 9999, 99999),
          new CollisionBox(0, 10, 9999, 99999),
          new CollisionBox(40, 0, 9999, 99999),
          new CollisionBox(0, 0, 9999, 99999),
        ]
      },
      {
        type: 'COLLECTABLE',
        width: 12,
        height: 38,
        yPos: 90,
        multipleSpeed: 999,
        minGap: 999,
        minSpeed: 0,
        collisionBoxes: [new CollisionBox(0, 0, 12, 38)]
      }
    ],
    BACKGROUND_EL: {
      'CLOUD': {
        HEIGHT: 14,
        MAX_CLOUD_GAP: 400,
        MAX_SKY_LEVEL: 30,
        MIN_CLOUD_GAP: 100,
        MIN_SKY_LEVEL: 71,
        OFFSET: 4,
        WIDTH: 46,
        X_POS: 1,
        Y_POS: 120
      }
    },
    BACKGROUND_EL_CONFIG: {
      MAX_BG_ELS: 1,
      MAX_GAP: 400,
      MIN_GAP: 100,
      POS: 0,
      SPEED: 0.5,
      Y_POS: 125
    },
    LINES: [
      {SOURCE_X: 2, SOURCE_Y: 52, WIDTH: 600, HEIGHT: 12, YPOS: 127},
    ],
    ALT_GAME_END_CONFIG: {
      WIDTH: 15,
      HEIGHT: 17,
      X_OFFSET: 0,
      Y_OFFSET: 0,
    },
    ALT_GAME_OVER_TEXT_CONFIG: {
      TEXT_X: 14,
      TEXT_Y: 2,
      TEXT_WIDTH: 108,
      TEXT_HEIGHT: 15,
      FLASH_DURATION: 1500
    }
  }
};