---
sidebar_position: 27
---
# pvr_fw_startstop.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/imagination/pvr_fw_startstop.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only OR MIT */
/* Copyright (c) 2023 Imagination Technologies Ltd. */

#ifndef PVR_FW_STARTSTOP_H
#define PVR_FW_STARTSTOP_H

/* Forward declaration from pvr_device.h. */
struct pvr_device;

int pvr_fw_start(struct pvr_device *pvr_dev);
int pvr_fw_stop(struct pvr_device *pvr_dev);

#endif /* PVR_FW_STARTSTOP_H */

```
