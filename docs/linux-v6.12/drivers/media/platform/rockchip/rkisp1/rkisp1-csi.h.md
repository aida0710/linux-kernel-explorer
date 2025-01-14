---
sidebar_position: 7
---
# rkisp1-csi.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/rockchip/rkisp1/rkisp1-csi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: (GPL-2.0+ OR MIT) */
/*
 * Rockchip ISP1 Driver - CSI-2 Receiver
 *
 * Copyright (C) 2019 Collabora, Ltd.
 * Copyright (C) 2022 Ideas on Board
 *
 * Based on Rockchip ISP1 driver by Rockchip Electronics Co., Ltd.
 * Copyright (C) 2017 Rockchip Electronics Co., Ltd.
 */
#ifndef _RKISP1_CSI_H
#define _RKISP1_CSI_H

struct rkisp1_csi;
struct rkisp1_device;
struct rkisp1_sensor_async;

int rkisp1_csi_init(struct rkisp1_device *rkisp1);
void rkisp1_csi_cleanup(struct rkisp1_device *rkisp1);

int rkisp1_csi_register(struct rkisp1_device *rkisp1);
void rkisp1_csi_unregister(struct rkisp1_device *rkisp1);

int rkisp1_csi_link_sensor(struct rkisp1_device *rkisp1, struct v4l2_subdev *sd,
			   struct rkisp1_sensor_async *s_asd,
			   unsigned int source_pad);

#endif /* _RKISP1_CSI_H */

```
