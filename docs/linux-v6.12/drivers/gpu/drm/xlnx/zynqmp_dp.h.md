---
sidebar_position: 7
---
# zynqmp_dp.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xlnx/zynqmp_dp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * ZynqMP DisplayPort Driver
 *
 * Copyright (C) 2017 - 2020 Xilinx, Inc.
 *
 * Authors:
 * - Hyun Woo Kwon <hyun.kwon@xilinx.com>
 * - Laurent Pinchart <laurent.pinchart@ideasonboard.com>
 */

#ifndef _ZYNQMP_DP_H_
#define _ZYNQMP_DP_H_

struct platform_device;
struct zynqmp_dp;
struct zynqmp_dpsub;

void zynqmp_dp_enable_vblank(struct zynqmp_dp *dp);
void zynqmp_dp_disable_vblank(struct zynqmp_dp *dp);

int zynqmp_dp_probe(struct zynqmp_dpsub *dpsub);
void zynqmp_dp_remove(struct zynqmp_dpsub *dpsub);

#endif /* _ZYNQMP_DP_H_ */

```
