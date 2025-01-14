---
sidebar_position: 74
---
# invensense_mpu6050.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/invensense_mpu6050.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
* Copyright (C) 2012 Invensense, Inc.
*/

#ifndef __INV_MPU6050_PLATFORM_H_
#define __INV_MPU6050_PLATFORM_H_

/**
 * struct inv_mpu6050_platform_data - Platform data for the mpu driver
 * @orientation:	Orientation matrix of the chip (deprecated in favor of
 *			mounting matrix retrieved from device-tree)
 *
 * Contains platform specific information on how to configure the MPU6050 to
 * work on this platform.  The orientation matrices are 3x3 rotation matrices
 * that are applied to the data to rotate from the mounting orientation to the
 * platform orientation.  The values must be one of 0, 1, or -1 and each row and
 * column should have exactly 1 non-zero value.
 *
 * Deprecated in favor of mounting matrix retrieved from device-tree.
 */
struct inv_mpu6050_platform_data {
	__s8 orientation[9];
};

#endif

```
