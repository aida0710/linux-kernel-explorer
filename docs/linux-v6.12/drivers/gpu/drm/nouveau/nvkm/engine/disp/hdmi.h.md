---
sidebar_position: 23
---
# hdmi.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nvkm/engine/disp/hdmi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_DISP_HDMI_H__
#define __NVKM_DISP_HDMI_H__
#include "ior.h"

struct packed_hdmi_infoframe {
	u32 header;
	u32 subpack0_low;
	u32 subpack0_high;
	u32 subpack1_low;
	u32 subpack1_high;
};

void pack_hdmi_infoframe(struct packed_hdmi_infoframe *packed_frame,
			 u8 *raw_frame, ssize_t len);
#endif

```
