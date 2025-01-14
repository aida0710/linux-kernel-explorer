---
sidebar_position: 23
---
# pvr_fw_meta.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/imagination/pvr_fw_meta.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only OR MIT */
/* Copyright (c) 2023 Imagination Technologies Ltd. */

#ifndef PVR_FW_META_H
#define PVR_FW_META_H

#include <linux/types.h>

/* Forward declaration from pvr_device.h */
struct pvr_device;

int pvr_meta_cr_read32(struct pvr_device *pvr_dev, u32 reg_addr, u32 *reg_value_out);

#endif /* PVR_FW_META_H */

```
